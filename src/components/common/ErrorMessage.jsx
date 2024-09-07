/* eslint-disable react/prop-types */
import Modal from "react-modal";
import { useCloseModel } from "../../hooks/useCloseModel";
import { GiCancel } from "react-icons/gi";

// Ensure the modal root element is set for accessibility
Modal.setAppElement("#root");

const ErrorMessage = ({ isOpen, onRequestClose }) => {
  const ref = useCloseModel(onRequestClose);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      contentLabel="Add Role Modal"
    >
      <div ref={ref} className="bg-white p-6 rounded-lg w-full max-w-md">
      <button
            onClick={onRequestClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <GiCancel className="h-5 w-5" />
          </button>
      </div>
    </Modal>
  );
};

export default ErrorMessage;
