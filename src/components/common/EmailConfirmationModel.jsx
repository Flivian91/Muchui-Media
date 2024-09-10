/* eslint-disable react/prop-types */
import React from "react";
import Modal from "react-modal"; // Make sure to install react-modal if you haven’t already
import { useNavigate } from "react-router-dom";

// Custom styles for the modal
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "500px",
    padding: "2rem",
    borderRadius: "0.5rem",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    border: "1px solid #e5e7eb", // Light border to enhance visual separation
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Slightly darker overlay
  },
};

function EmailConfirmationModal(onClose, isOpen) {
  const navigate = useNavigate();
  function handleClose() {
    onClose();
    navigate("/signin");
  }
  <Modal
    isOpen={isOpen}
    onRequestClose={onClose}
    contentLabel="Email Confirmation"
    style={customStyles}
  >
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Verify Your Email
      </h2>
      <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6 w-full text-center">
        <p className="text-gray-600 mb-4">
          Thank you for signing up! To complete your registration, please
          confirm your email address by checking your inbox and clicking the
          confirmation link we’ve sent you.
        </p>
        <p className="text-gray-600 mb-4">
          If you don’t see the email, please check your spam folder or request a
          new confirmation link.
        </p>
        <p className="text-gray-600">
          For assistance, contact us at{" "}
          <a
            href="mailto:dflivo@example.com"
            className="text-teal-500 hover:underline"
          >
            dflivo@example.com
          </a>
          .
        </p>
      </div>
      <button
        onClick={handleClose}
        className="bg-teal-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-300"
      >
        Close
      </button>
    </div>
  </Modal>;
}

export default EmailConfirmationModal;
