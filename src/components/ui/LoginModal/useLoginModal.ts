import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface LoginFormInputs {
  username?: string;
  password?: string;
  rememberMe?: boolean;  
}

export const useLoginModalForm = (onClose: () => void) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const schema = yup.object().shape({
    username: yup.string().required(t('loginModal.validation.usernameRequired')),
    password: yup.string().required(t('loginModal.validation.passwordRequired')),
    rememberMe: yup.boolean(), // Allows boolean | undefined
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    //@ts-ignore
    resolver: yupResolver(schema),
    defaultValues: {
      username: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit = (data: LoginFormInputs) => {
    console.log('Login data:', data);
    onClose();
  };

  const handleNoAccountClick = () => {
    onClose();
    navigate('/experience');
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    handleNoAccountClick,
    setShowPassword,
    showPassword, 
    errors,
    t,
  };
};