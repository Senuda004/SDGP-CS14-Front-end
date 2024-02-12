import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { BrowserRouter,RouterProvider,createBrowserRouter } from 'react-router-dom'

import RootLayout from './layout/root.layout.tsx'
import MainLayout from './layout/main.layout.tsx'
import path from 'path'


const router = createBrowserRouter([
  {

  element: <RootLayout />,
  children: [
      {
        path: "/",
        element: <App />,
        children:[
          {
            path: "home",
            element:<MainLayout/>
          }
        ]
     
      }
       
        ]
    }

]);
ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
 ,
)
