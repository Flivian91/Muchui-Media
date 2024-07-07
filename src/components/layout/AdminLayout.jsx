import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../dashboard/admin/AdminSidebar";
import AdminNavbar from "../dashboard/admin/AdminNavbar";
import AdminMenuSidebar from "../dashboard/admin/AdminMenuSidebar";
import { useCloseModel } from "../../hooks/useCloseModel";

const AdminLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useCloseModel(setIsOpen);
  return (
    <div className="grid lg:grid-cols-[240px_1fr]">
      <div className="row-span-full hidden lg:block ">
        <AdminSidebar />
      </div>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed z-30 top-0 left-0 w-full h-full backdrop-blur-[1.5px]"
        >
          <AdminMenuSidebar setOpen={() => setIsOpen((prev) => !prev)} />
        </div>
      )}
      <main className="min-h-screen bg-gray-100">
        <AdminNavbar setOpen={() => setIsOpen((prev) => !prev)} />
        <section className="px-2 py-4 overflow-auto h-screen">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default AdminLayout;
