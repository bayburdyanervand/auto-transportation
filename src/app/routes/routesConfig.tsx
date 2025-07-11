import React from 'react';
import ExperienceSelectionPage from '@pages/ExperienceSelectionPage/ExperienceSelectionPage';
import HomePage from '@/components/HomePage/HomePage';
import PersonalInfoFormPage from '@pages/PersonalInfoFormPage/PersonalInfoFormPage'


export const routes = [
  {
    path: '/experience',
    element: <ExperienceSelectionPage />
  },
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '*',
    element: <HomePage />
  },
  {
    path: '/personal-info',
    element: <PersonalInfoFormPage />
  },
];