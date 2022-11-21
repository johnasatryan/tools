// @ts-ignore
import DropboxChooser from 'react-dropbox-chooser';
import axios from 'axios';
import Image from 'next/image';
import dropboxImg from '../../assets/images/uploadPage/dropbox.svg';
// #### Redux
import { useDispatch } from 'react-redux';
import router from 'next/router';

export default function DropboxPicker() {
  const dispatch = useDispatch();
  const DropboxKey = process.env.NEXT_PUBLIC_DROPBOX_KEY || '';
  const dropboxSuccess = (files: any) => {
    const dropboxlink = files[0].link;
    const dropBoxName = files[0].name;
    const dropBoxMimeType =
      'image/' + dropBoxName.slice(dropBoxName.lastIndexOf('.') + 1);
    console.log(dropBoxMimeType);
    axios
      .get(dropboxlink, {
        headers: {
          'Content-Type': 'application/octet-stream',
        },
        responseType: 'blob',
      })
      .then((res) => {
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
        getBase64(res.data, (result: string) => {
          dispatch({
            type: 'ADD_IMAGE',
            payload: result,
          });
        });
        router.push('/mirror');
      });
  };

  return (
    <div className='App'>
      <DropboxChooser
        appKey={DropboxKey}
        success={dropboxSuccess}
        linkType='direct'
        multiselect={false}
        extensions={['.jpg', '.png', '.jpeg']}
      >
        <button className='btn btn-secondary'>
          <Image src={dropboxImg} alt='dropboxImg' />
          <div className='btn-text-secondary'>Dropbox</div>
        </button>
      </DropboxChooser>
    </div>
  );
}
