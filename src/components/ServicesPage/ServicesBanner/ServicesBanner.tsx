import React from 'react';
import { useTranslation } from 'react-i18next';
import './ServicesBanner.scss';

import { ReactComponent as GreenContainer } from '@/assets/svg/container_green.svg';
import { ReactComponent as ContainerGroup } from '@/assets/svg/container_group.svg';
import { ReactComponent as Truck } from '@/assets/svg/truck.svg';
import { ReactComponent as Crane } from '@/assets/svg/crane.svg';

interface ServicesBannerProps {
  t?: (key: string) => string; 
}

const ServicesBanner: React.FC<ServicesBannerProps> = ({ t }) => {
  const translate = t || ((key: string) => key);  

  return (
    <section className="services-banner" aria-label={translate('about.services.banner.ariaLabel')}>
      <div className="icon-container top-left">
        <GreenContainer />
      </div>
      <div className="icon-container bottom-left">
        <ContainerGroup width={500} height={100} />
      </div>
      <div className="icon-container truck">
        <Truck />
      </div>
      <div className="icon-container crane">
        <Crane />
      </div>

      <div className="services-banner__content">
        <h1 className="services-banner__title">{translate('about.services.banner.title')}</h1>
        <p className="services-banner__description">{translate('about.services.banner.description')}</p>
      </div>
    </section>
  );
};

export default ServicesBanner;