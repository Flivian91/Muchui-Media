import React from "react";
import { BiSearch } from "react-icons/bi";

function AdminSearchBar() {
  return (
    <div>
      <form className="flex items-center bg-surface text-text md:pl-2 rounded-md">
        <label
          htmlFor="input"
          className="p-2 cursor-pointer md:p-0 flex items-center justify-center"
        >
          <BiSearch fontSize={23} />
        </label>
        <input
          id="input"
          type="text"
          placeholder="Search anything..."
          className="outline-none  hidden md:block placeholder:text-text-secondary focus:outline-none border-none caret-accent focus:ring-0 focus:border-none"
        />
        <button className="px-4  hidden md:block font-mono  font-bold hover:text-text/80 transition-all duration-300">
          Search
        </button>
      </form>
    </div>
  );
}

export default AdminSearchBar;
