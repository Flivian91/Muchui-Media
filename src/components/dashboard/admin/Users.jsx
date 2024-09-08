// src/components/Users.js
import { useEffect, useState } from "react";
import UsersItem from "../../common/UsersItem";
import AddUserModal from "../../common/AddUserModal";
import { supabase } from "../../../supabase/supabaseClient";
import LoadingSpinner from "../../common/LoadingSpinner";
import EditUserModel from "../../common/EditUserModel";
const Users = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [updateData, setUpdateData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  // const [numRecord, setNumRecord] = useState(false);
  let searchedUsers = users;
  // Load users From supabase database
  useEffect(() => {
    fetchUsers();
  }, []);
  async function fetchUsers() {
    try {
      setIsLoading(true);
      const { data } = await supabase
        .from("Users")
        .select("id, username, password,email");
      setUsers(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  // Create new User
  async function createNewUser(user) {
    const { error } = await supabase.from("Users").insert(user);
    fetchUsers();
    if (error) {
      alert(error.message);
    }
  }
  // Update User Data
  async function updateUserData(data) {
    const { error } = await supabase.from("Users").upsert(data);
    fetchUsers();
    if (error) {
      alert(error.message);
    }
  }
  // Delete User data
  async function deleteUserData(id) {
    await supabase.from("Users").delete().eq("id", id);
    fetchUsers();
  }

  // Update handler
  function handleUpdateUser(id) {
    setIsEditOpen(true);
    const userToUpdate = users.find((user) => user.id === id);
    setUpdateData(userToUpdate);
  }
  // Search functionality
  function handleSearch(text) {
    if (text.length < 2) return;
    searchedUsers = users.filter((user) =>
      user.username.toLowerCase().includes(text.toLowerCase())
    );

    // setNumRecord(false);
  }
  handleSearch(query);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search user..."
          className="p-2 border border-secondary w-28 md:w-40 focus:w-44 transition-all duration-300 text-sm sm:text-base focus:border-secondary rounded outline-none focus:outline-none focus:ring-0"
        />
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-secondary text-white p-2 px-6 font-semibold rounded"
        >
          Add User
        </button>
        <AddUserModal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          onSubmit={createNewUser}
        />
        <EditUserModel
          isOpen={isEditOpen}
          onRequestClose={() => setIsEditOpen(false)}
          onSubmit={updateUserData}
          data={updateData}
        />
      </div>
      <div className="min-w-full bg-white rounded  ">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            {" "}
            <div className=" grid grid-cols-[0.6fr_0.8fr_1.8fr_0.2fr] items-center justify-center border-b px-4 py-3 font-bold text-sm md:text-base text-text">
              <span>ID</span>
              <span>Name</span>
              <span>Email</span>
              <span>Actions</span>
            </div>
            {searchedUsers.length === 0 ? (
              <div className="flex items-center justify-center py-10">
                <p className="text-text font-bold text-xl">No record 😪😪☠️</p>
              </div>
            ) : (
              <div className="flex flex-col gap-2 divide-y pb-12">
                {searchedUsers.map((user, i) => (
                  <UsersItem
                    key={user.id}
                    user={user}
                    index={i}
                    onUpdate={handleUpdateUser}
                    onDelete={deleteUserData}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Users;
