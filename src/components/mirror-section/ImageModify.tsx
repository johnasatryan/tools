/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { modifyTypes } from '../../types/modifyTypes';
import MofifyPage from '../../assets/constants/ModifyPage';
import DeletePopUp from '../popUps/delete-popup';
import RefreshPopUp from '../popUps/refresh-popup';
import { Tooltip } from 'antd';
// #### Redux
import { useSelector } from 'react-redux';

const Context = React.createContext({ name: 'Default' });

export default function ImageModify({ data, onFlip, imgRef }: modifyTypes) {
  const image = useSelector((state: any) => state.image);
  const [deletePopUp, setDeletePopUp] = useState<boolean>(false);
  const [refreshPopUp, setRefreshPopUp] = useState<boolean>(false);
  const loader = useRef<HTMLDivElement>(null);
  const loaderImage = useRef<any>(null);

  setTimeout(() => {
    if (loader.current !== null && loaderImage.current !== null) {
      loader.current.style.display = 'none';
      loaderImage.current.style.display = 'block';
    }
  }, 3000);

  useEffect(() => {
    let notification = document.querySelector('.notification');
    notification?.classList.add('active');
    setTimeout(() => {
      notification?.classList.add('hidden');
    }, 4500);
  }, []);

  const refreshPopup = (e: any) => {
    e.preventDefault();
    setRefreshPopUp(!refreshPopUp);
  };

  const deletePopup = (e: any) => {
    e.preventDefault();
    setDeletePopUp(!deletePopUp);
  };

  return (
    <div className='mirror-section-left-wrapper'>
      <div className='processing' ref={loader}>
        <h2 className='heading-secondary'>Processing...</h2>
        <div className='loader-wrapper'>
          <div className='loader-box'>
            <div className='loader-box-designloader'></div>
            <div>
              <Image
                src={MofifyPage.toggle}
                alt='loader gif'
                width={90}
                height={90}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='image-box' ref={loaderImage}>
        <div className='image-box-header'>
          <div className='image-box-header-buttons'>
            <Tooltip placement='top' title={'Restart'}>
              <button onClick={refreshPopup} className='refreshbutton'>
                <Image src={MofifyPage.refreshImage} alt='New Image' />
              </button>
            </Tooltip>
            <Tooltip placement='top' title={'Delete'}>
              <button onClick={deletePopup} className='deletebutton'>
                <Image src={MofifyPage.deleteImg} alt='Delete Image' />
              </button>
            </Tooltip>
          </div>
        </div>
        <div className='image-box-img'>
          <div className='image-box-img-wrapper'>
            <img
              src={data.imgPath ? data.imgPath : image}
              alt='Mirror Image'
              ref={imgRef}
            />
          </div>
          <div className='notification notification-top'>
            <div className='notification-left'>
              <Image src={MofifyPage.checkMark} alt='icon' />
              <p className='notification-text'>
                Your image was successfully uploaded!
              </p>
            </div>
            <Image
              className='notification-right'
              src={MofifyPage.closeSvg}
              alt='icon'
            />
          </div>
        </div>
      </div>
      {deletePopUp ? (
        <DeletePopUp setDeletePopUp={setDeletePopUp} onFlip={onFlip} />
      ) : (
        ''
      )}

      {refreshPopUp ? (
        <RefreshPopUp setRefreshPopUp={setRefreshPopUp} onFlip={onFlip} />
      ) : (
        ''
      )}
    </div>
  );
}
