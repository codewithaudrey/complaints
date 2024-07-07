import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/root/Layout';
import IndexPage from './pages/IndexPage';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <HelmetProvider>
        <RootLayout />
      </HelmetProvider>
    ),
    children: [{ index: true, element: <IndexPage /> }],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
