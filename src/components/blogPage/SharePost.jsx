import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaPinterest, FaSquareXTwitter } from "react-icons/fa6";
import { IoMdShare } from "react-icons/io";
import { Link } from "react-router-dom";
import SocialMediaIcons from "../common/SocialMediaIcons";

function SharePost() {
  return (
    <div className="flex items-center justify-between border-y border-gray-400/60 py-2">
      <div className="flex items-center text-gray-600 dark:text-gray-300 gap-3">
        <IoMdShare className="text-xl" />
        <h3 className="text-lg  font-bold leading-7 dark:text-gray-300">
          Share on:
        </h3>
      </div>
      <div className="flex items-center">
        <Link className="py-2 px-2 hover:bg-gray-400/20 rounded text-xl md:text-2xl text-accent">
          <FaFacebookSquare />
        </Link>
        <Link className="py-2 px-2 hover:bg-gray-400/20 rounded text-xl md:text-2xl text-accent">
          <FaSquareXTwitter />
        </Link>
        <Link className="py-2 px-2 hover:bg-gray-400/20 rounded text-xl md:text-2xl text-accent">
          <FaPinterest />
        </Link>
      </div>
    </div>
  );
}

export default SharePost;
