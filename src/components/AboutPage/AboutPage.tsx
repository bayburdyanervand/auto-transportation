import React, { useEffect } from 'react';
import './AboutPage.scss';
import { useTranslation } from 'react-i18next';
import AboutBanner from './AboutBanner/AboutBanner';
import AboutFeaturesSection from './AboutFeaturesSection/AboutFeaturesSection';
import PartnersSection from './PartnersSection/PartnersSection';
import ManagersSection from '../ManagersSection/ManagersSection';
import DeliverySection from '../DeliverySection/DeliverySection';



const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
    }
  }, []);


  return (
    <main className="about-page">
      <AboutBanner t={t} />
      <AboutFeaturesSection />
      <PartnersSection />
      <ManagersSection t={t} />
      <DeliverySection t={t}/>
    </main>
  );
};

export default AboutPage;
