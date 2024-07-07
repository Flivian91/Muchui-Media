import React from "react";
import { Outlet } from "react-router-dom";
import ClientNavbar from "../dashboard/client/ClientNavbar";
import ClientFooter from "../dashboard/client/ClientFooter";

const ClientLayout = () => {
  return (
    <>
      <ClientNavbar />
      <main className="min-h-screen bg-gray-100">
        <Outlet />
      </main>
      <ClientFooter />
    </>
  );
};

export default ClientLayout;
