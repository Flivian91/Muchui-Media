import React from "react";
import { BiEdit, BiTrash } from "react-icons/bi";

function FAQAdminItems() {
  return (
    <div className="flex items-center shadow bg-surface px-2 py-1">
      <div className="flex-1 flex flex-col gap-1">
        <div className="flex items-center gap-3 border-b py-1">
          <span className="font-mono font-bold text-base md:text-xl">Qn.1</span>
          <h1 className="font-bold text-base md:text-xl text-text">
            Lorem ipsum dolor sit amet.
          </h1>
        </div>
        <h3 className="md:pl-12 text-sm sm:text-base text-text-secondary py-1 leading-5 tracking-wide text-wrap">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
          doloremque.
        </h3>
      </div>
      <div className="flex space-x-2 transition-all duration-200  border-l px-1 h-full md:px-3">
        <button title="edit" className="text-secondary hover:text-secondary/80">
          <BiEdit className="h-5 w-5" />
        </button>
        <button title="delete" className="text-red-500 hover:text-red-700">
          <BiTrash className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default FAQAdminItems;
