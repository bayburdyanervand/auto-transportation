import React from 'react';
import './CalculatorSection.scss';
import calculatorWeb from '@/assets/images/calculator-web.png';
import calculatorMobile from '@/assets/images/calculator-mobile.png';
import useWindowWidth from '@/hooks/useWindowWidth';

const CalculatorSection = ({ t }: { t: any }) => {
  const width = useWindowWidth();

  const descriptionLines = t('calculator.subtitle')?.split('\n') || [];

  return (
    <section className="calculator-section">
      <div className="calculator-section__content">
        <h2 data-aos="fade-up" data-aos-delay="100">
          {t('calculator.title')}
        </h2>

        {descriptionLines.map((line: string, index: number) => (
          <p
            key={index}
            data-aos="fade-up"
            data-aos-delay={200 + index * 100}  
          >
            {line}
          </p>
        ))}

        <button data-aos="fade-up" data-aos-delay={200 + descriptionLines.length * 100}>
          {t('calculator.button')}
        </button>
      </div>

      <div className="calculator-section__image" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <img
          src={width > 768 ? calculatorWeb : calculatorMobile}
          alt="calculator"
        />
      </div>
    </section>
  );
};

export default CalculatorSection;
