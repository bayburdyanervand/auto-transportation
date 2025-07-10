import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const useHomePageLogic = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      const containers = containerRef.current.querySelectorAll('.container-item');
      containers.forEach((container) => {
        container.classList.add('drop-animation');
      });
    }
  }, []);

  return {
    t,
    navigate,
    containerRef,
    isModalOpen,
    setIsModalOpen,
  };
};
