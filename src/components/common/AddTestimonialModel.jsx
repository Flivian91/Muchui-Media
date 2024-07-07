import React, { useState } from "react";
import Modal from "react-modal";
import { useCloseModel } from "../../hooks/useCloseModel";
import { GiCancel } from "react-icons/gi";

// Ensure the modal root element is set for accessibility
Modal.setAppElement("#root");

const AddTestimonialModel = ({ isOpen, onRequestClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const ref = useCloseModel(onRequestClose);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && role && content) {
      onSubmit({ name, role, content, imageUrl });
      setName("");
      setRole("");
      setContent("");
      setImageUrl("");
      onRequestClose();
    } else {
      alert("Name, Content and Role are required");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      contentLabel="Add Testimonial Modal"
    >
      <div
        ref={ref}
        className="bg-white px-2 py-4 md:p-6 rounded md:rounded-lg w-full max-w-md"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Add Testimonial</h2>
          <button
            onClick={onRequestClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <GiCancel className="h-5 w-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="name" className="text-base font-semibold">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              className="border-gray-400/50 rounded-sm focus:ring-0 focus:outline-none focus:border-gray-400/50"
              required
            />
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="role" className="text-base font-semibold">
              Role
            </label>
            <input
              type="text"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              id="role"
              className="border-gray-400/50 rounded-sm focus:ring-0 focus:outline-none focus:border-gray-400/50"
              required
            />
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="content" className="text-base font-semibold">
              Content
            </label>
            <textarea
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              id="content"
              className="border-gray-400/50 rounded-sm focus:ring-0 focus:outline-none focus:border-gray-400/50"
              rows="3"
            ></textarea>
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="imageUrl" className="text-base font-semibold">
              Upload Image URL
            </label>
            <input
              type="file"
              name="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              id="imageUrl"
              className="file:cursor-pointer file:bg-secondary file:border-none file:text-sm file:font-bold file:py-1 file:rounded file:px-6 focus:ring-0 file:text-white focus:outline-none focus:border-gray-400/50"
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
              Add Testimonial
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddTestimonialModel;
