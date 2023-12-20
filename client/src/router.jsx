import { createBrowserRouter, redirect } from "react-router-dom";
import Register from "./views/RegisterPage";
import Login from "./views/LoginPage";
import HomePage from "./views/Homepage";


export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    loader: () => localStorage.getItem("access_token") && redirect("/"),
  },
  {
    path: "/register",
    element: <Register />,
    loader: () => localStorage.getItem("access_token") && redirect("/"),
  },
  {
    path: "/",
    element: < HomePage />,
    loader: () => !localStorage.getItem("access_token") && redirect("/login"),
  },
]);
