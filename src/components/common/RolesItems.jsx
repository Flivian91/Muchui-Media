/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { BiEdit, BiTrash } from "react-icons/bi";

function RolesItems({ role, onUpdate, onDelete, users }) {
  const { username } = users.find((user) => user.id === role.user_id);
  return (
    <div className=" grid grid-cols-[1fr_0.8fr_1.8fr_0.3fr]  text-sm sm:text-base items-center text-text/80 font-semibold justify-center px-2 sm:px-4 py-1.5">
      <span>{username || "Admin"}</span>
      <span>{role.role}</span>
      <span className="truncate">{role.permissions}</span>
      <div className="flex space-x-2 transition-all duration-200 ">
        <button
          onClick={() => onUpdate(role.id)}
          title="edit"
          className="text-secondary hover:text-secondary/80"
        >
          <BiEdit className="h-5 w-5" />
        </button>
        <button
          onClick={() => onDelete(role.id)}
          title="delete"
          className="text-red-500 hover:text-red-700"
        >
          <BiTrash className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default RolesItems;
