import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { logout } from '@/features/auth/slice';
import { useDecodeVinQuery } from '@/features/vin/vinApi';
import { toast } from 'react-toastify';


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
  const [isVinValid, setIsVinValid] = useState(false);

  // Regex для VIN: 17 символов, только буквы и цифры, исключая I, O, Q
  const vinRegex = /^[A-HJ-NPR-Z0-9]{17}$/i;

  const languages = [
    { code: 'ru', label: t('header.actions.languages.ru') },
    { code: 'en', label: t('header.actions.languages.en') },
    { code: 'ge', label: t('header.actions.languages.ge') },
  ];

  const { data: vinData, error, isLoading } = useDecodeVinQuery(vin, {
    skip: !isVinValid || !isSearchFocused,
  });

  const currentLanguageCode = i18n.language.slice(0, 2).toUpperCase();

  useEffect(() => {
    setIsVinValid(vinRegex.test(vin));
  }, [vin]);

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

  const handleVinSearch = () => {
    if (!isVinValid) {
      toast.error(t('header.vinSearch.invalidVin'));
      return;
    }

    if (error) {
      toast.error(t('header.vinSearch.error', { errorMessage: (error as any)?.data?.errorMessage || 'Неизвестная ошибка' }));
      return;
    }

    if (vinData && !vinData.errorMessage) {
      toast.success(t('header.searchSuccess'));
      navigate('/search-results', { state: { vinData } });
    } else if (vinData?.errorMessage) {
      toast.error(t('header.vinSearch.error', { errorMessage: vinData.errorMessage }));
    }
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
    isVinValid,
    isLoading,
    handleLogout,
    handleLanguageToggle,
    handleLanguageSelect,
    handleModalToggle,
    handleVinSearch,
    setIsMenuOpen,
    setIsSearchFocused,
    setVin,
  };
};