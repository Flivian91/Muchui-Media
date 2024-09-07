/* eslint-disable react/prop-types */
import image from "../../../assets/images/img/image-1.jpg";

import { BiCalendar, BiChat, BiEdit, BiLike, BiLink, BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";
function ClientPostsItems() {
  return (
    <div className="flex flex-col gap-2 bg-white py-3 px-2 shadow rounded group ">
      <div className="relative overflow-hidden">
        <img src={image} className="rounded-t-md" alt="post image" />
        <div className="flex px-2 items-center justify-between sm:justify-evenly absolute opacity-0 group-hover:opacity-100 transition-all duration-700 bottom-0 left-0 w-full py-2 backdrop-blur-[2px]">
          <Link
            to={`/articles/post-1`}
            title="Quick View"
            className="p-2 bg-surface rounded-full text-text hover:text-text/70 transition-all duration-200"
          >
            <BiLink className="w-5 h-5" />
          </Link>
          <button
            title="edit"
            className="p-2 bg-surface rounded-full text-secondary hover:text-secondary/70 transition-all duration-200"
          >
            <BiEdit className="w-5 h-5" />
          </button>
          <button
            title="delete"
            className="p-2 bg-surface rounded-full text-red-500 hover:text-red-500/70 transition-all duration-200"
          >
            <BiTrash className="w-5 h-5" />
          </button>
        </div>
      </div>
      <h1 className="text-base font-semibold text-wrap flex-grow leading-6 tracking-wide">
        This Is a Post
      </h1>
      <div className="flex items-center text-sm justify-between mt-1">
        <button
          title="views"
          className="flex items-center gap-1 text-text-secondary"
        >
          <BiLike className="w-5" />
          <span className="font-medium">3000</span>
        </button>
        <button
          title="comments"
          className="flex items-center gap-1 text-text-secondary"
        >
          <BiChat className="w-5 mt-[2px]" />
          <span className="font-medium">100</span>
        </button>
      </div>
      <div className="flex items-center justify-between gap-2 border-t pt-2">
        <div className="flex items-center gap-2">
          <BiCalendar/>
          <span className="text-sm font-bold text-text">12/03/2024</span>
        </div>
        <button
          title="edit"
          className="px-2 text-secondary hover:text-secondary/70 transition-all duration-200"
        >
          <BiEdit className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default ClientPostsItems;
