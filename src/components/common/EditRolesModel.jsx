/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Modal from "react-modal";
import { GiCancel } from "react-icons/gi";
import { useCloseModel } from "../../hooks/useCloseModel";

// Ensure the modal root element is set for accessibility
Modal.setAppElement("#root");

const EditRolesModel = ({ isOpen, onRequestClose, onSubmit, users, data }) => {
  const [selectedUser, setSelectedUser] = useState("");
  const [roleName, setRoleName] = useState("");
  const [permissions, setPermissions] = useState("");
  const ref = useCloseModel(onRequestClose);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedUser && roleName) {
      onSubmit({ user_id: selectedUser, role: roleName, permissions });
      setSelectedUser("");
      setRoleName("");
      setPermissions("");
      onRequestClose();
    } else {
      alert("User and Role Name are required");
    }
  };
  useEffect(
    function () {
      setSelectedUser(data.user_id);
      setRoleName(data.role);
      setPermissions(data.permissions);
    },
    [data]
  );

  useEffect(() => {
    if (users.length > 0) {
      setSelectedUser(users[0].id);
    }
  }, [users]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      contentLabel="Add Role Modal"
    >
      <div ref={ref} className="bg-white p-6 rounded-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Add Role</h2>
          <button
            onClick={onRequestClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <GiCancel className="h-5 w-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="user" className="text-base font-semibold">
              User
            </label>
            <select
              name="user"
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
              id="user"
              className="border-gray-400/50 rounded-sm focus:ring-0 focus:outline-none focus:border-gray-400/50"
            >
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.username}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="roleName" className="text-base font-semibold">
              Role Name
            </label>
            <select
              name="roleName"
              value={roleName}
              onChange={(e) => setRoleName(e.target.value)}
              id="roleName"
              className="border-gray-400/50 rounded-sm focus:ring-0 focus:outline-none focus:border-gray-400/50"
              required
            >
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="permissions" className="text-base font-semibold">
              Permissions
            </label>
            <textarea
              name="permissions"
              value={permissions}
              onChange={(e) => setPermissions(e.target.value)}
              id="permissions"
              className="border-gray-400/50 rounded-sm focus:ring-0 focus:outline-none focus:border-gray-400/50"
              rows="3"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
            >
              Add Role
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EditRolesModel;
