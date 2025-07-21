import React, { useState } from 'react';
import './ManagersSection.scss';
import ManagerCallModal from '../HomePage/ManagerCallModal/ManagerCallModal';
import { useGetManagersQuery } from '@/features/managers/managersApi';
import { managerImages } from './managerImages';
import { Manager1 } from '@/types/Manager';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface ManagersSectionProps {
  t?: (key: string) => string;
}

const ManagersSection: React.FC<ManagersSectionProps> = ({ t }) => {
  const translate = t || ((key: string) => key);
  const { data: managers = [], isLoading, isError } = useGetManagersQuery();
  
  const [selectedManager, setSelectedManager] = useState<Manager1 | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (manager: Manager1) => {
    setSelectedManager(manager);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedManager(null);
  };

  if (isLoading) {
    return (
      <section className="managers-section">
        <h2 className="managers-section__title">{translate('managersSection.title')}</h2>
        <p className="managers-section__subtitle">{translate('managersSection.subtitle')}</p>
        <div className="managers-section__cards">
          {[...Array(3)].map((_, index) => (
            <div className="managers-section__card" key={`skeleton-${index}`}>
              <Skeleton height={80} width={80} circle />
              <div className="managers-section__info">
                <Skeleton width={150} />
                <Skeleton width={120} height={36} />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="managers-section">
      <h2 className="managers-section__title">{translate('managersSection.title')}</h2>
      <p className="managers-section__subtitle">{translate('managersSection.subtitle')}</p>

      {isError ? (
        <div className="managers-section__error">
          <div className="managers-section__error-content">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div>
              <p className="managers-section__error-text">
                {translate('managersSection.error.loadingError')}
              </p>
              <p className="managers-section__error-subtext">
                {translate('managersSection.error.tryLater')}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="managers-section__cards">
          {managers.map((manager) => {
            const image = managerImages[manager.id - 1];
            return (
              <div className="managers-section__card" key={manager.id}>
                <img src={image} alt={manager.fullName} />
                <div className="managers-section__info">
                  <p>{manager.fullName}</p>
                  <button
                    className="managers-section__request"
                    onClick={() => openModal({ ...manager, imageUrl: image })}
                  >
                    {translate('managersSection.requestCall')}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {selectedManager && (
        <ManagerCallModal
          isOpen={isModalOpen}
          onClose={closeModal}
          managerImage={selectedManager.imageUrl}
          managerId={selectedManager.id}
        />
      )}
    </section>
  );
};

export default ManagersSection;