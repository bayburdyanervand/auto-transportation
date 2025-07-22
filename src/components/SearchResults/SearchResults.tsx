import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './SearchResults.scss';
import carBrandIcon from '@/assets/svg/car-brand.svg';
import carSideIcon from '@/assets/svg/car-side.svg';
import calendarIcon from '@/assets/svg/calendar.svg';
import factoryIcon from '@/assets/svg/factory.svg';
import vehicleIcon from '@/assets/svg/vehicle.svg';
import carBodyIcon from '@/assets/svg/car-body.svg';
import { VinResponse } from '@/types/VinResponse';


export const SearchResults: React.FC = () => {
  const { t } = useTranslation();
  const { state } = useLocation();
  const navigate = useNavigate();
  const vinData: VinResponse | undefined = state?.vinData;

  if (!vinData) {
    return (
      <div className="search-results__error">
        <p>{t('searchResults.noData')}</p>
        <button className="search-results__button" onClick={() => navigate('/')}>
          {t('searchResults.back')}
        </button>
      </div>
    );
  }

  return (
    <div className="search-results">
      <h2 className="search-results__title">{t('searchResults.title', { vin: vinData.vin })}</h2>
      <div className="search-results__card">
        <div className="search-results__item">
          <img src={carBrandIcon} alt="Brand Icon" className="search-results__icon" />
          <span className="search-results__label">{t('searchResults.make')}:</span>
          <span className="search-results__value">{vinData.make}</span>
        </div>
        <div className="search-results__item">
          <img src={carSideIcon} alt="Model Icon" className="search-results__icon" />
          <span className="search-results__label">{t('searchResults.model')}:</span>
          <span className="search-results__value">{vinData.model}</span>
        </div>
        <div className="search-results__item">
          <img src={calendarIcon} alt="Year Icon" className="search-results__icon" />
          <span className="search-results__label">{t('searchResults.modelYear')}:</span>
          <span className="search-results__value">{vinData.modelYear}</span>
        </div>
        <div className="search-results__item">
          <img src={factoryIcon} alt="Manufacturer Icon" className="search-results__icon" />
          <span className="search-results__label">{t('searchResults.manufacturer')}:</span>
          <span className="search-results__value">{vinData.manufacturer}</span>
        </div>
        <div className="search-results__item">
          <img src={vehicleIcon} alt="Vehicle Type Icon" className="search-results__icon" />
          <span className="search-results__label">{t('searchResults.vehicleType')}:</span>
          <span className="search-results__value">{vinData.vehicleType}</span>
        </div>
        <div className="search-results__item">
          <img src={carBodyIcon} alt="Body Class Icon" className="search-results__icon" />
          <span className="search-results__label">{t('searchResults.bodyClass')}:</span>
          <span className="search-results__value">{vinData.bodyClass}</span>
        </div>
      </div>
      <button className="search-results__button" onClick={() => navigate('/')}>
        {t('searchResults.back')}
      </button>
    </div>
  );
};