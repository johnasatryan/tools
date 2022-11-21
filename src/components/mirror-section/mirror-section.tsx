import type { NextPage } from 'next';
import { useReducer, useRef } from 'react';
import { actionTypes } from '../../types/reducerTypes';
import Reducer from './AppReducer';
import ImageModify from './ImageModify';
import { NewImage } from './NewImage';
import ToolsMenu from './ToolsMenu';
// #### Redux
import { useSelector } from 'react-redux';

export const MirrorSection: NextPage = () => {
  const image = useSelector((state: any) => state.image);

  const [data, dispatch]: any & actionTypes = useReducer<any>(Reducer, []);
  const imgRef = useRef(null);

  const onFlipFunc = (flip: boolean) => {
    dispatch({
      type: 'flip',
      payload: {
        updated: flip,
      },
    });
  };

  return (
    <>
      <main className='mirror-section'>
        <div className='mirror-section-left'>
          {image ? (
            <ImageModify data={data} onFlip={onFlipFunc} imgRef={imgRef} />
          ) : (
            <NewImage />
          )}
        </div>
      </main>
      <aside className='mirror-section-right'>
        <ToolsMenu data={data} onFlip={onFlipFunc} imgRef={imgRef} />
      </aside>
    </>
  );
};
