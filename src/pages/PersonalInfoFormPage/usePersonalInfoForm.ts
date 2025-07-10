import { useEffect, useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const usePersonalInfoForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const experienceLevel = location.state?.experienceLevel;

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [services, setServices] = useState<string[]>([]);

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
    setServices(prev =>
      prev.includes(option) ? prev.filter(s => s !== option) : [...prev, option]
    );
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      fullName,
      email,
      city,
      phone,
      services,
      experienceLevel,
    };

    console.log('Форма отправлена:', formData);

    setFullName('');
    setEmail('');
    setCity('');
    setPhone('');
    setServices([]);

    navigate('/');
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
  };
};
