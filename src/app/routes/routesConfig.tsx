import React from 'react';
import ExperienceSelectionPage from '@pages/ExperienceSelectionPage/ExperienceSelectionPage';
import HomePage from '@/components/HomePage/HomePage';
import PersonalInfoFormPage from '@pages/PersonalInfoFormPage/PersonalInfoFormPage';
import AboutPage from '@/components/AboutPage/AboutPage';
import ServicesPage from './../../components/ServicesPage/ServicesPage';
import OffersPage from '@/components/OfferPage/OfferPage';
import OfferDetailPage from '@/pages/OfferDetailPage/OfferDetailPage';
import SupportPage from '@/components/SupportPage/SupportPage';

export const routes = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/experience',
    element: <ExperienceSelectionPage />
  },
  {
    path: '/personal-info',
    element: <PersonalInfoFormPage />
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '/services',
    element: <ServicesPage />
  },
  {
    path: '*',
    element: <HomePage />
  },
  {
    path: '/offers',
    element: <OffersPage />,
  },
   {
    path: '/offers/:id',
    element: <OfferDetailPage />
  },
  {
  path: '/support',
  element: <SupportPage />
}
];
