import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { offersData } from '@/data/offersData';
import './OfferDetailPage.scss';

const OfferDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const offer = offersData.find((o) => o.id === Number(id));

  if (!offer) return <p>Offer not found</p>;

  return (
    <section className="offer-detail">
      <img src={offer.image} alt={t(offer.titleKey)} className="offer-detail__image" style={{ width: '100%', height: 'auto' }} />
      <div className="offer-detail__content">
        <small>{offer.date}</small>
        <h1>{t(offer.titleKey)}</h1>
        <p>{t(offer.fullDescriptionKey)}</p>
      </div>
    </section>
  );
};

export default OfferDetailPage;