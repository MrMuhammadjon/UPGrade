import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import Basket from '../Page/Basket';
import Category from '../Page/Category';
import ProductDetails from '../Page/ProductDetails';
import Compare from '../Page/Compare';
import Configurator from '../Page/Configurator';
import Contact from '../Page/Contact';
import ErrorPage from '../Page/ErrorPage';
import Gallery from '../Page/Gallery';
import Home from '../Page/Home';
import Login from '../Page/Login';
import Profil from '../Page/Profil';
import ProtectedRoute from '../Page/ProtectedRoute';
import Wishlist from '../Page/Wishlist';
import Order from '../Page/Order';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'basket', element: <Basket /> },
      { path: 'category', element: <Category /> },
      { path: 'products/:id', element: <ProductDetails /> },
      { path: 'compare', element: <Compare /> },
      { path: 'configurator', element: <Configurator /> },
      {
        path: 'order',
        element: (
          <ProtectedRoute>
            <Order />
          </ProtectedRoute>
        ),
      },
      { path: 'contact', element: <Contact /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'login', element: <Login /> },
      {
        path: 'profile',
        element: (
          <ProtectedRoute>
            <Profil />
          </ProtectedRoute>
        ),
      },
      {
        path: 'wishlist',
        element: (
          <ProtectedRoute>
            <Wishlist />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
