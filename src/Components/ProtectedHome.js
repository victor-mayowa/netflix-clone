import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const ProtectedHome = ({ children }) => {
  const { user} = UserAuth();

  if (user) {
    return <Navigate to="/home" />
  } else{
    return children
  }
};

export default ProtectedHome;
