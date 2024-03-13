import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import AppBar from './appBar/AppBar';
import Footer from './footer/Footer';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};
