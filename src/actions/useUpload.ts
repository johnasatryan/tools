import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

const useUpload = () => {

    const [error, setError] = useState(false);
    const dispatch = useDispatch();
    const dragRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const closeError = () => {
        setError(false);
    };
    const onDragEnter = (e: any) => {
        if (dragRef.current !== null) {
            e.target.draggable = true;
            dragRef.current.classList.add('dragover');
        }
    };

    const onDragLeave = (e: any) => {
        if (dragRef.current !== null) {
            e.target.draggable = false;
            dragRef.current.classList.remove('dragover');
        }
    };

    const upload = (e: any) => {
        e.preventDefault();

        if (e.target.files !== null) {
            if (!e.target.files[0]?.name.match(/\.(jpg|jpeg|png)$/)) {
                setError(true);
                e.target.value = null;
                return false;
            }

            const file = e.target.files[0];
            const getBase64 = (file: any, cb: Function) => {
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function () {
                    cb(reader.result);
                };
                reader.onerror = function (error) {
                    console.log('Error: ', error);
                };
            };

            getBase64(file, (result: string) => {
                dispatch({
                    type: 'ADD_IMAGE',
                    payload: result,
                });
            });

            router.push('/mirror');
        }
    };
    const disableClick = (e: any) => {
        e.preventDefault();
        e.target.disable = true;
    };

    return {
        error, dragRef, closeError, onDragEnter, onDragLeave, upload, disableClick
    }
}
export default useUpload;