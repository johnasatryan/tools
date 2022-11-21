import type { NextPage } from 'next';
import Image from 'next/image';
import colorPart from '../../assets/images/color.png';
import convertPart from '../../assets/images/convert.png';
import designPart from '../../assets/images/design.png';
import imagesPart from '../../assets/images/images.png';
import pdfPart from '../../assets/images/pdf.png';
import iconMenu from '../../assets/images/icon_menu.png';
import quickToolPart from '../../assets/images/quickTool.png';
import searchPart from '../../assets/images/search.png';
import sharedPart from '../../assets/images/shared.png';
import videosPart from '../../assets/images/videos.png';
import textPart from '../../assets/images/text.png';

export const Header: NextPage = () => {
  return (
    <header className='header'>
      <div className='header-mobile'>
        <div>
          <Image src={iconMenu} alt='menu-icon' />
        </div>
        <div>
          <Image src={quickToolPart} alt='logo' />
        </div>
        <div>
          <Image src={sharedPart} alt='shared' />
        </div>
      </div>
      <div className='header-desktop'>
        <div className='header-desktop-logo'>
          <Image src={quickToolPart} alt='logo' />
        </div>
        <nav className='header-desktop-nav'>
          <div>
            <Image src={convertPart} alt='convertPart' />
          </div>
          <div>
            <Image src={imagesPart} alt='imagesPart' />
          </div>
          <div>
            <Image src={pdfPart} alt='pdf' />
          </div>
          <div>
            <Image src={textPart} alt='text' />
          </div>
          <div>
            <Image src={videosPart} alt='videos' />
          </div>
          <div>
            <Image src={designPart} alt='design' />
          </div>
          <div>
            <Image src={colorPart} alt='color' />
          </div>
        </nav>
        <div className='header-desktop-right'>
          <div>
            <Image src={searchPart} alt='search' />
          </div>
          <div>
            <Image src={sharedPart} alt='shared' />
          </div>
        </div>
      </div>
    </header>
  );
};
