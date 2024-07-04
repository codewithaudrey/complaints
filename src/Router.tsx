import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/root/Layout'
import IndexPage from './pages/IndexPage'

const router = createBrowserRouter([{path: '/', element: <RootLayout/>, children: [
    {index: true, element: <IndexPage/>}]
}])

const Router = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default Router