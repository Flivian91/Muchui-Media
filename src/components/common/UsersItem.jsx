import React from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

function UsersItem({ user }) {
  return (
    <div className=" grid grid-cols-[0.6fr_0.8fr_1.8fr_0.2fr] gap-2 items-center text-text/80 font-semibold justify-center px-4 py-1.5">
      <span className="text-sm md:text-base font-mono">{user.id}</span>
      <span className="text-sm md:text-base">{user.name.split(" ").at(0)}</span>
      <span className="text-sm md:text-base">{user.email}</span>
      {/* <div className="flex justify-end md:hidden">
        <button className="bg-background  text-text p-1 rounded ">
          <BsThreeDotsVertical fontSize={20} />
        </button>
      </div> */}
      <div className="flex space-x-2">
        <button title="edit" className="text-secondary hover:text-secondary/80">
          <BiEdit className="h-5 w-5" />
        </button>
        <button className="text-red-500 hover:text-red-700">
          <BiTrash className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default UsersItem;
