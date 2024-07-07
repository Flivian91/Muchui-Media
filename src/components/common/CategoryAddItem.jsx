import React from "react";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";

function CategoryAddItem() {
  return (
    <li className="flex justify-between shadow-sm items-center bg-surface px-1 py-2 rounded">
      <span className="text-text font-semibold">Sport</span>
      <div className="flex items-center gap-3">
        <button className="text-secondary">
          <BiEdit fontSize={21} />
        </button>
        <button className="text-secondary">
          <MdDeleteOutline fontSize={21} />
        </button>
      </div>
    </li>
  );
}

export default CategoryAddItem;
