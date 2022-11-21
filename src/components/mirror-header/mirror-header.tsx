import type { NextPage } from 'next';
import Image from 'next/image';
import mirrorLogo from '../../assets/images/modifyPage/mirror_logo.png';
import sharedPart from '../../assets/images/shared.png';

export const MirrorHeader: NextPage = () => {
  return (
    <header className='mirror-header'>
      <div className='mirror-header-logo'>
        <Image src={mirrorLogo} alt='quickToolPart' />
      </div>
      <div className='mirror-header-icon'>
        <Image src={sharedPart} alt='shared' />
      </div>
    </header>
  );
};
