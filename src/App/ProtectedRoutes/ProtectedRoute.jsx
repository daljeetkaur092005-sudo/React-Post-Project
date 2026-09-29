import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import ProductSkeleton from "../../features/Auth/UI/Pages/ProductSkeleton";

const ProtectedRoute = () => {
  const { user, isLoading } = useSelector((store) => store.auth);
  if (isLoading) return <ProductSkeleton />;
  if (!user) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
