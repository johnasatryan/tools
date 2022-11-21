import React from 'react';
import { refreshTypes } from '../../types/refreshTypes';
import Link from 'next/link';

// #### Redux
import { useDispatch } from 'react-redux';

export default function RefreshPopUp({
  setRefreshPopUp,
  onFlip,
}: refreshTypes) {
  const dispatch = useDispatch();

  const refreshImage = () => {
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

  const cancleRefresh = () => {
    setRefreshPopUp(false);
  };

  return (
    <div className='refreshPart'>
      <div className='refreshPopUp'>
        <span className='refreshName'>Start over with a new file?</span>
        <div className='refreshButtons'>
          <button className='cancelRefresh' onClick={cancleRefresh}>
            Cancle
          </button>
          <button className='confirmRefresh' onClick={refreshImage}>
            <Link href='/'>Start over</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
