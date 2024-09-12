/* eslint-disable react/prop-types */
import { useState } from "react";
import { BiPlusCircle } from "react-icons/bi";
import CreatePostModal from "./CreatePostModal";

function CreatePost({ children, role, fetchLoad }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
        fetchLoad={fetchLoad}
      />
    </>
  );
}

export default CreatePost;
