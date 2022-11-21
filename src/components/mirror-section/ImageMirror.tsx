import Image from 'next/image';
import React from 'react';
import { mirrorTypes } from '../../types/mirrorTypes';
import horizontal from '../../assets/images/modifyPage/flip-horizontal.svg';
import vertical from '../../assets/images/modifyPage/flip-vertical.svg';
// #### Redux

export default function ImageMirror({
  data,
  onFlip,
  imgRef,
  btState,
}: mirrorTypes) {
  // Mirror flip image horizontal
  const flipHorizontal = () => {
    getMirroredImg(imgRef.current, true, false);
  };
  // Mirror flip image vertical
  const flipVertical = () => {
    getMirroredImg(imgRef.current, false, true);
  };

  const getMirroredImg = (
    image: any,
    flipHorizontal: boolean,
    flipVertical: boolean
  ) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const scaleX = flipHorizontal === true ? -1 : 1;
    const scaleY = flipVertical === true ? -1 : 1;

    const x = flipHorizontal ? -image.naturalWidth : 0;
    const y = flipVertical ? -image.naturalHeight : 0;
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;

    if (ctx) {
      ctx.scale(scaleX, scaleY);
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(image, x, y, image.naturalWidth, image.naturalHeight);
    }
    canvas.toBlob((blob) => {
      if (!blob) {
        console.error('Canvas is empty');
        return;
      }
      onFlip({
        ...data,
        count: data.count + 1,
        imgPath: window.URL.createObjectURL(blob),
        flipHorizontal: flipHorizontal,
        flipVertical: flipVertical,
      });
    });
  };

  return (
    <div className='tools-flipbutton'>
      <button
        className={`tools-flipbutton-h ${btState ? 'btndisable' : ''}`}
        onClick={flipHorizontal}
        disabled={btState}
      >
        <div>
          <Image
            src={horizontal}
            alt='flip horizontal'
            width={30}
            height={30}
          />
        </div>
        <span className='btn-text-tertiary'>Horizontally</span>
      </button>
      <button
        className={`tools-flipbutton-v ${btState ? 'btndisable' : ''}`}
        onClick={flipVertical}
        disabled={btState}
      >
        <div>
          <Image src={vertical} alt='flip vertical' width={30} height={30} />
        </div>
        <span className='btn-text-tertiary'>Vertically</span>
      </button>
    </div>
  );
}
