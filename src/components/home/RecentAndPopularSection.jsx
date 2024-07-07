import React, { useState } from "react";
import { Link } from "react-router-dom";
import RecentPosts from "../common/RecentPosts";
function RecentAndPopularSection() {
  const [isActive, setIsActive] = useState(1);
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-4 justify-between border-b-2 border-b-text-secondary/40">
        <button
          onClick={() => setIsActive(1)}
          className={`${
            isActive === 1 ? "bg-text text-white" : ""
          } text-sm uppercase font-semibold tracking-wide py-3 px-8 `}
        >
          Popular
        </button>
        <button
          onClick={() => setIsActive(2)}
          className={`${
            isActive === 2 ? "bg-text text-white" : ""
          } text-sm uppercase font-semibold tracking-wide py-3 px-8 `}
        >
          Recent
        </button>
      </div>
      <div className="flex flex-col gap-3">
        <RecentPosts/>
        <RecentPosts/>
        <RecentPosts/>
        <RecentPosts/>
      </div>
    </div>
  );
}

export default RecentAndPopularSection;
