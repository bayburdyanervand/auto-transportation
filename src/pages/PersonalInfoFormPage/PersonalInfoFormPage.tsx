// PersonalInfoFormPage.tsx
import React from 'react';
import './PersonalInfoFormPage.scss';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useTranslation } from 'react-i18next';
import { usePersonalInfoForm } from './usePersonalInfoForm';
import { useModal } from '@/context/ModalContext';
import GlobalModal from '@/components/ui/GlobalModal/GlobalModal';

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
    isLoading,
    isError,
    error,
  } = usePersonalInfoForm();
  const { isOpen, hideModal, message, type } = useModal();

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
            {serviceOptions.map((option) => {
              const key = option
                .toLowerCase()
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

        <button type="submit" className="submit-btn" disabled={isLoading}>
          {isLoading ? t('personalInfoForm.submitting') : t('personalInfoForm.submit')}
        </button>

        {isError && (
          <p className="error-message" style={{ color: 'red' }}>
            {t('personalInfoForm.error', { message: error?.toString() })}
          </p>
        )}
      </form>

      <GlobalModal
        message={message || ''}
        type={type || 'success'}
        onClose={hideModal}
        isOpen={isOpen}
        duration={5000}
      />
    </div>
  );
};

export default PersonalInfoFormPage;