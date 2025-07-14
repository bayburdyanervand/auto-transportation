import React from 'react';
import { useTranslation } from 'react-i18next';
import './SupportPage.scss';

const SupportPage: React.FC = () => {
  const { t } = useTranslation();

  const lines = [
    t('support.line1'),
    t('support.line2'),
    t('support.line3'),
    t('support.line4'),
    t('support.line5'),
    t('support.line6'),
  ];

  return (
    <section className="support-page">
      <h1 className="support-page__title" data-aos="fade-up">{t('support.title')}</h1>
      <div className="support-page__text">
        {lines.map((line, index) => (
          <p key={index} data-aos="fade-up" data-aos-delay={index * 150}>
            {line}
          </p>
        ))}
      </div>
    </section>
  );
};

export default SupportPage;
