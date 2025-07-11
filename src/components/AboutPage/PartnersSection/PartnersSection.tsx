import React from 'react';
import { useTranslation } from 'react-i18next';
import './PartnersSection.scss';

// Импорты изображений
import msc from '@/assets/images/partners/1.png';
import cosco from '@/assets/images/partners/2.png';
import hapag from '@/assets/images/partners/3.png';
import one from '@/assets/images/partners/4.png';
import zim from '@/assets/images/partners/5.png';
import msc1 from '@/assets/images/partners/6.png';
import cosco2 from '@/assets/images/partners/7.png';
import hapag3 from '@/assets/images/partners/8.png';
import one4 from '@/assets/images/partners/9.png';
import zim5 from '@/assets/images/partners/10.png';


interface Logo {
  src: string;
  alt?: string;  
}

interface PartnersSectionProps {
  logos?: Logo[]; 
}

const PartnersSection: React.FC<PartnersSectionProps> = ({ logos: backendLogos }) => {
  const { t } = useTranslation();

  const defaultLogos: Logo[] = [
    { src: msc },
    { src: cosco },
    { src: hapag },
    { src: one },
    { src: zim },
    { src: msc1 },
    { src: cosco2 },
    { src: hapag3 },
    { src: one4 },
    { src: zim5 },
  ];

  const logos = backendLogos || defaultLogos;

  return (
    <section className="partners" aria-label={`${t('about.partners.partners.title')} ${t('partners.description')}`}>
      <div className="partners__header" data-aos="fade-up">
        <h2>{t('about.partners.partners.title')}</h2>
        <p>{t('about.partners.partners.description')}</p>
      </div>

      <div className="partners__slider-wrapper">
        <div className="partners__slider">
          {[...logos, ...logos].map((logo, idx) => (
            <div key={idx} className="partners__logo">
              <img
                src={logo.src}
                alt={logo.alt || t('about.partners.partners.logoAlt')}  
                loading="lazy"  
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;