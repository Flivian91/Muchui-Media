// src/components/DashboardHome.js
import RecentActivities from "./RecentActivities";
import { FaCommentDots, FaUsers } from "react-icons/fa";
import { MdOutlineNewspaper } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { supabase } from "../../../supabase/supabaseClient";
import { useState } from "react";

const AdminDashboard = () => {
  const [numberOfUsers, setNumberOfUsers] = useState(0);

  // Function to count all the available users
  async function countNumUsers() {
    const { count, error } = await supabase
      .from("Users")
      .select("*", { count: "exact", head: true });
    setNumberOfUsers(count);
    if (error) {
      alert(error.message);
    }
  }
  countNumUsers();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        🎊 Welcome back,{" "}
        <span className="text-text/80 tracking-wide font-mono">Flivian</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 text-text">
        <div className="bg-white p-4 rounded shadow ">
          <h2 className="text-lg font-bold mb-2 flex items-center gap-2">
            <FaUsers fontSize={23} className="text-secondary" />
            <span>Total Users</span>
          </h2>
          <p className="md:text-3xl text-xl font-mono ml-8 font-semibold">{numberOfUsers}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-bold mb-2 flex items-center gap-2">
            <MdOutlineNewspaper fontSize={23} className="text-secondary" />
            <span>Total Posts</span>
          </h2>
          <p className="md:text-3xl text-xl font-mono ml-8 font-semibold">567</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-bold mb-2 flex items-center gap-2">
            <FaCommentDots fontSize={23} className="text-secondary" />
            <span>All Comments</span>
          </h2>
          <p className="md:text-3xl text-xl font-mono ml-8 font-semibold">89,012</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-bold mb-2 flex items-center gap-2">
            <AiFillLike fontSize={23} className="text-secondary" />
            <span>Total Likes</span>
          </h2>
          <p className="md:text-3xl text-xl font-mono ml-8 font-semibold">400,032</p>
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
