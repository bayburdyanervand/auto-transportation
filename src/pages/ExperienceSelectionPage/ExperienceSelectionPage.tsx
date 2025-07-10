import React from 'react';
import './ExperienceSelectionPage.scss';
import { useTranslation } from 'react-i18next';
import { useExperienceSelection } from './useExperienceSelection';

const ExperienceSelectionPage: React.FC = () => {
  const { t } = useTranslation();
  const { selected, handleSelect, handleContinue } = useExperienceSelection();

  return (
    <div className="experience-page">
      <h1>{t('experienceSelection.title')}</h1>
      <p>{t('experienceSelection.description')}</p>

      <div className="experience-options">
        {['beginner', 'experienced'].map((level) => (
          <label key={level} className={`option ${selected === level ? 'selected' : ''}`}>
            <input
              type="radio"
              name="experience"
              value={level}
              checked={selected === level}
              onChange={() => handleSelect(level)}
            />
            <div>
              <h3>{t(`experienceSelection.options.${level}.title`)}</h3>
              <p>{t(`experienceSelection.options.${level}.description`)}</p>
            </div>
          </label>
        ))}
      </div>

      <button className="continue-btn" onClick={handleContinue}>
        {t('experienceSelection.continue')}
      </button>
    </div>
  );
};

export default ExperienceSelectionPage;
