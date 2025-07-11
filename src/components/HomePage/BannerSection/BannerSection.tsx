import React from 'react';
import './BannerSection.scss';
import { ReactComponent as KontainerGreen } from '@/assets/svg/kontainer_green.svg';
import { ReactComponent as KontainerYellow } from '@/assets/svg/kontainer_yellow.svg';
import { ReactComponent as KontainerGroup } from '@/assets/svg/kontainer_group.svg';
import { LoginModal } from '@/components/ui/LoginModal';
import { useHomePageLogic } from '@/components/HomePage/useHomePageLogic';

const BannerSection: React.FC = () => {
  const {
    t,
    navigate,
    containerRef,
    isModalOpen,
    setIsModalOpen,
  } = useHomePageLogic();

  return (
    <section className="banner" role="region" aria-label={t('containersBlock.title')}>
      <div className="banner__wrapper">
        <div className="banner__text">
          <h1 data-aos="fade-up">{t('containersBlock.title')}</h1>
          <p data-aos="fade-up" data-aos-delay="200">{t('containersBlock.subtitle')}</p>
          <p className="banner__description" data-aos="fade-up" data-aos-delay="400">
            {t('containersBlock.description')}
          </p>
          <div className="banner__buttons">
            <button onClick={() => navigate('/experience')} data-aos="fade-up" data-aos-delay="600">
              {t('buttons.apply')}
            </button>
            <button onClick={() => setIsModalOpen(true)} data-aos="fade-up" data-aos-delay="800">
              {t('buttons.calculate')}
            </button>
          </div>
        </div>

        <div className="banner__images" ref={containerRef}>
          <div className="banner__top">
            <KontainerGreen className="container-item green" />
            <KontainerYellow className="container-item yellow" />
          </div>
          <div className="banner__bottom">
            <KontainerGroup className="container-group" />
          </div>
        </div>
      </div>

      {isModalOpen && <LoginModal onClose={() => setIsModalOpen(false)} />}
    </section>
  );
};

export default BannerSection;
