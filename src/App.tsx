import React from 'react';
import { useTranslation } from 'react-i18next';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppRouter } from './app/index';
import './App.css';
import MainLayout from './components/layouts/MainLayout/MainLayout';
import { ModalProvider } from './context/ModalContext';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <ModalProvider>
        <MainLayout>
          <AppRouter />
        </MainLayout>
      </ModalProvider>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="colored"
      />
    </div >
  );
}

export default App;
