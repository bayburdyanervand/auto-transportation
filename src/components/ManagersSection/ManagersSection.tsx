import React, { useState } from 'react';
import './ManagersSection.scss';
import ManagerCallModal from '../HomePage/ManagerCallModal/ManagerCallModal';
import { useGetManagersQuery } from '@/features/managers/managersApi';
import { managerImages } from './managerImages';
import { Manager1 } from '@/types/Manager';

interface ManagersSectionProps {
  t?: (key: string) => string;
}

const ManagersSection: React.FC<ManagersSectionProps> = ({ t }) => {
  const translate = t || ((key: string) => key);
  const { data: managers = [] } = useGetManagersQuery();

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

  return (
    <section className="managers-section">
      <h2 className="managers-section__title">{translate('managersSection.title')}</h2>
      <p className="managers-section__subtitle">{translate('managersSection.subtitle')}</p>

      <div className="managers-section__cards">
        {managers.map((manager) => {
          const image = managerImages[manager.id - 1];
          return (
            <div data-aos="zoom-in-up" className="managers-section__card" key={manager.id}>
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
