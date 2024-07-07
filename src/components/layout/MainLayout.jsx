import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <>
      <div className="2xl:container 2xl:mx-auto flex flex-col min-h-screen ">
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
