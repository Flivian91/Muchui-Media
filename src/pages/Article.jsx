import React from "react";
import PostSection from "../components/blogPage/PostSection";
import AsideSection from "../components/home/AsideSection";
import ReadMorePosts from "../components/home/ReadMorePosts";

function Article() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-10 md:py-10  md:mt-0  px-2">
      <div className="flex flex-col gap-5">
        <PostSection />
        <div className="pt-10 flex flex-col gap-8">
          <h1 className="md:text-4xl text-2xl  font-bold text-text border-b-2 border-text-secondary py-2 tracking-wide">
            Related Posts
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2  gap-10">
            <ReadMorePosts />
            <ReadMorePosts />
          </div>
        </div>
      </div>
      <AsideSection />
    </div>
  );
}

export default Article;
