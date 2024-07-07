import React from "react";
import ReadMoreButton from "../common/ReadMoreButton";
import LikePart from "../common/LikePart";
import CommentPart from "../common/CommentPart";
import { Link } from "react-router-dom";
import latest from "../../assets/images/img/latest.jpg";
function WeeklyBlogs() {
  return (
    <div className="flex gap-5 md:flex-row flex-col ">
      <img src={latest} className="md:w-44 md:h-44" alt="latest post image" />
      <div className="flex flex-col gap-3">
        <div>
          <button className="px-10 font-semibold text-white bg-primary rounded-full">
            Travel
          </button>
        </div>
        <div className="flex gap-10">
          <h3 className="uppercase font-semibold text-text ">
            September 1, 2023
          </h3>
          <Link
            to={"/"}
            className='uppercase font-semibold text-text relative font-serif after:content-[""] after:w-[6px] after:h-[6px] after:rounded-full after:left-0 after:top-0 after:bottom-0 after:my-auto after:-ml-4 after:bg-primary after:absolute'
          >
            By Flivian
          </Link>
        </div>
        <Link className=" font-semibold  text-2xl md:text-4xl transition-all duration-200 text-text hover:text-primary">
          Lorem ipsum, dolor sit amet consectetur
        </Link>
        <div className="flex justify-between items-center mt-5 px-2  pl-8 py-2">
          <ReadMoreButton />
          <div className="flex items-center gap-5 ">
            <LikePart />
            <CommentPart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeeklyBlogs;
