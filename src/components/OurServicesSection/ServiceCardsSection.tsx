import React from 'react';
import { ReactComponent as SafeIcon } from '@/assets/svg/safe-icon.svg';
import { ReactComponent as FinanceIcon } from '@/assets/svg/finance-icon.svg';
import { ReactComponent as CustomIcon } from '@/assets/svg/custom-icon.svg';

interface Props {
  t: any;
}

const cards = [
  {
    icon: <SafeIcon />,
    titleKey: 'ourservices.cards.safe.title',
    textKey: 'ourservices.cards.safe.text',
    linkKey: 'ourservices.cards.safe.link',
    bg: '#28a745',
  },
  {
    icon: <FinanceIcon />,
    titleKey: 'ourservices.cards.finance.title',
    textKey: 'ourservices.cards.finance.text',
    linkKey: 'ourservices.cards.finance.link',
    bg: '#007bff',
  },
  {
    icon: <CustomIcon />,
    titleKey: 'ourservices.cards.custom.title',
    textKey: 'ourservices.cards.custom.text',
    linkKey: 'ourservices.cards.custom.link',
    bg: '#ffc107',
  },
];

const ServiceCardsSection: React.FC<Props> = ({ t }) => {
  return (
    <div className="our-services__cards-list">
      {cards.map((card, index) => (
        <div key={index} 
        className="our-services__card"
        data-aos = 'fade-up'
        data-aos-delay={index * 100}
        >
          <div className="icon" style={{ backgroundColor: card.bg }}>
            {card.icon}
          </div>
          <h3>{t(card.titleKey)}</h3>
          <p>{t(card.textKey)}</p>
          <a href="#">{t(card.linkKey)}</a>
        </div>
      ))}
    </div>
  );
};

export default ServiceCardsSection;
