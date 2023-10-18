import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home';
import AddProduct from '../pages/AddProduct/AddProduct';
import MyCart from '../pages/MyCart/MyCart';
import Login from '../pages/Login/Login';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

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
        element: <AddProduct></AddProduct>,
      },
      {
        path: '/my-cart',
        element: <MyCart></MyCart>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
    ],
  },
]);

export default myRoute;
