import React from "react";
import { MdMenu } from "react-icons/md";

export default function Menu({onOpen}) {
  return (
    <button onClick={onOpen} className="md:hidden text-text hover:text-secondary text-xl p-1 border rounded border-text-secondary transition-all duration-300 hover:border-secondary">
      <MdMenu />
    </button>
  );
}
