import React from "react";
import latest from "../../assets/images/img/latest.jpg";
import { Link } from "react-router-dom";
import ReadMoreButton from "../common/ReadMoreButton";
import LikePart from "../common/LikePart";
import CommentPart from "../common/CommentPart";
function LatestNews() {
  return (
    <div className="md:relative flex flex-col gap-10 shadow md:shadow-none py-6 md:py-1 px-4 ">
      <div className="flex flex-col ">
        <img src={latest} alt="latest post image" />
      </div>
      <div className="md:absolute bg-surface md:top-1/2  transform md:py-14 md:shadow md:rounded md:px-4 lg:px-10 md:left-0 md:right-0 mx-auto md:w-11/12 lg:w-3/4 flex flex-col gap-4">
        <div>
          <button className="px-10 font-semibold text-white bg-accent rounded-full">
            Sport
          </button>
        </div>
        <Link className=" font-semibold  text-2xl md:text-4xl transition-all duration-200 text-text hover:text-primary">
          Lorem ipsum, dolor sit amet consectetur
        </Link>
        <div className="flex gap-10">
          <h3 className="uppercase font-semibold text-text-secondary ">
            September 1, 2023
          </h3>
          <Link to={'/'} className='uppercase font-semibold text-text-secondary relative font-serif after:content-[""] after:w-[6px] after:h-[6px] after:rounded-full after:left-0 after:top-0 after:bottom-0 after:my-auto after:-ml-4 after:bg-accent after:absolute'>
            By Flivian
          </Link>
        </div>
        <p className="text-sm md:text-lg font-medium text-text-secondary tracking-wide leading-7">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
          consectetur placeat molestias illo necessitatibus dolorum.
        </p>
        <div className="flex justify-between items-center mt-5 px-2 border-b border-text-secondary/60 pl-8 py-2">
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

export default LatestNews;
