import React, { useState } from 'react';
import './FAQSection.scss';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

interface FAQSectionProps {
  t: (key: string) => string;
  faqs?: FAQ[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ t, faqs: backendFaqs }) => {
  const faqList: FAQ[] = backendFaqs || [
    { id: 1, question: t('faqsection.faqsection.items.1.question'), answer: t('faqsection.faqsection.items.1.answer') },
    { id: 2, question: t('faqsection.faqsection.items.2.question'), answer: t('faqsection.faqsection.items.2.answer') },
    { id: 3, question: t('faqsection.faqsection.items.3.question'), answer: t('faqsection.faqsection.items.3.answer') },
    { id: 4, question: t('faqsection.faqsection.items.4.question'), answer: t('faqsection.faqsection.items.4.answer') },
  ];

  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section className="faq-section">
      <h2 className="faq-section__title">{t('faqsection.title')}</h2>
      <p className="faq-section__subtitle">
        {t('faqsection.subtitle')}
      </p>
      <div className="faq-section__list">
        {faqList.map(faq => (
          <div key={faq.id} className="faq-section__item">
            <div className="faq-section__question" onClick={() => toggleFAQ(faq.id)}>
              <span>{faq.question}</span>
              <span className="faq-section__toggle">{openId === faq.id ? '−' : '+'}</span>
            </div>
            {openId === faq.id && (
              <div className="faq-section__answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;