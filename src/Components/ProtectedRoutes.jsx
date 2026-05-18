import React from "react";
import { Navigate } from "react-router";
import { useAppContext } from "../context/AppContext";

const ProtectedRoute = ({ children }) => {
  const { user, isOwner } = useAppContext();

  if (!user) {
    return <Navigate to="/" />;
  }

  if (!isOwner) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
