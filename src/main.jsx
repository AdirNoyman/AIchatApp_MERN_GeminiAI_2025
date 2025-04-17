import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/home/Homepage';
import Dashboard from './pages/dashboard/Dashboard';
import ChatPage from './pages/chats/ChatPage';
import RootLayout from './layouts/root/RootLayout';
import DashboardLayout from './layouts/dashboard/DashboardLayout';
import SignInPage from './pages/auth/login/SignInPage';
import SignUPage from './pages/auth/register/SignUPage';


const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/sign-in/*',
        element: <SignInPage />
      },
      {
        path: '/sign-up/*',
        element: <SignUPage />,
      },
      {
        element: <DashboardLayout />,        
        children: [
          { path: '/dashboard', element: <Dashboard /> },
          { path: '/dashboard/chats/:id', element: <ChatPage /> },
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
