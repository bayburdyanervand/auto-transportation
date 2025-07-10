import React from 'react';
import './PersonalInfoFormPage.scss';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useTranslation } from 'react-i18next';
import { usePersonalInfoForm } from './usePersonalInfoForm';

const PersonalInfoFormPage: React.FC = () => {
  const { t } = useTranslation();
  const {
    fullName,
    setFullName,
    email,
    setEmail,
    city,
    setCity,
    phone,
    setPhone,
    services,
    toggleService,
    handleSubmit,
    serviceOptions,
  } = usePersonalInfoForm();

  return (
    <div className="personal-info-page">
      <h1>{t('personalInfoForm.title')}</h1>
      <p className="subtitle">{t('personalInfoForm.subtitle')}</p>

      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={t('personalInfoForm.placeholder.fullName')}
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder={t('personalInfoForm.placeholder.email')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder={t('personalInfoForm.placeholder.city')}
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />

        <PhoneInput
          country={'am'}
          value={phone}
          onChange={(value) => setPhone(value)}
          inputProps={{
            name: 'phone',
            required: true,
            placeholder: t('personalInfoForm.placeholder.phone'),
          }}
          inputStyle={{ width: '100%' }}
        />

        <div className="services">
          <p className="services__title">{t('personalInfoForm.services.title')}</p>
          <div className="services__grid">
            {serviceOptions.map(option => {
              const key = option.toLowerCase()
                .replace(/ /g, '_')
                .replace(/-/g, '_')
                .replace(/\//g, '_');

              return (
                <label key={option}>
                  <input
                    type="checkbox"
                    checked={services.includes(option)}
                    onChange={() => toggleService(option)}
                  />
                  {t(`personalInfoForm.services.options.${key}`)}
                </label>
              );
            })}
          </div>
        </div>

        <button type="submit" className="submit-btn">
          {t('personalInfoForm.submit')}
        </button>
      </form>
    </div>
  );
};

export default PersonalInfoFormPage;
