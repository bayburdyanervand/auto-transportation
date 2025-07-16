import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useState } from "react";
import { useRequestCallMutation } from "@/features/managers/managersApi";

export const useManagerCallForm = (
  onSuccess: () => void,
  managerId?: number
) => {
  const token = useSelector((state: RootState) => state.auth.token);
  const [requestCall, { isLoading }] = useRequestCallMutation();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
  });

  const validate = () => {
    const newErrors = {
      fullName: formData.fullName ? "" : "Обязательное поле",
      phone: formData.phone ? "" : "Обязательное поле",
      email:
        formData.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
          ? ""
          : formData.email
          ? "Некорректный email"
          : "",
      city: formData.city ? "" : "Обязательное поле",
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((e) => !e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value: string) => {
    setFormData((prev: any) => ({ ...prev, phone: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token) {
      toast.warning("Запрос доступен только для авторизованных пользователей");
      return;
    }

    if (!validate()) {
      toast.error("Заполните все обязательные поля корректно");
      return;
    }

    try {
      if (!managerId) throw new Error("Менеджер не выбран");
      await requestCall({ managerId, data: formData }).unwrap();
      toast.success("Запрос отправлен менеджеру!");
      onSuccess();
    } catch (error: any) {
      toast.error(error?.data?.message || "Ошибка при отправке запроса");
    }
  };

  return {
    formData,
    errors,
    handleChange,
    handlePhoneChange,
    handleSubmit,
    isLoading,
  };
};
