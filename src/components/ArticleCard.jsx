import React from "react";
import { Link } from "react-router-dom";
import ReadMoreButton from "./common/ReadMoreButton";
import LikePart from "./common/LikePart";
import CommentPart from "./common/CommentPart";

const ArticleCard = ({ article }) => {
  return (
    <div className="flex flex-col gap-4 px-2 py-4 shadow-lg rounded-md">
      <img
        src={article.image}
        alt="post image"
        className="rounded-md h-[225px] w-full"
      />
      <div>
        <button className="px-10 font-semibold text-white bg-primary rounded-full">
          {article.category}
        </button>
      </div>
      <Link
        to={`articles/${article.id}`}
        className=" font-semibold  text-xl md:text-2xl tracking-wide transition-all duration-200 text-text hover:text-primary"
      >
        {article.title}
      </Link>
      <div className="flex gap-10">
        <h3 className="uppercase font-semibold text-text ">{article.date}</h3>
        <Link
          to={"/"}
          className=' font-semibold text-text relative font-serif after:content-[""] after:w-[6px] after:h-[6px] after:rounded-full after:left-0 after:top-0 after:bottom-0 after:my-auto after:-ml-4 after:bg-accent after:absolute'
        >
          {article.author}
        </Link>
      </div>
      <p className="text-sm md:text-lg flex-wrap flex-grow font-medium truncate text-text tracking-wide leading-7">
        {article.content}
      </p>
      <div className="flex justify-between items-center mt-5 px-2  pl-8 py-2">
        <ReadMoreButton link={`post-${article.id}`} />
        <div className="flex items-center gap-5 ">
          <LikePart />
          <CommentPart />
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
