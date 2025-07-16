import React, { useState } from 'react';
import './DeliverySection.scss';
import deliveryFrom from '@/assets/images/delivery-from.png';
import deliveryTo from '@/assets/images/delivery-to.png';

const DeliverySection = ({ t }: { t: any }) => {
    const [activeTab, setActiveTab] = useState<'from' | 'to'>('to');

    return (
        <section className="delivery-section">
            <main className="delivery-section__content">
                <h2 className="delivery-section__title">{t('deliverySection.title')}</h2>
                <p className="delivery-section__subtitle">{t('deliverySection.subtitle')}</p>

                <div className="delivery-section__switch">
                    <div className="delivery-section__switch-container">
                        <button
                            className={`delivery-section__btn ${activeTab === 'from' ? 'active' : ''}`}
                            onClick={() => setActiveTab('from')}
                        >
                            {t('deliverySection.deliveryFrom')}
                        </button>
                        <button
                            className={`delivery-section__btn ${activeTab === 'to' ? 'active' : ''}`}
                            onClick={() => setActiveTab('to')}
                        >
                            {t('deliverySection.deliveryTo')}
                        </button>
                        <div className={`delivery-section__slider ${activeTab === 'from' ? 'left' : 'right'}`} />
                    </div>
                </div>

                <div className="delivery-section__map">
                    <img
                        src={deliveryFrom}
                        alt={t('deliverySection.mapAlt')}
                        className={activeTab === 'from' ? 'visible' : ''}
                    />
                    <img
                        src={deliveryTo}
                        alt={t('deliverySection.mapAlt')}
                        className={activeTab === 'to' ? 'visible' : ''}
                    />
                </div>

                <div className="delivery-section__descriptions">
                    <div className="delivery-section__text delivery-section__text--left">
                        <h4>{t('deliverySection.usSection.title')}</h4>
                        <p>{t('deliverySection.usSection.description')}</p>
                    </div>
                    <div className="delivery-section__text delivery-section__text--right">
                        <h4>{t('deliverySection.eurasiaSection.title')}</h4>
                        <p>{t('deliverySection.eurasiaSection.description')}</p>
                    </div>
                </div>
            </main>
        </section>
    );
};

export default DeliverySection;
