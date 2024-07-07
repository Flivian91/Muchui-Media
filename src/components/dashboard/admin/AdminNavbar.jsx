import React from "react";
import { Link } from "react-router-dom";
import AdminSearchBar from "./AdminSearchBar";
import AdminProfileSection from "./AdminProfileSection";
import { BiMenu } from "react-icons/bi";

const AdminNavbar = ({setOpen}) => {
  return (
    <nav className=" text-white px-2 flex items-center justify-between py-2">
      <div className="flex items-center gap-3 text-text">
        <button onClick={setOpen} className="p-2 bg-surface rounded-md block lg:hidden">
          <BiMenu fontSize={23} />
        </button>
        <AdminSearchBar />
      </div>
      <AdminProfileSection />
    </nav>
  );
};

export default AdminNavbar;
