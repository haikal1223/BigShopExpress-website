import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'src/assets/css/App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = lazy(() => import('./pages/home'));

const App = () => {
  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
