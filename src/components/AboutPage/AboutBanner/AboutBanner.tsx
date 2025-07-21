import React, { useEffect, useState } from 'react';
import './AboutBanner.scss';

import { ReactComponent as ContainerGreen } from '@/assets/svg/container_green.svg';
import { ReactComponent as ContainerYellow } from '@/assets/svg/container_yellow.svg';
import { ReactComponent as ContainerGrey } from '@/assets/svg/container-grey.svg';
import { ReactComponent as ContainerBlue } from '@/assets/svg/container-blue.svg';
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
          <ContainerGreen className={`container-item green ${drop ? 'drop-animation' : ''}`} />
          <ContainerYellow className={`container-item yellow ${drop ? 'drop-animation' : ''}`} />
          <ContainerGrey className="container-item grey" />
          <ContainerBlue className="container-item blue" />
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