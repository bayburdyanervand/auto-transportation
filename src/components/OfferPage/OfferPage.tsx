import React from 'react';
import { useTranslation } from 'react-i18next';
import './OfferPage.scss';

import { offersData } from '@/data/offersData';
import OfferCard from '@/components/shared/OfferCard/OfferCard';

const OffersPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="offers-page">
      <div className="offers-page__header" data-aos="fade-up">
        <h1>{t('offers.title')}</h1>
        <p>{t('offers.description')}</p>
      </div>

      <div className="offers-page__cards">
        {offersData.map((offer, index) => (
          <OfferCard
            key={offer.id}
            id={offer.id}
            title={t(offer.titleKey)}
            description={t(offer.descriptionKey)}
            date={offer.date}
            image={offer.image}
            tag={offer.titleKey}
            linkText={t(offer.titleKey)}
            aosDelay={index * 100}
          />
        ))}
      </div>
    </section>
  );
};

export default OffersPage;
