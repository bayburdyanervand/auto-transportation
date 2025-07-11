import React from 'react';
import { useTranslation } from 'react-i18next';
import ServicesBanner from './ServicesBanner/ServicesBanner';
import ServicesScrollerSection from './ServicesScrollerSection/ServicesScrollerSection';
import FAQSection from '../FAQSection/FAQSection';

const ServicesPage: React.FC = () => {
    const { t } = useTranslation();
  return (
    <div className="services-page">
      <ServicesBanner  t= {t}  />
      <main className="services-page__content">
        <ServicesScrollerSection t= {t}/>
        <FAQSection t= {t}/>
      </main>
    </div>
  );
};

export default ServicesPage;
