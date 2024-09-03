// src/components/Roles.js
import { useEffect, useState } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";

import AddRoleModal from "../../common/AddRoleModel";
import { supabase } from "../../../supabase/supabaseClient";

const Roles = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);

  const handleAddRole = (role) => {
    console.log("New Role:", role);
    // Add logic to handle the new role data (e.g., save to database)
  };

  // Load the current users on the database
  async function loadCurrentusers() {
    const { data, error } = await supabase.from("Users").select("id, username");
    setUsers(data);
    if (error) {
      alert(error.message);
    }
  }
  useEffect(function () {
    loadCurrentusers();
  }, []);

  // Fetch Available roles
  async function fetchRoles() {
    const { data, error } = await supabase.from("UsersRoles").select("*");
    setRoles(data);
    if (error) {
      alert(error.message);
    }
  }
  useEffect(() => {
    fetchRoles();
  }, []);

  // Insert New Role and permission
  async function createNewRole(data) {
    const { error } = await supabase.from("UsersRoles").insert(data);
    if (error) {
      alert(error.message);
    }
  }
  // Update the Roles
  async function updateRoles(updatedData) {
    const { error } = await supabase.from("UsersRoles").upsert(updatedData);
    if (error) {
      alert(error.message);
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Roles & Permissions</h1>
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search permission..."
          className="p-2 border border-secondary w-28 md:w-40 focus:w-44 transition-all duration-300 text-sm sm:text-base focus:border-secondary rounded outline-none focus:outline-none focus:ring-0"
        />
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-secondary text-white p-2 sm:px-6 px-3 font-semibold rounded"
        >
          Add Role
        </button>
        <AddRoleModal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          onSubmit={createNewRole}
          users={users}
        />
      </div>
      0
      <div className="min-w-full bg-white">
        <div className=" grid grid-cols-[1fr_0.8fr_1.8fr_0.3fr] items-center w-full justify-center border-b md:px-4 px-2  py-3 font-bold text-base text-text">
          <span>Name</span>
          <span>Role</span>
          <span>Permissions</span>
          <span>Actions</span>
        </div>
        <div>
          <div>
            <div className=" grid grid-cols-[1fr_0.8fr_1.8fr_0.3fr]  text-sm sm:text-base items-center text-text/80 font-semibold justify-center px-2 sm:px-4 py-1.5">
              <span>Flivian</span>
              <span>Admin</span>
              <span className="truncate">N/A</span>
              <div className="flex space-x-2 transition-all duration-200 ">
                <button
                  title="edit"
                  className="text-secondary hover:text-secondary/80"
                >
                  <BiEdit className="h-5 w-5" />
                </button>
                <button
                  title="delete"
                  className="text-red-500 hover:text-red-700"
                >
                  <BiTrash className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roles;
