import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Layout from './components/Layout.jsx';
import SkillPage from './components/SkillPage.jsx';
import HomePage from './components/HomePage';
import UserProfile from './components/UserProfile';
import Form from './components/Form';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/skill",
        element: <SkillPage />
      },
      {
        path: "/GitHub",
        element: <UserProfile />
      },
      {
        path: "/Connect",
        element: <Form />
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
