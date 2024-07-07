import React from "react";
import { Link } from "react-router-dom";
import { articles } from "../../data/article";
import ReadMorePosts from "./ReadMorePosts";
const numPosts = articles.filter((post) => post.id < 7);
function MoreReading() {
  return (
    <div className="py-10 md:px-4 px-2">
      <div className="py-4 flex flex-col gap-10">
        <h1 className="md:text-4xl text-2xl  font-bold text-text border-b-2 border-text-secondary py-2 tracking-wide">
          More Reading
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10">
          {numPosts.map((post) => (
            <ReadMorePosts key={post.id} post={post} />
          ))}
        </div>
        <div className="py-6 flex items-center justify-center">
          <Link
            to={"articles"}
            className="py-2 px-10 bg-accent rounded-full text-base font-bold text-white hover:bg-accent/80 transition-all duration-300"
          >
            Expore All
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MoreReading;
