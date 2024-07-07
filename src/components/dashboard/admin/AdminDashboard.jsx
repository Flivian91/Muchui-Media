// src/components/DashboardHome.js
import React from "react";
import RecentActivities from "./RecentActivities";
import { FaCommentDots, FaUsers } from "react-icons/fa";
import { MdOutlineNewspaper, MdViewSidebar } from "react-icons/md";
import { AiFillLike, AiOutlineDislike } from "react-icons/ai";

const AdminDashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        🎊 Welcome back,{" "}
        <span className="text-text/80 tracking-wide font-mono">Flivian</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 text-text">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-bold mb-2 flex items-center gap-2">
            <FaUsers fontSize={23} className="text-secondary" />
            <span>Total Users</span>
          </h2>
          <p className="md:text-3xl text-xl font-mono">1,234</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-bold mb-2 flex items-center gap-2">
            <MdOutlineNewspaper fontSize={23} className="text-secondary" />
            <span>Total Posts</span>
          </h2>
          <p className="md:text-3xl text-xl font-mono">567</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-bold mb-2 flex items-center gap-2">
            <FaCommentDots fontSize={23} className="text-secondary" />
            <span>All Comments</span>
          </h2>
          <p className="md:text-3xl text-xl font-mono">89,012</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-bold mb-2 flex items-center gap-2">
            <AiFillLike fontSize={23} className="text-secondary" />
            <span>Total Likes</span>
          </h2>
          <p className="md:text-3xl text-xl font-mono">400,032</p>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-2">Recent Activities</h2>
        <RecentActivities />
      </div>
    </div>
  );
};

export default AdminDashboard;
