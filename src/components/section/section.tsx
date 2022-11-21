import type { NextPage } from 'next';
import { ImageUpload } from './imageUpload';

export const Section: NextPage = () => {
  return (
    <div className='fileupload'>
      <ImageUpload />
    </div>
  );
};
