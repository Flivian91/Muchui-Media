// src/components/Roles.js
import React, { useState } from "react";
import { BiCheckCircle, BiCopy, BiEdit, BiTrash } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import AddRoleModal from "../../common/AddRoleModel";

const Roles = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", role: "Admin" },
    { id: 2, name: "Jane Smith", role: "user" },
    // Add more users here
  ]);

  const handleAddRole = (role) => {
    console.log("New Role:", role);
    // Add logic to handle the new role data (e.g., save to database)
  };

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
          onSubmit={handleAddRole}
          users={users}
        />
      </div>
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
