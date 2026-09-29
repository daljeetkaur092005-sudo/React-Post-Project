import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../../Layout/AuthLayout";
import ProductLayout from "../../Layout/ProductLayout";
import Login from "../../features/Auth/UI/Pages/Login";
import Register from "../../features/Auth/UI/Pages/Register";
import { useDispatch } from "react-redux";
import { currentUserApi } from "../../features/Auth/State/AuthAction";
import PublicRoute from "../ProtectedRoutes/PublicRoute";
import ProtectedRoute from "../ProtectedRoutes/ProtectedRoute";
import MainPage from "../../features/Products/UI/Pages/MainPage";
import FavouritePage from "../../features/Products/UI/Components/FavouritePage";
const Approute = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUserApi());
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "/",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },
    {
      path: "",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/product",
          element: <ProductLayout />,
          children: [
            {
              path: "",
              element: <MainPage />,
            },
            { path: "favourite", element: <FavouritePage /> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default Approute;
