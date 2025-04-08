import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/home/Homepage';
import Dashboard from './pages/dashboard/Dashboard';
import ChatsPage from './pages/chats/ChatsPage';
import RootLayout from './layouts/root/RootLayout';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/dashboard',
        children: [
          { path: '/dashboard', element: <Dashboard /> },
          { path: '/dashboard/chats/:id', element: <ChatsPage /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
