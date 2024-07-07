import React from "react";
import { Link } from "react-router-dom";
import profile from "../../assets/images/img/profile-2.jpg";
function RecentPosts() {
  return (
    <Link className="flex items-start gap-2 border-b py-1 border-transparent hover:border-accent/30 transition-all duration-200">
      <img className="rounded-full w-24 h-24" src={profile} alt="" />
      <div className="flex flex-col gap-3">
        <h1 className="text-xl font-bold text-text/80">
          Lorem, ipsum dolor sit amet.
        </h1>
        <p className="text-sm font-semibold text-text-secondary font-serif">
          September 1, 2023
        </p>
      </div>
    </Link>
  );
}

export default RecentPosts;
