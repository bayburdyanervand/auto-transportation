import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useExperienceSelection = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSelect = (value: string) => setSelected(value);

  const handleContinue = () => {
    if (selected) {
      navigate('/personal-info', { state: { experienceLevel: selected } });
    }
  };

  return {
    selected,
    handleSelect,
    handleContinue,
  };
};
