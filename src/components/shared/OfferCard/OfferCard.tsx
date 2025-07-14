// src/components/shared/OfferCard/OfferCard.tsx
import React from 'react';
import './OfferCard.scss';

interface OfferCardProps {
  id?: number;
  image: string;
  title: string;
  description: string;
  date: string;
  tag: string;
  linkText: string;
  aosDelay?: number;
}

const OfferCard: React.FC<OfferCardProps> = ({
  id,
  image,
  title,
  description,
  date,
  tag,
  linkText,
  aosDelay = 0,
}) => {
  return (
    <div className="offer-card" data-aos="fade-up" data-aos-delay={aosDelay}>
      <div className="offer-card__image">
        <img src={image} alt={title} />
        <div className="offer-card__tag">{tag}</div>
      </div>
      <div className="offer-card__info">
        <small>{date}</small>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={`/offers/${id}`} className="offer-card__link">
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default OfferCard;
