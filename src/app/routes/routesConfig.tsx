import React from 'react';
import ExperienceSelectionPage from '@pages/ExperienceSelectionPage/ExperienceSelectionPage';
import HomePage from '@/components/HomePage/HomePage';
import PersonalInfoFormPage from '@pages/PersonalInfoFormPage/PersonalInfoFormPage';
import AboutPage from '@/components/AboutPage/AboutPage';  

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
    path: '*',
    element: <HomePage />
  }
];
