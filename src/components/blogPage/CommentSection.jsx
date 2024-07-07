import React from "react";

function CommentSection() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center py-5">
        <h1 className="font-bold md:text-2xl text-gray-700 uppercase dark:text-gray-300">
          Leave a comment
        </h1>
      </div>
      <form className="flex flex-col gap-5">
        <div className="flex gap-1 sm:gap-2">
          <div className="flex flex-col gap-2 w-full">
            <label
              className="font-semibold text-center text-base md:text-lg text-gray-700 dark:text-gray-400"
              htmlFor="name"
            >
              Your Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name..."
              className="w-full rounded shadow border border-gray-500"
              required
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label
              className="font-semibold text-center text-base md:text-lg text-gray-700 dark:text-gray-400"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter email..."
              className="w-full rounded shadow border border-gray-500"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            className="font-semibold text-base md:text-lg text-gray-700 dark:text-gray-400"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            required
            placeholder="Type comment here..."
            className="w-full rounded shadow border border-gray-500"
          />
        </div>
        <div className="flex flex-col gap-2 w-full py-5">
          <button
            role="button"
            id="name"
            type="submit"
            className="w-full rounded shadow border dark:border-none bg-indigo-600 text-white font-bold text-base md:text-xl py-2 border-gray-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CommentSection;
