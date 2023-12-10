import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppLayout from './App';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Darklayout from './Components/Darklayout';



const appRouter = createBrowserRouter([
  {
    path: '/',
    element:<Darklayout/>

  },
  {
    path: '/Home',
    element:<AppLayout/>

  }

]);
 


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

