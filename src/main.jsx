import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import AppliedJobs from './components/AppliedJobs.jsx';
import Viewdetails from './components/Viewdetails.jsx';
import JobProvider from './contexts/MyContext.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  
  {
    path: "appliedjobs",
    element: <AppliedJobs />,
  },

  {
    path: "viewdetails",
    element: <Viewdetails />,
  },


]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <JobProvider>
         <RouterProvider router={router} />
    </JobProvider>
  </React.StrictMode>
);

