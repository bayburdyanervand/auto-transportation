import React from 'react';
import './LoginModal.scss';
import { useLoginModalForm } from './useLoginModal';
import { ReactComponent as EyeIcon } from '@/assets/svg/eye.svg';
import { ReactComponent as EyeIconClose } from '@/assets/svg/eye-close.svg';

interface LoginModalProps {
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    onSubmit,
    handleNoAccountClick,
    setShowPassword,
    errorMessage,
    isLoading,
    showPassword,
    errors,
    t,
  } = useLoginModalForm(onClose);

  return (
    <div
      className="login-modal__backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          // onClose();
        }
      }}
    >
      <div className="login-modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="login-modal__close" onClick={onClose}>×</button>
        <h2>{t('loginModal.title')}</h2>
        <p className="login-modal__subtitle">{t('loginModal.subtitle')}</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder={t('loginModal.usernamePlaceholder')}
            {...register('username')}
          />
          {errors.username && <p className="error">{errors.username.message}</p>}

          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder={t('loginModal.passwordPlaceholder')}
              {...register('password')}
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(prev => !prev)}
            >
              {!showPassword ? <EyeIcon stroke="#28a745" /> : <EyeIconClose stroke="#28a745" />}
            </button>
          </div>
          {errors.password && <p className="error">{errors.password.message}</p>}

          {errorMessage && <p className="error">{errorMessage}</p>} {/* Ошибка логина */}

          <label className="login-modal__remember">
            <input type="checkbox" {...register('rememberMe')} />
            {t('loginModal.rememberMe')}
          </label>

          <div className="login-modal__link" onClick={handleNoAccountClick}>
            <a href="#">{t('loginModal.noAccount')}</a>
          </div>

          <button type="submit" className="login-modal__submit" disabled={isLoading}>
            {isLoading ? t('loginModal.loading') : t('loginModal.submit')}
          </button>
        </form>

      </div>
    </div>
  );
};