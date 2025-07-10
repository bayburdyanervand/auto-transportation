// src/components/Header/Header.tsx
import React from 'react';
import './Header.scss';
import logoUrl from '@/assets/images/logo.jpg';
import { LoginModal } from '@components/ui/LoginModal';
import { useHeaderLogic } from './useHeaderLogic';

export const Header: React.FC = () => {
  const {
    t,
    isSearchFocused,
    isMenuOpen,
    isLanguageOpen,
    languages,
    currentLanguageCode,
    isModalOpen,
    vin,
    setVin,
    navigate,
    handleLanguageSelect,
    handleLanguageToggle,
    setIsSearchFocused,
    setIsMenuOpen,
    handleModalToggle,
  } = useHeaderLogic();

  return (
    <header className="header">
      <div className="header__left">
        <div className="header__logo">
          <img src={logoUrl} alt="logo" className="logo" />
        </div>

        <div className={`header__vin-search ${isSearchFocused ? 'focused' : ''}`}>
          <span className="vin-search__icon">🔍</span>
          <span className="vin-search__label">VIN</span>
          <input
            type="text"
            placeholder={t('header.vinSearch.placeholder')}
            className="vin-search__input"
            value={vin} 
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => {
              setTimeout(() => setIsSearchFocused(false), 100);
            }}
            onChange={(e) => setVin(e.target.value)}
          />
          {isSearchFocused && (
            <button
              className="vin-search__cancel"
              onMouseDown={(e) => {
                e.preventDefault();
                setVin('');
                setIsSearchFocused(false);
              }}
            >
              {t('header.cancel')}
            </button>
          )}
        </div>
      </div>

      <div className="header__right">
        {!isSearchFocused && (
          <nav className="header__nav">
            <button className="nav-button active" onClick={() => navigate('/')}>
              {t('header.nav.home')}
            </button>
            <button className="nav-button">{t('header.nav.about')}</button>
            <button className="nav-button">{t('header.nav.services')}</button>
            <button className="nav-button">{t('header.nav.offers')}</button>
            <button className="nav-button">{t('header.nav.support')}</button>
          </nav>
        )}

        <div className="header__actions">
          <button className="action-button login" onClick={handleModalToggle}>
            <span className="icon">👤</span> {t('header.actions.login')}
          </button>
          <button className="action-button primary">{t('header.actions.applyNow')}</button>

          <div className="language-selector" onClick={handleLanguageToggle}>
            <span className="globe">🌐</span>
            <span>{currentLanguageCode}</span>
            <span className="arrow">▾</span>
            {isLanguageOpen && (
              <div className="language-menu">
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    className="language-option"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLanguageSelect(lang.code);
                    }}
                  >
                    {lang.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button>

      {isMenuOpen && (
        <div className={`mobile-menu open`}>
          <nav className="mobile-nav">
            <button className="nav-button">{t('header.nav.home')}</button>
            <button className="nav-button">{t('header.nav.about')}</button>
            <button className="nav-button">{t('header.nav.services')}</button>
            <button className="nav-button">{t('header.nav.offers')}</button>
            <button className="nav-button">{t('header.nav.support')}</button>
          </nav>

          <div className="mobile-actions">
            <button className="action-button login" onClick={handleModalToggle}>
              {t('header.actions.login')}
            </button>
            <button className="action-button primary">{t('header.actions.applyNow')}</button>
            <div className="language-selector" onClick={handleLanguageToggle}>
              🌐 {currentLanguageCode} ▾
              {isLanguageOpen && (
                <div className="language-menu">
                  {languages.map((lang) => (
                    <div
                      key={lang.code}
                      className="language-option"
                      onClick={() => handleLanguageSelect(lang.code)}
                    >
                      {lang.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {isModalOpen && <LoginModal onClose={handleModalToggle} />}
    </header>
  );
};
