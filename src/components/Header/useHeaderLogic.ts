import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { logout } from '@/features/auth/slice';

export const useHeaderLogic = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((state: RootState) => state.auth.token);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [vin, setVin] = useState('');

  const languages = [
    { code: 'ru', label: t('header.actions.languages.ru') },
    { code: 'en', label: t('header.actions.languages.en') },
    { code: 'ge', label: t('header.actions.languages.ge') },
  ];

  const currentLanguageCode = i18n.language.slice(0, 2).toUpperCase();

  const handleLanguageToggle = () => {
    setIsLanguageOpen((prev) => !prev);
  };

  const handleLanguageSelect = (code: string) => {
    i18n.changeLanguage(code);
    setIsLanguageOpen(false);
  };

  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleLogout = () => {
    dispatch(logout());
    setIsMenuOpen(false);  
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    t,
    token,
    vin,
    navigate,
    isMenuOpen,
    isSearchFocused,
    isLanguageOpen,
    isModalOpen,
    languages,
    currentLanguageCode,
    handleLogout,
    handleLanguageToggle,
    handleLanguageSelect,
    handleModalToggle,
    setIsMenuOpen,
    setIsSearchFocused,
    setVin,
  };
};
