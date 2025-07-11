import React from 'react';
import './LatestOffersSection.scss';
//@ts-ignore
import { TFunction } from 'react-i18next';

import offer1 from '@/assets/images/ofers/ofer-1.png';
import offer2 from '@/assets/images/ofers/ofer-2.png';
import offer3 from '@/assets/images/ofers/ofer-3.png';

interface Offer {
  id: number;
  date: string;
  title: string;
  description: string;
  image: string;
  tag: string;
  linkText: string;
}

const LatestOffersSection = ({ t }: { t: TFunction<'translation', undefined> }) => {
  const offers: Offer[] = t('latestOffers.offers', { returnObjects: true }) as Offer[];

  return (
    <section className="latest-offers">
      <h2 className="latest-offers__title" data-aos="fade-up">
        {t('latestOffers.title')}
      </h2>
      <p className="latest-offers__subtitle" data-aos="fade-up" data-aos-delay="100">
        {t('latestOffers.subtitle')}
      </p>

      <div className="latest-offers__cards">
        {offers.map((offer: Offer, index: number) => (
          <div className="latest-offers__card" key={offer.id} data-aos="fade-up" data-aos-delay={200 + index * 100}>
            <div className="latest-offers__image">
              <img src={[offer1, offer2, offer3][index]} alt={offer.title} />
              <div className="latest-offers__tag">{offer.tag}</div>
            </div>
            <div className="latest-offers__info">
              <small>{offer.date}</small>
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
              <a href={offer.linkText}>{offer.linkText}</a>
            </div>
          </div>
        ))}
      </div>
      <button className={'latest-offers__show-more'}>{t('latestOffers.button')}</button>
    </section>
  );
};

export default LatestOffersSection;