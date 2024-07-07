import React from "react";
import { BiCheckCircle } from "react-icons/bi";
import { FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import image from "../../assets/images/img/image-2.jpg";

function NotificationDropDownItems() {
  return (
    <Link
      to={""}
      className="flex items-center gap-2 hover:bg-background hover:shadow-sm py-1 px-1 rounded"
    >
      <img src={image} alt="" className="w-10 h-10 rounded-full " />
      <div className="flex-1 flex flex-col text-sm">
        <h1 className="truncate font-bold text-text/80 tracking-wide">
          Lorem ipsum dolor sit
        </h1>
        <div className="text-text-secondary font-semibold flex gap-1 items-center">
          <FaClock />
          <span>10 min ago</span>
        </div>
      </div>
      <button title="edit" className="text-green-500 hover:text-green-700">
        <BiCheckCircle className="h-5 w-5" />
      </button>
    </Link>
  );
}

export default NotificationDropDownItems;
