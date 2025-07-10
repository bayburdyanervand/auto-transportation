import React from 'react';
import CargoImage from '@/assets/images/ship.webp';
import { ReactComponent as ShipIcon } from '@/assets/svg/ship.svg';
import { ReactComponent as CarIcon } from '@/assets/svg/car.svg';

interface Props {
  t: any;
}

const ServiceOverviewSection: React.FC<Props> = ({ t }) => {
  const descriptionLines = t('ourservices.overview.description', { returnObjects: true }) as string[];


  return (
    <div className="our-services__overview">
      <div className="text">
        <h2 data-aos="fade-up">{t('ourservices.overview.title')}</h2>

        {[...descriptionLines]?.map((line, index) => (
          <p
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}  
          >
            {line}
          </p>
        ))}

        <button data-aos="fade-up" data-aos-delay={descriptionLines.length * 100}>
          {t('ourservices.overview.button')}
        </button>
      </div>

      <div className="image" data-aos="fade-left">
        <img src={CargoImage} alt="Cargo Service" />
        <div className="icon ship"><ShipIcon /></div>
        <div className="icon car"><CarIcon /></div>
      </div>
    </div>
  );
};


export default ServiceOverviewSection;
