/* eslint-disable react/prop-types */
import profile from "../../assets/images/img/profile-2.jpg";
import { BsEye } from "react-icons/bs";
import { BiChat, BiEdit, BiLink, BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";
function PostsItems({ post, onUpdate, onDelete }) {
  return (
    <div className="flex flex-col gap-2 bg-white py-3 px-2 shadow rounded group ">
      <div className="relative overflow-hidden">
        <img
          src={post.image_url}
          className="rounded-t-md h-[145px] w-full"
          alt="post image"
        />
        <div className="flex px-2 items-center justify-between sm:justify-evenly absolute opacity-0 group-hover:opacity-100 transition-all duration-700 bottom-0 left-0 w-full py-2 backdrop-blur-[2px]">
          <Link
            to={`/articles/post-${post.id}`}
            title="Quick View"
            className="p-2 bg-surface rounded-full text-text hover:text-text/70 transition-all duration-200"
          >
            <BiLink className="w-5 h-5" />
          </Link>
          <button
            title="edit"
            className="p-2 bg-surface rounded-full text-secondary hover:text-secondary/70 transition-all duration-200"
          >
            <BiEdit onClick={() => onUpdate(post.id)} className="w-5 h-5" />
          </button>
          <button
            onClick={() => onDelete(post.id)}
            title="delete"
            className="p-2 bg-surface rounded-full text-red-500 hover:text-red-500/70 transition-all duration-200"
          >
            <BiTrash className="w-5 h-5" />
          </button>
        </div>
      </div>
      <h1 className="text-base font-semibold text-wrap flex-grow leading-6 tracking-wide">
        {post.title}
      </h1>
      <div className="flex items-center text-sm justify-between mt-1">
        <button
          title="views"
          className="flex items-center gap-1 text-text-secondary"
        >
          <BsEye className="w-5" />
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
          <img src={profile} className="w-6 h-6 rounded-sm" alt="" />
          <span className="text-sm font-bold text-text">{post.author}</span>
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

export default PostsItems;
