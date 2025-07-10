import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from './routesConfig';

const AppRouter = () => {
  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
};

export default AppRouter;