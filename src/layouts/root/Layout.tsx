import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Box from '../../components/Box/Box';

const RootLayout = () => {
  return (
    <Box backgroundColor={'gray-10'}>
      <Outlet />
      <Footer />
    </Box>
  );
};

export default RootLayout;
