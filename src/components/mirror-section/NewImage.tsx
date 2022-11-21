import { NextPage } from 'next';
import Image from 'next/image';
import newImage from '../../assets/images/modifyPage/newImageSvg.svg';
import DropboxPicker from '../section/dropboxPicker';
//import GoogleDrive from '../section/googleDrivePicker';
import googledriveImg from '../../assets/images/uploadPage/googledrive.svg';

import useUpload from '../../actions/useUpload';
import GoogleDrive from 'gdrive-tools';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import router from 'next/router';

export const NewImage: NextPage = () => {
  const [image, setImage] = useState('');
  const esiminch = GoogleDrive(setImage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'ADD_IMAGE',
      payload: image,
    });
    router.push('/mirror');
  }, [dispatch, image]);

  const {
    error,
    dragRef,
    closeError,
    onDragEnter,
    onDragLeave,
    upload,
    disableClick,
  } = useUpload();

  return (
    <>
      <article className='fileupload'>
        <div className='fileupload-wrapper'>
          {error ? (
            <div className='error-notification'>
              <div className='error-notification-left'>
                <svg
                  width='22'
                  height='22'
                  viewBox='0 0 22 22'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M11 9.00781C11.2031 9.00781 11.375 9.07812 11.5156 9.21875C11.6719 9.35938 11.75 9.53906 11.75 9.75781V15.2422C11.75 15.4609 11.6719 15.6406 11.5156 15.7812C11.375 15.9219 11.2031 15.9922 11 15.9922C10.7969 15.9922 10.6172 15.9219 10.4609 15.7812C10.3203 15.6406 10.25 15.4609 10.25 15.2422V9.75781C10.25 9.53906 10.3203 9.35938 10.4609 9.21875C10.6172 9.07812 10.7969 9.00781 11 9.00781ZM11.75 6.75781C11.75 6.53906 11.6719 6.35938 11.5156 6.21875C11.375 6.07812 11.2031 6.00781 11 6.00781C10.7969 6.00781 10.6172 6.07812 10.4609 6.21875C10.3203 6.35938 10.25 6.53906 10.25 6.75781V7.25C10.25 7.45312 10.3203 7.63281 10.4609 7.78906C10.6172 7.92969 10.7969 8 11 8C11.2031 8 11.375 7.92969 11.5156 7.78906C11.6719 7.63281 11.75 7.45312 11.75 7.25V6.75781ZM11 21.0078C9.625 21.0078 8.32812 20.7422 7.10938 20.2109C5.89062 19.6953 4.82812 18.9844 3.92188 18.0781C3.01562 17.1719 2.30469 16.1094 1.78906 14.8906C1.25781 13.6719 0.992188 12.375 0.992188 11C0.992188 9.625 1.25781 8.32812 1.78906 7.10938C2.30469 5.89062 3.01562 4.82812 3.92188 3.92188C4.82812 3.01563 5.89062 2.30469 7.10938 1.78906C8.32812 1.25781 9.625 0.992188 11 0.992188C12.375 0.992188 13.6719 1.25781 14.8906 1.78906C16.1094 2.30469 17.1719 3.01563 18.0781 3.92188C18.9844 4.82812 19.6953 5.89062 20.2109 7.10938C20.7422 8.32812 21.0078 9.625 21.0078 11C21.0078 12.375 20.7422 13.6719 20.2109 14.8906C19.6953 16.1094 18.9844 17.1719 18.0781 18.0781C17.1719 18.9844 16.1094 19.6953 14.8906 20.2109C13.6719 20.7422 12.375 21.0078 11 21.0078ZM11 19.5078C12.1719 19.5078 13.2734 19.2812 14.3047 18.8281C15.3359 18.3906 16.2344 17.7891 17 17.0234C17.7812 16.2422 18.3906 15.3359 18.8281 14.3047C19.2812 13.2734 19.5078 12.1719 19.5078 11C19.5078 9.82812 19.2812 8.72656 18.8281 7.69531C18.3906 6.66406 17.7812 5.76562 17 5C16.2344 4.21875 15.3359 3.60937 14.3047 3.17188C13.2734 2.71875 12.1719 2.49219 11 2.49219C9.82812 2.49219 8.72656 2.71875 7.69531 3.17188C6.66406 3.60937 5.75781 4.21875 4.97656 5C4.21094 5.76562 3.60938 6.66406 3.17188 7.69531C2.71875 8.72656 2.49219 9.82812 2.49219 11C2.49219 12.1719 2.71875 13.2734 3.17188 14.3047C3.60938 15.3359 4.21094 16.2422 4.97656 17.0234C5.75781 17.7891 6.66406 18.3906 7.69531 18.8281C8.72656 19.2812 9.82812 19.5078 11 19.5078Z'
                    fill='#080808'
                  />
                </svg>

                <p className='error-notification-left-text'>
                  Please use only JPG, JPEG or PNG Files.{' '}
                  <label
                    htmlFor='choose-file'
                    className='error-notification-left-text--sub'
                  >
                    Try Again
                  </label>
                </p>
              </div>
              <button className='btn-close' onClick={closeError}>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M0.475778 0.472168C0.616403 0.315918 0.788278 0.237793 0.991403 0.237793C1.21015 0.237793 1.38984 0.315918 1.53047 0.472168L7.99922 6.94092L14.468 0.472168C14.6086 0.315918 14.7805 0.237793 14.9836 0.237793C15.2023 0.237793 15.382 0.315918 15.5227 0.472168C15.6789 0.612793 15.757 0.79248 15.757 1.01123C15.757 1.21436 15.6789 1.38623 15.5227 1.52686L9.0539 7.99561L15.5227 14.4644C15.6789 14.605 15.757 14.7847 15.757 15.0034C15.757 15.2065 15.6789 15.3784 15.5227 15.519C15.382 15.6753 15.2023 15.7534 14.9836 15.7534C14.7805 15.7534 14.6086 15.6753 14.468 15.519L7.99922 9.05029L1.53047 15.519C1.38984 15.6753 1.21015 15.7534 0.991403 15.7534C0.788278 15.7534 0.616403 15.6753 0.475778 15.519C0.319528 15.3784 0.241403 15.2065 0.241403 15.0034C0.241403 14.7847 0.319528 14.605 0.475778 14.4644L6.94453 7.99561L0.475778 1.52686C0.319528 1.38623 0.241403 1.21436 0.241403 1.01123C0.241403 0.79248 0.319528 0.612793 0.475778 0.472168Z'
                    fill='#080808'
                  />
                </svg>
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className='new-img-heading u-margin-bottom-l'>
          Select an image to mirror
        </div>
        <div className=' newImage-wrapper'>
          <div
            className='fileupload-bottom u-padding-tb'
            ref={dragRef}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
          >
            <input
              className='drag-and-drop'
              type='file'
              name='image'
              accept='image/*'
              title=''
              onChange={upload}
              onClick={disableClick}
            />
            <div>
              <Image src={newImage} alt='new Image' />
            </div>

            <p className='paragraph'>Upload an image or drop it here.</p>
            <label className='btn btn-upload btn-text-primary btn-text-primary--white u-margin-bottom-m'>
              <input
                type='file'
                id='choose-file'
                className='choose-file'
                name='image'
                accept='image/*'
                title=''
                onChange={upload}
                hidden
              />
              <svg
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M8 0.0078125C8.20312 0.0078125 8.375 0.078125 8.51562 0.21875C8.67188 0.359375 8.75 0.539062 8.75 0.757812V7.25H15.2422C15.4609 7.25 15.6406 7.32812 15.7812 7.48438C15.9219 7.625 15.9922 7.79688 15.9922 8C15.9922 8.20312 15.9219 8.38281 15.7812 8.53906C15.6406 8.67969 15.4609 8.75 15.2422 8.75H8.75V15.2422C8.75 15.4609 8.67188 15.6406 8.51562 15.7812C8.375 15.9219 8.20312 15.9922 8 15.9922C7.79688 15.9922 7.61719 15.9219 7.46094 15.7812C7.32031 15.6406 7.25 15.4609 7.25 15.2422V8.75H0.757812C0.539062 8.75 0.359375 8.67969 0.21875 8.53906C0.078125 8.38281 0.0078125 8.20312 0.0078125 8C0.0078125 7.79688 0.078125 7.625 0.21875 7.48438C0.359375 7.32812 0.539062 7.25 0.757812 7.25H7.25V0.757812C7.25 0.539062 7.32031 0.359375 7.46094 0.21875C7.61719 0.078125 7.79688 0.0078125 8 0.0078125Z'
                  fill='white'
                />
              </svg>
              Upload Image
            </label>
            <div className='btn-box'>
              <DropboxPicker />
              {/* <GoogleDrive /> */}
              <div className='googleDrivePicker'>
                <button className='btn btn-secondary' onClick={esiminch}>
                  <Image src={googledriveImg} alt='googledriveImg' />

                  <div className='btn-text-secondary'>Google Drive</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
