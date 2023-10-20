import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home';
import AddProduct from '../pages/AddProduct/AddProduct';
import MyCart from '../pages/MyCart/MyCart';
import Login from '../pages/Login/Login';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import InsideBrand from '../components/InsideBrand/InsideBrand';
import Register from '../pages/Register/Register';
import UpdateProduct from '../components/UpdateProduct/UpdateProduct';
import DetailsProduct from '../components/DetailsProduct/DetailsProduct';
import PrivateRoute from './PrivateRoute';

const myRoute = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '',
        element: <Home></Home>,
      },
      {
        path: '/add-product',
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: '/cart',
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () => fetch('https://technest-server.vercel.app/cart'),
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/inside-brand/:brand_name',
        element: <InsideBrand></InsideBrand>,
        loader: () => fetch('/brands.json'),
      },
      {
        path: '/update-product/:id',
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://technest-server.vercel.app/products/${params.id}`),
      },
      {
        path: '/details-product/:id',
        element: (
          <PrivateRoute>
            <DetailsProduct></DetailsProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://technest-server.vercel.app/products/${params.id}`),
      },
    ],
  },
]);

export default myRoute;
