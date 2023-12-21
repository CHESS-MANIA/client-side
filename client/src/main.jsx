import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./index.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <App /> */}
    <RouterProvider router={router} />
    <ToastContainer/>
  </>
);
