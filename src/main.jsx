import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import myRoute from './Router/Route';
import AuthProvider from './components/providers/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={myRoute}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
