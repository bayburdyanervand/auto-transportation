// ManagerCallModal.tsx
import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './ManagerCallModal.scss';
import { useManagerCallForm } from './useManagerCallForm';

interface ManagerCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  managerImage: string;
}

const ManagerCallModal: React.FC<ManagerCallModalProps> = ({ isOpen, onClose, managerImage }) => {
  const {
    formData,
    errors,
    handleChange,
    handlePhoneChange,
    handleSubmit,
  } = useManagerCallForm(onClose);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="manager-call-modal" onClose={onClose}>
        <div className="manager-call-overlay" />

        <div className="manager-call-modal__container">
          <Dialog.Panel className="manager-call-modal__content">
            <div className="manager-call-modal__header">
              <img src={managerImage} alt="manager" />
            </div>
            <hr />
            <form className="manager-call-modal__form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                placeholder="Полное имя *"
                value={formData.fullName}
                onChange={handleChange}
                className={errors.fullName ? 'error-input' : ''}
              />

              <PhoneInput
                country={'us'}
                value={formData.phone}
                onChange={handlePhoneChange}
                inputClass={`${errors.phone ? 'error-input' : ''} manager-call-modal__phone-input`}
                inputStyle={{ width: '100%', paddingLeft:'20%' }}
                buttonStyle={{
                  borderTopLeftRadius: '6px',
                  borderBottomLeftRadius: '6px',
                  height:'2.2rem',
                  backgroundColor:'white'
                }}
              />

              <input
                type="email"
                name="email"
                placeholder="Адрес электронной почты"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error-input' : ''}
              />

              <input
                type="text"
                name="city"
                placeholder="Город *"
                value={formData.city}
                onChange={handleChange}
                className={errors.city ? 'error-input' : ''}
              />

              <div className="manager-call-modal__actions">
                <button type="button" onClick={onClose}>
                  Закрыть
                </button>
                <button type="submit" className="submit">
                  Запросить звонок
                </button>
              </div>
              {Object.values(errors).some(Boolean) && (
                <div className="error">Пожалуйста, заполните все обязательные поля</div>
              )}
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ManagerCallModal;
