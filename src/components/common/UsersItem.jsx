/* eslint-disable react/prop-types */
import { BiEdit, BiTrash } from "react-icons/bi";

function UsersItem({ user, onUpdate, onDelete, index }) {
  return (
    <div className=" grid grid-cols-[0.6fr_0.8fr_1.8fr_0.2fr] gap-2 items-center text-text/80 font-semibold justify-center px-4 py-1.5">
      <span className="text-sm md:text-base font-mono">
        {index + 1}
      </span>
      <span className="text-sm md:text-base">{user.username}</span>
      <span className="text-sm md:text-base">{user.email}</span>
      <div className="flex space-x-2">
        <button
          onClick={() => onUpdate(user.id)}
          title="edit"
          className="text-secondary hover:text-secondary/80"
        >
          <BiEdit className="h-5 w-5" />
        </button>
        <button
          onClick={() => onDelete(user.id)}
          className="text-red-500 hover:text-red-700"
        >
          <BiTrash className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default UsersItem;
