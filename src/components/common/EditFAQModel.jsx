/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { useCloseModel } from "../../hooks/useCloseModel";
import { GiCancel } from "react-icons/gi";

// Ensure the modal root element is set for accessibility
Modal.setAppElement("#root");

const EditFAQModel = ({ isOpen, onRequestClose, onSubmit, data }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const ref = useCloseModel(onRequestClose);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question || answer) {
      onSubmit({ question, answer });
      setQuestion("");
      setAnswer("");
      onRequestClose();
    } else {
      alert("Question and Answer are required");
    }
  };
  useEffect(
    function () {
      setQuestion(data.question);
      setAnswer(data.answer);
    },
    [data]
  );

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
            <label htmlFor="question" className="text-base font-semibold">
              Question
            </label>
            <input
              type="text"
              name="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              id="question"
              className="border-gray-400/50 rounded-sm focus:ring-0 focus:outline-none focus:border-gray-400/50"
              required
            />
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="answer" className="text-base font-semibold">
              Answer
            </label>
            <textarea
              name="answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              id="answer"
              className="border-gray-400/50 rounded-sm focus:ring-0 focus:outline-none focus:border-gray-400/50"
              rows="3"
            ></textarea>
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

export default EditFAQModel;
