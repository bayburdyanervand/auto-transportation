import React, { useState } from 'react';
import './AuctionPartnersSection.scss';

interface Auction {
  name: string;
  image: string;
  url: string;
}

interface AuctionPartnersSectionProps {
  t: (key: string) => string;
  auctions?: Auction[];
}

const AuctionPartnersSection: React.FC<AuctionPartnersSectionProps> = ({ t, auctions: backendAuctions }) => {
  const [isPaused, setIsPaused] = useState(false);

  const defaultAuctions: Auction[] = [
    {
      name: 'Copart',
      image: require('@/assets/images/auctions/1.png'),
      url: 'https://www.copart.com/',
    },
    {
      name: 'Adesa',
      image: require('@/assets/images/auctions/2.png'),
      url: 'https://www.adesa.com/',
    },
    {
      name: 'Cars.com',
      image: require('@/assets/images/auctions/3.png'),
      url: 'https://www.cars.com/',
    },
    {
      name: 'Autotrader',
      image: require('@/assets/images/auctions/4.png'),
      url: 'https://www.iaai.com/',
    },
    {
      name: 'Ebay Motors',
      image: require('@/assets/images/auctions/5.png'),
      url: 'https://www.ebay.com/b/Auto-Parts-and-Vehicles/6000/bn_1865334',
    },
    {
      name: 'Manheim',
      image: require('@/assets/images/auctions/6.png'),
      url: 'https://site.manheim.com/',
    },
    {
      name: 'Ove',
      image: require('@/assets/images/auctions/7.png'),
      url: 'https://www.crunchbase.com/organization/ove-com-online-vehicle-exchange',
    },
    {
      name: 'Pipeline',
      image: require('@/assets/images/auctions/8.png'),
      url: 'https://www.pipeline.com/',
    },
  ];

  const auctions = backendAuctions || defaultAuctions;

  return (
    <section className="auction-partners">
      <h2 className="auction-partners__title">{t('auctions.auctionPartners.title')}</h2>
      <p className="auction-partners__description">{t('auctions.auctionPartners.description')}</p>

      <div className="auction-partners__slider">
        <div
          className={`auction-partners__track ${isPaused ? 'paused' : ''}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {[...auctions, ...auctions].map((auction, index) => (
            <a
              href={auction.url}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="auction-partners__logo"
            >
              <img src={auction.image} alt={auction.name} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuctionPartnersSection;