import React from 'react';
import { useTranslation } from 'react-i18next';
import BannerSection from '@/components/HomePage/BannerSection/BannerSection';
import OurServicesSection from '@/components/HomePage/OurServicesSection/OurServicesSection';
import CalculatorSection from '@/components/HomePage/CalculatorSection/CalculatorSection';
import LatestOffersSection from '@/components/HomePage/LatestOffersSection/LatestOffersSection';
import DeliverySection from '@/components/DeliverySection/DeliverySection';
import ManagersSection from '../ManagersSection/ManagersSection';
import AuctionPartnersSection from './AuctionPartnersSection/AuctionPartnersSection';
import FAQSection from './FAQSection/FAQSection';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <BannerSection />
      <main className={"home-page__content"}>
        <OurServicesSection t={t} />
        <CalculatorSection t={t} />
        <LatestOffersSection t={t} />
        <DeliverySection t={t} />
        <ManagersSection t={t} />
        <AuctionPartnersSection t={t} />
        <FAQSection t={t} />
      </main>
    </>
  );
};

export default HomePage;
