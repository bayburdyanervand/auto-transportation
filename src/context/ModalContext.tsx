import React, { createContext, useContext, useState, ReactNode } from 'react';

type ModalType = 'success' | 'error' | 'warning';

interface ModalContextType {
  showModal: (message: string, type: ModalType) => void;
  hideModal: () => void;
  isOpen: boolean;
  message: string | null;
  type: ModalType | null;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [type, setType] = useState<ModalType | null>(null);

  const showModal = (message: string, type: ModalType) => {
    setMessage(message);
    setType(type);
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
    setMessage(null);
    setType(null);
  };

  return (
    <ModalContext.Provider value={{ showModal, hideModal, isOpen, message, type }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};