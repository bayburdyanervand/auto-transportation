import React from 'react';
import './Header.scss';
import logoUrl from '@/assets/images/logo.png';
import { LoginModal } from '@components/ui/LoginModal';
import { useHeaderLogic } from './useHeaderLogic';
import { useLocation } from 'react-router-dom';

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
    handleLogout,
    handleVinSearch,
    token,
    isVinValid,
    isLoading,  
  } = useHeaderLogic();

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="header">
      <div className="header__left">
        <div className="header__logo">
          <img src={logoUrl} alt="logo" className="logo" onClick={() => navigate('/')} />
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
            onChange={(e) => setVin(e.target.value.toUpperCase())}
          />
          {isSearchFocused && (
            <div className="vin-search__actions">
              <button
                className={`vin-search__button ${isVinValid ? 'search' : 'cancel'}`}
                onMouseDown={(e) => {
                  e.preventDefault();
                  if (isVinValid) {
                    handleVinSearch();
                  } else {
                    setVin('');
                    setIsSearchFocused(false);
                    const input = document.querySelector('.vin-search__input') as HTMLInputElement;
                    if (input) input.blur();
                  }
                }}
                disabled={isLoading}  
              >
                {isLoading ? t('searchResults.loading') : isVinValid ? t('header.search') : t('header.cancel')}
              </button>
              {isLoading && <span className="vin-search__loading">{t('searchResults.loading')}</span>}
            </div>
          )}
        </div>
      </div>

      <div className="header__right">
        {!isSearchFocused && (
          <nav className="header__nav">
            <button className={`nav-button ${currentPath === '/' ? 'active' : ''}`} onClick={() => navigate('/')}>
              {t('header.nav.home')}
            </button>
            <button className={`nav-button ${currentPath === '/about' ? 'active' : ''}`} onClick={() => navigate('/about')}>
              {t('header.nav.about')}
            </button>
            <button className={`nav-button ${currentPath === '/services' ? 'active' : ''}`} onClick={() => navigate('/services')}>
              {t('header.nav.services')}
            </button>
            <button className={`nav-button ${currentPath === '/offers' ? 'active' : ''}`} onClick={() => navigate('/offers')}>
              {t('header.nav.offers')}
            </button>
            <button className={`nav-button ${currentPath === '/support' ? 'active' : ''}`} onClick={() => navigate('/support')}>
              {t('header.nav.support')}
            </button>
          </nav>
        )}

        <div className="header__actions">
          {token ? (
            <button className="action-button login" onClick={handleLogout}>
              <span className="icon">🚪</span> {t('header.actions.logout') || 'Выйти'}
            </button>
          ) : (
            <button className="action-button login" onClick={handleModalToggle}>
              <span className="icon">👤</span> {t('header.actions.login')}
            </button>
          )}

          <button className="action-button primary" onClick={() => navigate('/experience')}>
            {t('header.actions.applyNow')}
          </button>

          <div className="language-selector" onClick={handleLanguageToggle}>
            <span className="globe">🌐</span>
            <span className="languageCode">{currentLanguageCode}</span>
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
            <button
              className={`nav-button ${currentPath === '/' ? 'active' : ''}`}
              onClick={() => {
                setIsMenuOpen(false);
                navigate('/');
              }}
            >
              {t('header.nav.home')}
            </button>
            <button
              className={`nav-button ${currentPath === '/about' ? 'active' : ''}`}
              onClick={() => {
                setIsMenuOpen(false);
                navigate('/about');
              }}
            >
              {t('header.nav.about')}
            </button>
            <button
              className={`nav-button ${currentPath === '/services' ? 'active' : ''}`}
              onClick={() => {
                setIsMenuOpen(false);
                navigate('/services');
              }}
            >
              {t('header.nav.services')}
            </button>
            <button
              className={`nav-button ${currentPath === '/offers' ? 'active' : ''}`}
              onClick={() => {
                setIsMenuOpen(false);
                navigate('/offers');
              }}
            >
              {t('header.nav.offers')}
            </button>
            <button
              className={`nav-button ${currentPath === '/support' ? 'active' : ''}`}
              onClick={() => {
                setIsMenuOpen(false);
                navigate('/support');
              }}
            >
              {t('header.nav.support')}
            </button>
          </nav>

          <div className="mobile-actions">
            {token ? (
              <button className="action-button login" onClick={handleLogout}>
                {t('header.actions.logout') || 'Выйти'}
              </button>
            ) : (
              <button className="action-button login" onClick={handleModalToggle}>
                {t('header.actions.login')}
              </button>
            )}
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