/* eslint-disable react/prop-types */
import { useState } from "react";
import Modal from "react-modal";
import { useCloseModel } from "../../hooks/useCloseModel";
import { GiCancel } from "react-icons/gi";
import { GrFormView, GrFormViewHide } from "react-icons/gr";

// Ensure the modal root element is set for accessibility
Modal.setAppElement("#root");

const AddUserModal = ({ isOpen, onRequestClose, onSubmit }) => {
  const [showPass, setShowPass] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const ref = useCloseModel(onRequestClose);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      onSubmit({ username, password, email });
      setUsername("");
      setPassword("");
      setEmail("");
      onRequestClose();
    } else {
      alert("Username and Password are required");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      contentLabel="Add User Modal"
    >
      <div
        ref={ref}
        className="bg-white px-2 py-4 md:p-6 rounded md:rounded-lg w-full max-w-md"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Add User</h2>
          <button
            onClick={onRequestClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <GiCancel className="h-5 w-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="username" className="text-base font-semibold">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id="username"
              className="border-gray-400/50 rounded-sm focus:ring-0 focus:outline-none focus:border-gray-400/50"
              required
            />
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="password" className="text-base font-semibold">
              Password
            </label>
            <div className="flex gap-2 border border-gray-400/50">
              <input
                type={showPass ? "text" : "password"}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                className="border-transparent w-full font-mono tracking-wide rounded-sm focus:ring-0 focus:outline-none focus:border-transparent"
                required
              />
              <button
                type="button"
                role="button"
                onClick={() => setShowPass((prev) => !prev)}
                className="px-2 text-gray-500 transform hover:scale-105 hover:text-gray-600 transition-all duration-300 "
              >
                {showPass ? (
                  <GrFormViewHide fontSize={22} />
                ) : (
                  <GrFormView fontSize={22} />
                )}
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="email" className="text-base font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              className="border-gray-400/50 rounded-sm focus:ring-0 focus:outline-none focus:border-gray-400/50"
              required
            />
          </div>
          <div className="flex items-center justify-between pt-3 border-t">
            <button
              onClick={() => onRequestClose(false)}
              className="px-4 py-2 bg-stone-500 text-white rounded-lg hover:bg-stone-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddUserModal;
