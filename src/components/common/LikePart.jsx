import React, { useState } from "react";
import { HiOutlineHeart } from "react-icons/hi";
import { HiHeart } from "react-icons/hi2";

function LikePart() {
  const like = 86;
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="flex items-center gap-2 text-text font-semibold leading-6">
      <button
        onClick={() => setIsLiked((prev) => !prev)}
        className="transition-all duration-200 text-red-500 hover:text-red-500/80  mt-1"
      >
        {isLiked ? <HiHeart fontSize={25} /> : <HiOutlineHeart fontSize={25} />}
      </button>
      <span className="text-xt">{isLiked ? like + 1 : like}</span>
    </div>
  );
}

export default LikePart;
