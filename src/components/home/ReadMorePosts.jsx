import React from "react";
import { Link } from "react-router-dom";
import ReadMoreButton from "../common/ReadMoreButton";
import LikePart from "../common/LikePart";
import CommentPart from "../common/CommentPart";
import latest from "../../assets/images/img/latest.jpg";

function ReadMorePosts({post}) {
  return (
    <div className="flex flex-col gap-4 px-2 py-4 shadow-lg rounded-md">
      <img src={latest} alt="latest post image" />
      <div>
        {/* Category */}
        <button className="px-10 font-semibold text-white bg-primary rounded-full">
          {post.category}
        </button>
      </div>
      {/* Heading */}
      <Link to={`articles/post-${post.id}`} className=" font-semibold  text-2xl md:text-3xl tracking-wide transition-all duration-200 text-text hover:text-primary">
        {post.title}
      </Link>
      <div className="flex gap-10">
        {/* Date posted */}
        <h3 className="uppercase font-semibold text-text ">
          {post.date}
        </h3>
        {/* Author of the post */}
        <Link
          to={"/"}
          className='uppercase font-semibold text-text relative font-serif after:content-[""] after:w-[6px] after:h-[6px] after:rounded-full after:left-0 after:top-0 after:bottom-0 after:my-auto after:-ml-4 after:bg-accent after:absolute'
        >
          {post.author}
        </Link>
      </div>
      {/* Content of the post */}
      <p className="text-sm md:text-lg font-medium flex-grow text-text tracking-wide leading-7">
        {post.content}
      </p>
      <div className="flex justify-between items-center mt-5 px-2  pl-8 py-2">
        <ReadMoreButton />
        <div className="flex items-center gap-5 ">
          <LikePart />
          <CommentPart />
        </div>
      </div>
    </div>
  );
}

export default ReadMorePosts;
