import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { useAuthorizeMutation } from "@/features/auth/api";
import { setToken , setRole} from "@/features/auth/slice";

interface LoginFormInputs {
  username?: string;
  password?: string;
  rememberMe?: boolean;
}

//@ts-ignore
export const useLoginModalForm = (onClose: () => void) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [authorize, { isLoading }] = useAuthorizeMutation();

  const schema = yup.object().shape({
    username: yup
      .string()
      .required(t("loginModal.validation.usernameRequired")),
    password: yup
      .string()
      .required(t("loginModal.validation.passwordRequired")),
    rememberMe: yup.boolean(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    //@ts-ignore
    resolver: yupResolver(schema),
    defaultValues: {
      username: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormInputs) => {
    setErrorMessage("");
    try {
      const res = await authorize({
        email: data.username!,
        password: data.password!,
      }).unwrap();

      dispatch(setToken(res.token));
      dispatch(setRole(res.role));

      onClose();
    } catch (err) {
      console.error("Ошибка логина:", err);
      setErrorMessage(t("loginModal.validation.invalidCredentials"));
    }
  };

  const handleNoAccountClick = () => {
    onClose();
    navigate("/experience");
  };

  return {
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
  };
};
