// usePersonalInfoForm.ts
import { useRegisterUserMutation } from '@/features/auth/api';
import { useEffect, useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useModal } from '@/context/ModalContext'; // Импортируем useModal

export const usePersonalInfoForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { showModal } = useModal(); // Используем контекст модала
  const experienceLevel = location.state?.experienceLevel;

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [services, setServices] = useState<string[]>([]);

  const [registerUser, { isLoading, isError, error }] = useRegisterUserMutation();

  useEffect(() => {
    if (experienceLevel) {
      console.log('Получен опыт с предыдущей страницы:', experienceLevel);
    }
  }, [experienceLevel]);

  const serviceOptions = [
    'Все категории',
    'Доступ к счетам аукционов',
    'Складские услуги/загрузка контейнеров',
    'Экспедирование',
    'Внутренние перевозки',
    'Брокер',
    'Пост-экспедиторская транспортировка',
    'Изъятие транспортного средства до оплаты',
    'Поддержка клиентов',
    'Предоставление финансовых ресурсов и финансовая поддержка',
    'Консолидация',
  ];

  const toggleService = useCallback((option: string) => {
    setServices((prev) =>
      prev.includes(option) ? prev.filter((s) => s !== option) : [...prev, option]
    );
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      fullName,
      email,
      city,
      phone,
      services,
      experienceLevel,
    };

    try {
      const response = await registerUser(formData).unwrap();
      console.log('Успешная отправка:', response);
      setFullName('');
      setEmail('');
      setCity('');
      setPhone('');
      setServices([]);
      navigate('/');
      showModal(response.message, 'success');  
    } catch (err) {
      console.error('Ошибка отправки:', err);
      showModal(error?.toString() || 'Неизвестная ошибка', 'error');  
    }
  };

  return {
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
  };
};