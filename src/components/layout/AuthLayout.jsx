import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = ({children}) => {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      {children}
    </main>
  );
};

export default AuthLayout;
