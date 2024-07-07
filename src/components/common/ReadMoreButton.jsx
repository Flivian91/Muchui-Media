import React from "react";
import { Link } from "react-router-dom";

function ReadMoreButton({link=""}) {
  return (
    <Link to={link} className="text-sm text-text hover:text-pink-400 transition-all duration-200 relative after:absolute font-bold uppercase after:content-[''] after:w-5 after:h-[2px] after:bg-text-secondary after:left-0 after:top-0 after:bottom-0 after:-ml-8 after:my-auto">
      Read more
    </Link>
  );
}

export default ReadMoreButton;
