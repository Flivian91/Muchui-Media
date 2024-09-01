/* eslint-disable react/prop-types */
// src/components/Sidebar.js
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logos/logo_transparent-2.png";
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineUserGroup,
  HiOutlineChartBar,
  HiOutlineDocumentReport,
  HiOutlineNewspaper,
  HiOutlineTemplate,
  HiOutlineBell,
  HiOutlineCog,
  HiOutlineQuestionMarkCircle,
  HiOutlineSupport,
} from "react-icons/hi";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { CgClose } from "react-icons/cg";
// import Modal from "react-modal";

const AdminMenuSidebar = ({ setOpen }) => {
  return (
    <div className="w-4/5 h-screen z-50 fixed top-0 left-0 bg-surface text-text flex flex-col shadow">
      <div className="text-sm font-bold shadow-sm py-1 flex items-center justify-between pr-3">
        <Link to={"/admin"}>
          <img src={logo} className="h-20 w-full" alt="Logo image" />
        </Link>
        <button
          onClick={setOpen}
          className="p-2 text-xl hover:bg-background font-bold rounded"
        >
          <CgClose />
        </button>
      </div>
      <nav onClick={setOpen} className="flex-1 overflow-auto ">
        <NavLink to="/admin" className="admin-sidebar-links">
          <HiOutlineHome className="mr-3" /> Dashboard
        </NavLink>
        <NavLink to="/admin/users" className=" admin-sidebar-links">
          <HiOutlineUser className="mr-3" /> Users
        </NavLink>
        <NavLink to="/admin/roles" className=" admin-sidebar-links">
          <HiOutlineUserGroup className="mr-3" /> Roles & Permissions
        </NavLink>
        <NavLink to="/admin/analytics" className=" admin-sidebar-links">
          <HiOutlineChartBar className="mr-3" /> Analytics Overview
        </NavLink>
        <NavLink to="/admin/reports" className=" admin-sidebar-links">
          <HiOutlineDocumentReport className="mr-3" /> Reports
        </NavLink>
        <NavLink to="/admin/posts" className=" admin-sidebar-links">
          <HiOutlineNewspaper className="mr-3" /> Posts
        </NavLink>
        <NavLink to="/admin/pages" className=" admin-sidebar-links">
          <HiOutlineTemplate className="mr-3" /> Pages
        </NavLink>
        <NavLink to="/admin/testimonials" className=" admin-sidebar-links">
          <HiOutlineSpeakerWave className="mr-3" /> Testimonials
        </NavLink>
        <NavLink to="/admin/faqs" className=" admin-sidebar-links">
          <HiOutlineQuestionMarkCircle className="mr-3" /> FAQ`s
        </NavLink>
        <NavLink to="/admin/notifications" className=" admin-sidebar-links">
          <HiOutlineBell className="mr-3" /> Notifications
        </NavLink>
        <NavLink to="/admin/settings" className=" admin-sidebar-links">
          <HiOutlineCog className="mr-3" /> Settings
        </NavLink>
        <NavLink to="/admin/help" className=" admin-sidebar-links">
          <HiOutlineQuestionMarkCircle className="mr-3" /> Help Center
        </NavLink>
        <NavLink to="/admin/support" className="admin-sidebar-links">
          <HiOutlineSupport className="mr-3" /> Contact Support
        </NavLink>
      </nav>
    </div>
  );
};

export default AdminMenuSidebar;
