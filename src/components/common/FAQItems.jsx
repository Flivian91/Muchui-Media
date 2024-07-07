import React, { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

function FAQItems() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative w-full">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-between px-2 py-3  bg-text-secondary/20 cursor-pointer"
      >
        <div className="flex gap-3 text-base sm:text-lg font-semibold text-text">
          <span>Q1.</span>
          <h2>Lorem ipsum dolor sit amet consectetur.</h2>
        </div>
        <button className="p-1 hover:bg-text-secondary/30 transition-all duration-300 hover:text-primary rounded-full">
          {isOpen ? <BiMinus fontSize={22} /> : <BiPlus fontSize={22} />}
        </button>
      </div>
      {isOpen && (
        <div className="px-4 py-2 ">
          <p className="font-semibold text-sm text-text text-wrap">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam,
            enim. lorem
          </p>
        </div>
      )}
    </div>
  );
}

export default FAQItems;
