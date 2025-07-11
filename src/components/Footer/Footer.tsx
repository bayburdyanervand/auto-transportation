import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.scss';
import logo from '@/assets/images/logo.png';

const Footer = () => {
  const { t } = useTranslation();

  const sitemapItems = t('footer.footer.sitemapItems', { returnObjects: true }) as string[];
  const serviceItems = t('footer.footer.serviceItems', { returnObjects: true }) as string[];
  const customerServiceItems = t('footer.footer.customerServiceItems', { returnObjects: true }) as string[];

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__column">
          <img src={logo} alt="Logo" className="footer__logo" />
          <p>{t('footer.footer.location')}</p>
          <p>{t('footer.footer.address')}</p>
          <p>{t('footer.footer.phone')}</p>
          <p>{t('footer.footer.phoneNumber')}</p>
          <p>{t('footer.footer.email')}</p>
          <p>{t('footer.footer.emailAddress')}</p>
          <div className="footer__socials">
            <a href="#"><i className="fab fa-facebook-f" /></a>
            <a href="#"><i className="fab fa-instagram" /></a>
          </div>
        </div>

        <div className="footer__column">
          <h4>{t('footer.footer.sitemap')}</h4>
          <ul>
            {sitemapItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="footer__column">
          <h4>{t('footer.footer.services')}</h4>
          <ul>
            {serviceItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="footer__column">
          <h4>{t('footer.customerService')}</h4>
          <ul>
            {customerServiceItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
