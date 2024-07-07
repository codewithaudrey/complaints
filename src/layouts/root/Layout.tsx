import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

const RootLayout = () => {
  return (
    <React.Fragment>
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

export default RootLayout;
