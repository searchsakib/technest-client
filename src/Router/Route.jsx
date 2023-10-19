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
        path: '/inside-brand/:brand_name',
        element: <InsideBrand></InsideBrand>,
        loader: () => fetch('/brands.json'),
      },
      {
        path: '/update-product/:id',
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(`https://technest-server.vercel.app/products/${params.id}`),
      },
      {
        path: '/details-product/:id',
        element: <DetailsProduct></DetailsProduct>,
        loader: ({ params }) =>
          fetch(`https://technest-server.vercel.app/products/${params.id}`),
      },
    ],
  },
]);

export default myRoute;
