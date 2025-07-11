// src/components/OffersPage/OffersPage.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import './OfferPage.scss';

import offer1 from '@/assets/images/ofers/ofer-1.png';
import offer2 from '@/assets/images/ofers/ofer-2.png';
import offer3 from '@/assets/images/ofers/ofer-3.png';
import offer4 from '@/assets/images/ofers/ofer-4.png';
import offer5 from '@/assets/images/ofers/ofer-5.png';
import offer6 from '@/assets/images/ofers/ofer-6.png';

import OfferCard from '@/components/shared/OfferCard/OfferCard';

const OffersPage: React.FC = () => {
  const { t } = useTranslation();

  const offers = [
    { id: 1, title: t('offers.1.title'), description: t('offers.1.description'), image: offer1, date: '31 Mar 2025', tag: 'Box', linkText: t('offers.link') },
    { id: 2, title: t('offers.2.title'), description: t('offers.2.description'), image: offer2, date: '08 Nov 2024', tag: 'Box', linkText: t('offers.link') },
    { id: 3, title: t('offers.3.title'), description: t('offers.3.description'), image: offer3, date: '31 Oct 2023', tag: 'Box', linkText: t('offers.link') },
    { id: 4, title: t('offers.4.title'), description: t('offers.4.description'), image: offer4, date: '27 Oct 2023', tag: 'Box', linkText: t('offers.link') },
    { id: 5, title: t('offers.5.title'), description: t('offers.5.description'), image: offer5, date: '27 Oct 2023', tag: 'Box', linkText: t('offers.link') },
    { id: 6, title: t('offers.6.title'), description: t('offers.6.description'), image: offer6, date: '04 Oct 2023', tag: 'Box', linkText: t('offers.link') },
  ];

  return (
    <section className="offers-page">
      <div className="offers-page__header" data-aos="fade-up">
        <h1>{t('offers.title')}</h1>
        <p>{t('offers.description')}</p>
      </div>

      <div className="offers-page__cards">
        {offers.map((offer, index) => (
          <OfferCard
            key={offer.id}
            title={'Recommendations for Developing a Car Dealership Business'}
            description={'If you are a car dealer and want your business to grow, it is crucial to analyze current market trends and seize new opportunities. Here are some essential tips that, if'}
            date={offer.date}
            image={offer.image}
            tag={offer.tag}
            linkText={'Посмотреть подробности'}
            aosDelay={index * 100}
          />
        ))}
      </div>
    </section>
  );
};

export default OffersPage;
