import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import copyLogo from '../../assets/images/modifyPage/copy.svg';
import copied from '../../assets/images/modifyPage/copied.svg';
import closeLogo from '../../assets/images/modifyPage/close.svg';
import QRCode from 'react-qr-code';
import closeSvg from '../../assets/images/uploadPage/close.svg';
import checkMark from '../../assets/images/uploadPage/Checkmark.svg';
import ShareIcons from '../../assets/constants/Icons';
import {
  FacebookShareButton,
  LinkedinShareButton,
  EmailShareButton,
  TwitterShareButton,
} from 'next-share';
import { shareType } from '../../types/shareType';
// #### Redux
import { useSelector } from 'react-redux';

export default function SharePopUp({ data, setSharePopUp }: shareType) {
  const image = useSelector((state: any) => state.image);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [shareUrl, setShareUrl] = useState<string | null>(null);

  const copyValue = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(`${shareUrl}`);
    let notification = document.querySelector('.notification-bottom');
    notification?.classList.add('active');
    setTimeout(() => {
      notification?.classList.add('hidden');
    }, 3000);
  };

  const closeShare = () => {
    setSharePopUp(false);
  };
  return (
    <div className='sharePart'>
      <div className='sharePopUp'>
        <div className='notification notification-bottom'>
          <div className='notification-left'>
            <Image src={checkMark} alt='icon' />
            <p className='notification-text'>
              Your image was successfully uploaded!
            </p>
          </div>
          <Image className='notification-right' src={closeSvg} alt='icon' />
        </div>
        <div className='shareImagePart'>
          <Image
            src={data.imgPath ? data.imgPath : image ? image : ''}
            alt='image'
            width={335}
            height={445}
            objectFit='contain'
          />
        </div>
        <div className='shareTools'>
          <button className='shareClose' onClick={closeShare}>
            <Image src={closeLogo} alt='close logo' />
          </button>
          <div className='shareHeader'>
            <span className='shareName'>Share the results</span>
            <p className='shareHeader--sub'>
              Your file will be deleted after 30 days
            </p>
          </div>
          <div className='shareLink'>
            <p className='shareDescription'>Share download link</p>
            <div className='shareLinkInfo'>
              <span className='linkSpan'>{shareUrl ? shareUrl : ''}</span>
              <button className='copyPart' onClick={copyValue}>
                <Image
                  src={isCopied ? copied : copyLogo}
                  alt='copy logo'
                  width={isCopied ? 14 : 16}
                  height={isCopied ? 14 : 16}
                />
                <span>{isCopied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <div className='shareLinkSocial'>
              <FacebookShareButton
                url={shareUrl ? shareUrl : ''}
                style={{ marginRight: '16px' }}
              >
                <button className='share-btn share-btn--facebook'>
                  <Image
                    src={ShareIcons.facebookIcon}
                    alt=''
                    width={9}
                    height={16}
                  />
                </button>
              </FacebookShareButton>
              <LinkedinShareButton
                url={shareUrl ? shareUrl : ''}
                style={{ marginRight: '16px' }}
              >
                <button className='share-btn share-btn--linkedin'>
                  <Image
                    src={ShareIcons.linkedinIcon}
                    alt=''
                    width={14}
                    height={12}
                  />
                </button>
              </LinkedinShareButton>
              <TwitterShareButton
                url={shareUrl ? shareUrl : ''}
                style={{ marginRight: '16px' }}
              >
                <button className='share-btn share-btn--twitter'>
                  <Image
                    src={ShareIcons.twitterIcon}
                    alt=''
                    width={16}
                    height={14}
                  />
                </button>
              </TwitterShareButton>
              <EmailShareButton url={shareUrl ? shareUrl : ''}>
                <button className='share-btn share-btn-mail'>
                  <Image
                    src={ShareIcons.mailIcon}
                    alt=''
                    width={16}
                    height={13}
                  />
                </button>
              </EmailShareButton>
            </div>
            <div className='shareQr'>
              <span className='shareQrInfo'>Scan QR code to download!</span>
              <QRCode value={shareUrl ? shareUrl : ''} size={120} level={'Q'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
