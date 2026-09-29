import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import AuthLoading from "../../features/Auth/UI/Pages/AuthLoading";

const PublicRoute = () => {
  const { user, isLoading } = useSelector((store) => store.auth);
  if (isLoading) return <AuthLoading />;
  if (user) {
    return <Navigate to="/product" />;
  }
  return <Outlet />;
};

export default PublicRoute;
