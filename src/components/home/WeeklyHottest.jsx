import React from "react";
import latest from "../../assets/images/img/latest.jpg";
import { Link } from "react-router-dom";
import ReadMoreButton from "../common/ReadMoreButton";
import LikePart from "../common/LikePart";
import CommentPart from "../common/CommentPart";
import WeeklyBlogs from "./WeeklyBlogs";
function WeeklyHottest() {
  return (
    <div className="bg-secondary/40 py-20 md:px-4 px-2">
      <div className="py-4">
        <h1 className="md:text-4xl text-2xl  font-bold text-text border-b-2 border-text-secondary py-2 tracking-wide">
          The Week`s Hottest
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className=" flex flex-col gap-10 shadow-lg  py-4 px-2">
          <div className="flex flex-col ">
            <img src={latest} alt="latest post image" />
          </div>
          <div className=" flex flex-col gap-4">
            <div>
              <button className="px-10 font-semibold text-white bg-primary rounded-full">
                Sport
              </button>
            </div>
            <Link className=" font-semibold  text-2xl md:text-4xl transition-all duration-200 text-text hover:text-primary">
              Lorem ipsum, dolor sit amet consectetur
            </Link>
            <div className="flex gap-10">
              <h3 className="uppercase font-semibold text-text ">
                September 1, 2023
              </h3>
              <Link
                to={"/"}
                className='uppercase font-semibold text-text relative font-serif after:content-[""] after:w-[6px] after:h-[6px] after:rounded-full after:left-0 after:top-0 after:bottom-0 after:my-auto after:-ml-4 after:bg-accent after:absolute'
              >
                By Flivian
              </Link>
            </div>
            <p className="text-sm md:text-lg font-medium text-text tracking-wide leading-7">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
              consectetur placeat molestias illo necessitatibus dolorum.
            </p>
            <div className="flex justify-between items-center mt-5 px-2  pl-8 py-2">
              <ReadMoreButton />
              <div className="flex items-center gap-5 ">
                <LikePart />
                <CommentPart />
              </div>
            </div>
          </div>
        </div>
        <div className="py-4 flex flex-col gap-4">
          <WeeklyBlogs/>
          <WeeklyBlogs/>
          <WeeklyBlogs/>

        </div>
      </div>
    </div>
  );
}

export default WeeklyHottest;
