import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Root from './routes/root.jsx';
import ErrorPage from "./error-page";
import Contact from "./routes/contact.jsx";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";



const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
    path:"/",
    element:<Root/>,
    errorElement: <ErrorPage />,
    children:[
      {
        path:"contacts/:contactId",
        element:<Contact/>
      }
    ]
  },
  
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
