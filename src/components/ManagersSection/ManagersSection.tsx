import React, { useState } from 'react';
import './ManagersSection.scss';
import ManagerCallModal from '../HomePage/ManagerCallModal/ManagerCallModal';


interface Manager {
  id: number;
  name: string;
  image: string;
}

interface ManagersSectionProps {
  t?: (key: string) => string;
  managers?: Manager[];
}

const ManagersSection: React.FC<ManagersSectionProps> = ({ t, managers: backendManagers }) => {
  const translate = t || ((key: string) => key);
  const defaultManagers: Manager[] = [
    { id: 1, name: 'Anna Smirnova', image: require('@/assets/images/managers/manager-1.png') },
    { id: 2, name: 'Ivan Petrov', image: require('@/assets/images/managers/manager-2.png') },
    { id: 3, name: 'Ekaterina Ivanova', image: require('@/assets/images/managers/manager-3.png') },
    { id: 4, name: 'Mikhail Kuznetsov', image: require('@/assets/images/managers/manager-4.png') },
    { id: 5, name: 'Olga Sokolova', image: require('@/assets/images/managers/manager-5.png') },
    { id: 6, name: 'Dmitry Morozov', image: require('@/assets/images/managers/manager-6.png') },
  ];
  const managers = backendManagers || defaultManagers;

  const [selectedManager, setSelectedManager] = useState<Manager | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (manager: Manager) => {
    setSelectedManager(manager);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedManager(null);
  };

  return (
    <section className="managers-section" >
      <h2 className="managers-section__title">{translate('managersSection.title')}</h2>
      <p className="managers-section__subtitle">{translate('managersSection.subtitle')}</p>
      <div className="managers-section__cards">
        {managers.map((manager) => (
          <div data-aos="zoom-in-up" className="managers-section__card" key={manager.id}>
            <img src={manager.image} alt={manager.name} />
            <div className="managers-section__info">
              <p>{manager.name}</p>
              <button className={'managers-section__request'} onClick={() => openModal(manager)}>{translate('managersSection.requestCall')}</button>
            </div>
          </div>
        ))}
      </div>

      {selectedManager && (
        <ManagerCallModal
          isOpen={isModalOpen}
          onClose={closeModal}
          managerImage={selectedManager.image}
        />
      )}
    </section>
  );
};

export default ManagersSection;