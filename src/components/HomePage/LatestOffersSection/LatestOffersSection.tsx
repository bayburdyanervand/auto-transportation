import React from 'react';
import './LatestOffersSection.scss';
//@ts-ignore
import { TFunction } from 'react-i18next';
import { useNavigate} from 'react-router-dom'

import offer1 from '@/assets/images/ofers/ofer-1.png';
import offer2 from '@/assets/images/ofers/ofer-2.png';
import offer3 from '@/assets/images/ofers/ofer-3.png';
import OfferCard from '@/components/shared/OfferCard/OfferCard';

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
  const navigate = useNavigate()
  const offers: Offer[] = t('latestOffers.offers', { returnObjects: true }) as Offer[];
  const images = [offer1, offer2, offer3];
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
          <OfferCard
            image={images[index]}
            title={offer.title}
            description={offer.description}
            date={offer.date}
            tag={offer.tag}
            linkText={offer.linkText}
            aosDelay={index * 100}
            key={offer.id}
          />
        ))}
      </div>
      <button className={'latest-offers__show-more'} onClick={() => navigate('/offers')}>{t('latestOffers.button')}</button>
    </section>
  );
};

export default LatestOffersSection;