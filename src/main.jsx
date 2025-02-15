import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
 
  RouterProvider,
} from "react-router-dom";
import { router } from './Router/Router';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Page/Provider/AuthProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProvider>
 <HelmetProvider>
   <div className=' max-w-screen-xl mx-auto'>
   <RouterProvider router={router} />
   </div>
   </HelmetProvider>
 </AuthProvider>
  </React.StrictMode>,
)
