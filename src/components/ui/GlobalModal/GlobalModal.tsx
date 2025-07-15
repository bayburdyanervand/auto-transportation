import React, { useEffect } from 'react';
import './GlobalModal.scss';

type ModalType = 'success' | 'error' | 'warning';

interface GlobalModalProps {
  message: string;
  type: ModalType;
  onClose: () => void;
  isOpen: boolean;
  duration?: number;  
}

const GlobalModal: React.FC<GlobalModalProps> = ({ message, type, onClose, isOpen, duration = 5000 }) => {
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isOpen) {
      timer = setTimeout(() => {
        onClose();
      }, duration);
    }
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose, duration]);

  if (!isOpen) return null;

  return (
    <div className="global-modal-overlay" onClick={onClose}>
      <div className="global-modal" onClick={(e) => e.stopPropagation()}>
        <div className={`modal-content ${type}`}>
          <p>{message}</p>
          <button onClick={onClose}>Закрыть</button>
        </div>
      </div>
    </div>
  );
};

export default GlobalModal;