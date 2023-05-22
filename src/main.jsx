import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Root from './Root.jsx'
import Home from './components/Home.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/portfolio-website',
    element: <Root />,
    children: [
      {index: true, element: <Home />},

    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
);
