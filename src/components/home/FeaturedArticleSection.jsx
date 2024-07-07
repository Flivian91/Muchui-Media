import React, { useState } from "react";
import image from "../../assets/images/img/image-1.jpg";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import ReadMoreButton from "../common/ReadMoreButton";
import { articles } from "../../data/article";

function FeaturedArticleSection({ data, index, setIndex, numPosts }) {
  const [isOpen, setIsOpen] = useState(false);
  // const data = articles.find((item) => item.id === 7);
  return (
    <div className="px-2 ">
      <div className="relative flex flex-col py-10 gap-10">
        <img
          className="md:w-11/12 md:h-screen"
          src={data.image}
          alt="Image on Hero-section"
        />
        <div className="md:absolute flex flex-col md:bottom-0 md:px-10 md:py-16 md:right-0 bg-surface md:w-1/2 md:h-1/2">
          <div className="flex gap-10 md:items-center md:flex-row flex-col">
            <div>
              <button className="px-10 font-semibold text-white bg-accent rounded-full">
                {data.category}
              </button>
            </div>
            <h3 className='uppercase font-semibold text-text-secondary relative font-serif after:content-[""] after:w-[6px] after:h-[6px] after:rounded-full after:left-0 after:top-0 after:bottom-0 after:my-auto after:-ml-4 after:bg-accent after:absolute'>
              {data.date}
            </h3>
          </div>
          <div className="flex flex-col gap-2 py-5">
            <Link className="truncate font-semibold text-2xl transition-all duration-200 text-text hover:text-primary">
              {data.title}
            </Link>
            <p className="text-sm font-medium text-text-secondary">
              {data.content.split(" ").slice(0, 15).join(" ") + "..."}
            </p>
          </div>
          <div className="mt-5 flex items-center justify-between">
            <div className=" relative">
              <Link className="text-text-secondary flex items-center gap-5">
                <button
                  onClick={() => setIsOpen((prev) => !prev)}
                  className="h-12 w-12 rounded-full bg-background flex items-center justify-center"
                >
                  <FaUser fontSize={25} />
                </button>
                <span className="font-medium text-sm">{data.author}</span>
              </Link>
              {isOpen && (
                <div className="absolute border overflow-hidden border-text-secondary/30 top-full left-0 bg-surface w-72 pb-4 rounded z-10 shadow">
                  <div className="w-full bg-accent h-8"></div>
                  <div className="relative">
                    <button className="h-12 w-12 absolute -top-3 rounded-full bg-background ml-4 flex items-center justify-center">
                      <FaUser fontSize={25} />
                    </button>
                    <span className="font-medium text-sm float-right mr-4 mt-2">
                      {data.author}
                    </span>
                  </div>
                  <div className="mt-14 flex flex-col gap-2 px-2">
                    <button className="w-full bg-blue-600 py-1 rounded text-white text-xl font-semibold">
                      Follow
                    </button>
                  </div>
                  <h3 className="px-2 text font-semibold py-2 text-text-secondary">
                    Lorem ipsum, dolor sit amet consectetur
                  </h3>
                  <div className="flex flex-col gap-1 px-2 pt-2">
                    <h3 className="text-sm uppercase font-bold text-text-secondary">
                      Join on
                    </h3>
                    <p>November 21, 2004</p>
                  </div>
                  <div className="flex flex-col gap-1 px-2 pt-2">
                    <h3 className="text-sm uppercase font-bold text-text-secondary">
                      Work
                    </h3>
                    <p>Mecca Tech</p>
                  </div>
                </div>
              )}
            </div>
            <div className="px-2 pt-4">
              <ReadMoreButton link={`articles/post-${data.id}`} />
            </div>
          </div>
        </div>
        <div className="flex items-center md:justify-start justify-center">
          <div className="flex gap-2 ">
            {Array.from({ length: numPosts.length }, (_, i) => {
              return (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`${
                    i === index ? " w-6 h-4 bg-accent " : "bg-stone-400 hover:bg-accent transition-all duration-300"
                  } w-4 h-4  rounded-full`}
                ></button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedArticleSection;
