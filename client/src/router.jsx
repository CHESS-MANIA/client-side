import { createBrowserRouter, redirect } from "react-router-dom";
import Register from "./views/RegisterPage";
import Login from "./views/LoginPage";
import HomePage from "./views/Homepage";
import GameplayPage from "./views/GameplayPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    loader: () => localStorage.getItem("access_token") && redirect("/gamePlay"),
  },
  {
    path: "/register",
    element: <Register />,
    loader: () => localStorage.getItem("access_token") && redirect("/"),
  },
  // {
  //   path: "/",
  //   element: < HomePage />,
  //   loader: () => !localStorage.getItem("access_token") && redirect("/login"),
  // },
  {
    path: "/gamePlay",
    element: < GameplayPage />,
    loader: () => !localStorage.getItem("access_token") && redirect("/"),
  },
]);
