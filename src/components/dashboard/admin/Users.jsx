// src/components/Users.js
import React, { useState } from "react";
import UsersItem from "../../common/UsersItem";
import AddUserModal from "../../common/AddUserModal";
export const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@gmail.com",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@yahoo.com",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@hotmail.com",
  },
  {
    id: 4,
    name: "Bob Brown",
    email: "bob.brown@aol.com",
  },
  {
    id: 5,
    name: "Charlie Davis",
    email: "charlie.davis@gmail.com",
  },
  {
    id: 6,
    name: "Dana Evans",
    email: "dana.evans@outlook.com",
  },
  {
    id: 7,
    name: "Eve Franklin",
    email: "eve.franklin@icloud.com",
  },
  {
    id: 8,
    name: "Frank Green",
    email: "frank.green@gmail.com",
  },
  {
    id: 9,
    name: "Grace Hall",
    email: "grace.hall@yahoo.com",
  },
  {
    id: 10,
    name: "Henry Ingram",
    email: "henry.ingram@hotmail.com",
  },
  {
    id: 11,
    name: "Ivy James",
    email: "ivy.james@aol.com",
  },
  {
    id: 12,
    name: "Jack Kelly",
    email: "jack.kelly@gmail.com",
  },
  {
    id: 13,
    name: "Karen Lee",
    email: "karen.lee@outlook.com",
  },
  {
    id: 14,
    name: "Liam Martin",
    email: "liam.martin@icloud.com",
  },
  {
    id: 15,
    name: "Mona Nelson",
    email: "mona.nelson@gmail.com",
  },
];

const Users = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddUser = (user) => {
    console.log("New User:", user);
  };
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <div className="flex justify-between items-center mb-4">
      <input
          type="text"
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
          onSubmit={handleAddUser}
        />
      </div>
      <div className="min-w-full bg-white rounded  ">
        <div className=" grid grid-cols-[0.6fr_0.8fr_1.8fr_0.2fr] items-center justify-center border-b px-4 py-3 font-bold text-sm md:text-base text-text">
          <span>ID</span>
          <span>Name</span>
          <span>Email</span>
          <span>Actions</span>
        </div>
        <div className="flex flex-col gap-2 divide-y pb-12">
          {users.map((user) => (
            <UsersItem key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
