import { useState } from 'react';

export const useManagerCallForm = (onSuccess: () => void) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
  });

  const [errors, setErrors] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
  });

  const validate = () => {
    const newErrors = {
      fullName: formData.fullName ? '' : 'Обязательное поле',
      phone: formData.phone ? '' : 'Обязательное поле',
      email:
        formData.email && /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(formData.email)
          ? ''
          : formData.email
          ? 'Некорректный email'
          : '',
      city: formData.city ? '' : 'Обязательное поле',
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((e) => !e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value: string) => {
    setFormData((prev) => ({ ...prev, phone: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      onSuccess(); // закрытие модалки
    }
  };

  return { formData, errors, handleChange, handlePhoneChange, handleSubmit };
};
