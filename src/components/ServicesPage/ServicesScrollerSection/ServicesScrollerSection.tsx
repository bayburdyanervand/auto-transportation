import React from 'react';
import { useTranslation } from 'react-i18next';
import './ServicesScrollerSection.scss';

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface ServicesScrollerSectionProps {
  t?: (key: string) => string; 
  services?: Service[];
}

const ServicesScrollerSection: React.FC<ServicesScrollerSectionProps> = ({ t, services: backendServices }) => {
  const { t: translate } = useTranslation(); 
  const fallbackTranslate = t || ((key: string) => {
    return key; 
  });

  const defaultServices: Service[] = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    title: `${fallbackTranslate('about.services.scroller.titlePrefix')} ${i + 1}`, 
    description: `${fallbackTranslate('about.services.scroller.description')} ${i + 1}...`, 
    image: require(`@/assets/images/services/${i + 1}.png`),
  }));

  const services = backendServices || defaultServices;

  return (
    <section className="services-scroll">
      {services.map((item, index) => (
        <div className="services-scroll__block" key={item.id} data-aos="fade-up">
          <div className="services-scroll__left">
            <h2>{item.title}</h2>
          </div>
          <div className="services-scroll__right">
            <img src={item.image} alt={item.title} loading="lazy" />
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServicesScrollerSection;