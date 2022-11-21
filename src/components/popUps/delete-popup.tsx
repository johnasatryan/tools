import Image from 'next/image';
import React, { useEffect } from 'react';
import deleteImg from '../../assets/images/modifyPage/delete.svg';
import { deleteTypes } from '../../types/deleteTypes';
// #### Redux
import { useDispatch } from 'react-redux';
import router from 'next/router';

export default function DeletePopUp({ setDeletePopUp, onFlip }: deleteTypes) {
  // Image Delete and readirect default root

  const dispatch = useDispatch();
  const deleteImage = () => {
    dispatch({
      type: 'REMOVE_IMAGE',
      payload: null,
    });
    onFlip({
      imgPath: null,
      flipHorizontal: false,
      flipVertical: false,
    });
  };

  const cancleDelete = () => {
    setDeletePopUp(false);
  };

  return (
    <div className='deletePart'>
      <div className='deletePopUp'>
        <div className='deleteDescription'>
          <div className='deleteHeader'>
            <Image src={deleteImg} alt='delete logo' width={24} height={24} />
            <span className='deleteName'>Delete file?</span>
          </div>
          <span className='deleteInfo'>
            This action is permanent and {"can't"} be undone.
          </span>
        </div>
        <div className='deleteButtons'>
          <button className='cancelDelete' onClick={cancleDelete}>
            Cancle
          </button>
          <button className='confirmDelete' onClick={deleteImage}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
