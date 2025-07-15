import React from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from '@components/Header';
import { AppRouter } from './app/index';
import './App.css';
import MainLayout from './components/layouts/MainLayout/MainLayout';
import { ModalProvider } from './context/ModalContext';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      {/* <Header /> */}
      <ModalProvider>
        <MainLayout>
          <AppRouter />
        </MainLayout>
      </ModalProvider>
    </div >
  );
}

export default App;
