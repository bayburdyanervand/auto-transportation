import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './AboutBanner.scss';

import { ReactComponent as KontainerGreen } from '@/assets/svg/kontainer_green.svg';
import { ReactComponent as KontainerYellow } from '@/assets/svg/kontainer_yellow.svg';
import { ReactComponent as KontainerGrey } from '@/assets/svg/kontainer-grey.svg';
import { ReactComponent as KontainerBlue } from '@/assets/svg/kontainer-blue.svg';
import shipImage from '@/assets/images/ship.webp';


interface BannerData {
  image?: string; 
}


interface AboutBannerProps {
  t?: (key: string) => string; 
  bannerData?: BannerData; 
}

const AboutBanner: React.FC<AboutBannerProps> = ({ t, bannerData }) => {
  const translate = t || ((key: string) => key); 
  const [drop, setDrop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDrop(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const bannerImage = bannerData?.image || shipImage;

  return (
    <section className="about-banner" aria-label={translate('about.banner.aboutBanner.ariaLabel')}>
      <div className="about-banner__container">
        <div className="about-banner__containers">
          <KontainerGreen className={`container-item green ${drop ? 'drop-animation' : ''}`} />
          <KontainerYellow className={`container-item yellow ${drop ? 'drop-animation' : ''}`} />
          <KontainerGrey className="container-item grey" />
          <KontainerBlue className="container-item blue" />
        </div>

        <div className="about-banner__wrapper">
          <div className="about-banner__text">
            <h1>{translate('about.banner.aboutBanner.title')}</h1>
            <p>{translate('about.banner.aboutBanner.description')}</p>
          </div>
        </div>

        <div className="about-banner__image-wrapper">
          <img src={bannerImage} alt={translate('about.banner.aboutBanner.imageAlt')} className="about-banner__image" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;