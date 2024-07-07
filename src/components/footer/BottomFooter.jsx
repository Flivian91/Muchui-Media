import React from "react";
import SocialMediaIcons from "../common/SocialMediaIcons";
import { Link } from "react-router-dom";

function BottomFooter() {
  return (
    <div className="flex items-center flex-wrap gap-4 justify-between py-4 border-t border-gray-400/30 md:px-5">
      <div className="flex gap-2">
        <span className="font-semibold text-sm up">Follow Us On: </span>
      <SocialMediaIcons />
      </div>
      <p className="text-base font-semibold tracking-wide text-text-secondary">
        &copy; 2024, <Link to={'/'} className="text-text/70 hover:text-secondary transition-all duration-300">Muchui Media</Link>
      </p>
      <div className="flex items-center gap-5">
        <Link to={'privacy-policy'} className="font-bold text-text-secondary hover:text-text transition-all duration-300">Terms & Conditions</Link>
      </div>
    </div>
  );
}

export default BottomFooter;
