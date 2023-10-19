import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home';
import AddProduct from '../pages/AddProduct/AddProduct';
import MyCart from '../pages/MyCart/MyCart';
import Login from '../pages/Login/Login';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import InsideBrand from '../components/InsideBrand/InsideBrand';
import Register from '../pages/Register/Register';

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
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/inside-brand/:id',
        element: <InsideBrand></InsideBrand>,
        loader: () => fetch('/brands.json'),
      },
    ],
  },
]);

export default myRoute;
