// src/components/Roles.js
import { useEffect, useState } from "react";

import AddRoleModal from "../../common/AddRoleModel";
import { supabase } from "../../../supabase/supabaseClient";
import EditRolesModel from "../../common/EditRolesModel";
import RolesItems from "../../common/RolesItems";
import LoadingSpinner from "../../common/LoadingSpinner";

const Roles = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [roleDataToUpdate, setRoleDataToUpdate] = useState({});
  let searchedData = roles;

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
    try {
      setIsLoading(true);
      const { data, error } = await supabase.from("UsersRoles").select("*");
      setRoles(data);
      if (error) {
        console.log(error.message);
      }
      setIsLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  }
  useEffect(() => {
    fetchRoles();
  }, []);

  // Insert New Role and permission
  async function createNewRole(data) {
    const { error } = await supabase.from("UsersRoles").insert(data);
    fetchRoles();
    if (error) {
      console.log(error.message);
    }
  }
  // Update the Roles
  async function updateRoles(updatedData) {
    const { error } = await supabase.from("UsersRoles").upsert(updatedData);
    fetchRoles();
    if (error) {
      console.log(error.message);
    }
  }
  // Function toi delete data
  async function deleteRole(id) {
    await supabase.from("UsersRoles").delete().eq("id", id);
    fetchRoles();
  }
  // Function to detect currently clicked user role
  function handleUpdateRole(id) {
    setIsEditOpen(true);
    const userRole = roles.find((role) => role.id === id);
    setRoleDataToUpdate(userRole);
  }
  // Function to handle searched results
  function handleSearch(text) {
    searchedData = roles.filter((role) =>
      role.role.toLowerCase().includes(text.toLowerCase())
    );
  }
  handleSearch(searchQuery);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Roles & Permissions</h1>
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
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
        <EditRolesModel
          isOpen={isEditOpen}
          onRequestClose={() => setIsEditOpen(false)}
          onSubmit={updateRoles}
          users={users}
          data={roleDataToUpdate} //add data
        />
      </div>

      <div className="min-w-full bg-white">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <div className=" grid grid-cols-[1fr_0.8fr_1.8fr_0.3fr] items-center w-full justify-center border-b md:px-4 px-2  py-3 font-bold text-base text-text">
              <span>Name</span>
              <span>Role</span>
              <span>Permissions</span>
              <span>Actions</span>
            </div>
            <div>
              {searchedData.length === 0 ? (
                <div className="flex items-center justify-center py-10">
                  <p className="text-text font-bold text-xl">
                    No record 😪😪☠️
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  {searchedData.map((role) => (
                    <RolesItems
                      onUpdate={handleUpdateRole}
                      key={role.id}
                      role={role}
                      users={users}
                      onDelete={deleteRole}
                    />
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Roles;
