import React from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from '@components/Header';
import { AppRouter } from './app/index';
import './App.css';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <Header />
      <main>
        <AppRouter />
      </main>
    </div>
  );
}

export default App;
