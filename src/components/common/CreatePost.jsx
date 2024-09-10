/* eslint-disable react/prop-types */
import { useState } from "react";
import { BiPlusCircle } from "react-icons/bi";
import CreatePostModal from "./CreatePostModal";

function CreatePost({ children, role, onSubmit }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitPost = (newPost) => {
    console.log("Post newPost:", newPost);
    // Add logic to save the post content (e.g., send to server)
  };
  return (
    <>
      <button
        onClick={handleOpenModal}
        className={`px-2 py-2 ${
          role === "add" ? " flex" : "hidden "
        }  text-white  text-base font-bold bg-secondary hover:bg-secondary/80 transition-all duration-200 rounded uppercase md:flex items-center gap-3`}
      >
        <BiPlusCircle fontSize={23} />
        {children}
      </button>
      <CreatePostModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        onSubmit={handleSubmitPost}
      />
    </>
  );
}

export default CreatePost;
