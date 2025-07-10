import React from 'react';
import './OurServicesSection.scss';
import ServiceCardsSection from './ServiceCardsSection';
import ServiceOverviewSection from './ServiceOverviewSection';

const OurServicesSection = ({ t }: { t: any }) => {

  return (
    <section className="our-services">
      <section className={'our-services__cards-list'}>     
         <ServiceCardsSection t={t} />
      </section>
      <ServiceOverviewSection t={t} />
    </section>
  );
};

export default OurServicesSection;
