import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import './AboutFeaturesSection.scss';
import img1 from '@/assets/images/about/safest-transportation.png';
import img2 from '@/assets/images/about/best-price.png';
import img3 from '@/assets/images/about/flexible-service.jpg';

interface Feature {
  title: string;
  text: string;
  img: string;
  reverse: boolean;
  buttonText?: string;
}

interface AboutFeaturesSectionProps {
  features?: Feature[]; 
}

const AboutFeaturesSection: React.FC<AboutFeaturesSectionProps> = ({ features: backendFeatures }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const defaultFeatures: Feature[] = [
    {
      title: t('about.feautures.aboutFeatures.features.0.title'),
      text: t('about.feautures.aboutFeatures.features.0.text'),
      img: img1,
      reverse: false,
      buttonText: t('about.feautures.aboutFeatures.features.0.buttonText'),
    },
    {
      title: t('about.feautures.aboutFeatures.features.1.title'),
      text: t('about.feautures.aboutFeatures.features.1.text'),
      img: img2,
      reverse: true,
      buttonText: t('about.feautures.aboutFeatures.features.1.buttonText'),
    },
    {
      title: t('about.feautures.aboutFeatures.features.2.title'),
      text: t('about.feautures.aboutFeatures.features.2.text'),
      img: img3,
      reverse: false,
      buttonText: t('about.feautures.aboutFeatures.features.2.buttonText'),
    },
  ];

  const features = backendFeatures || defaultFeatures;

  return (
    <section className="about-features" aria-label={t('about.feautures.aboutFeatures.ariaLabel')}>
      {features.map((item, index) => (
        <div
          id={`feature-${index + 1}`}
          className={`about-features__item ${item.reverse ? 'reverse' : ''}`}
          key={index}
        >
          <div className="about-features__image" data-aos="zoom-in">
            <img src={item.img} alt={item.title} loading="lazy" />  
          </div>
          <div className="about-features__content" data-aos="fade-up">
            <h2>{item.title}</h2>
            <p>{item.text}</p>
            <button
              className="about-features__button"
              onClick={() => navigate('/experience')}
              aria-label={t('about.feautures.aboutFeatures.features.0.buttonText')}  
            >
              {item.buttonText}
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AboutFeaturesSection;