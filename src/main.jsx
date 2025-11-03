import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import { ToastContainer } from 'react-toastify';
import './index.css';
import './style.css';

import AllProducts from './components/AllProducts/AllProducts.jsx';
import ForgotPassword from './components/ForgotPassword/ForgotPassword.jsx';
import Home from './components/Home/Home.jsx';
import MyBids from './components/MyBids/MyBids.jsx';
import MyProducts from './components/MyProducts/MyProducts.jsx';
import ProductDetails from './components/ProductDetails/ProductDetails.jsx';
import Register from './components/Register/Register.jsx';
import SignIn from './components/SignIn/SignIn.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';
import Root from './layout/Root.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'allProducts',
        Component: AllProducts,
      },
      {
        path: 'register',
        Component: Register,
      },
      {
        path: 'signIn',
        Component: SignIn,
      },
      {
        path: 'forgotPassword',
        Component: ForgotPassword,
      },
      {
        path: 'myProducts',
        element: <MyProducts />,
      },
      {
        path: 'myBids',
        element: <MyBids />,
      },
      {
        path: 'createproduct',
        element: <p>Create Product</p>,
      },
      {
        path: 'productDetails/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`),
        element: <ProductDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </StrictMode>,
);
