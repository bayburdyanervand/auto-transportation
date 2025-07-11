import React from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from '@components/Header';
import { AppRouter } from './app/index';
import './App.css';
import MainLayout from './components/layouts/MainLayout/MainLayout';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      {/* <Header /> */}
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </div >
  );
}

export default App;
