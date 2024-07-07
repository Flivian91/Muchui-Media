import React, { useState } from "react";
import { IoCreateOutline } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
import advert from "../../assets/images/img/img.png";
import { FaBookmark } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import SharePost from "./SharePost";
import CommentSection from "./CommentSection";

function PostSection() {
  const [isBookmarked, setIsBookmarked] = useState(false);
  return (
    <div>
      <div className="shadow-md px-2 py-3 bg-terLight dark:bg-slate-800">
        <div className=" flex flex-col gap-2">
          <div className="flex items-center justify-end">
            <div className="animate-pulse text-lg md:text-2xl text-green-600">
              <GoDotFill />
            </div>
            <h3 className="font-bold text-base text-gray-700 dark:text-gray-300">
              2 min
            </h3>
          </div>
          <img
            src={advert}
            className="w-full h-[450px]"
            alt={`Image Posted by image`}
          />
          <div className="flex gap-1 md:gap-2 items-center px-2 py-2 justify-between">
            <div className="flex items-center gap-2">
              <p className="flex items-center gap-2 text-base md:text-xl text-gray-700 dark:text-gray-300">
                <IoCreateOutline />{" "}
                <span className="font-bold text-base md:text-xl text-accent dark:text-gray-300">
                  Admin
                </span>{" "}
              </p>
              <span className="dark:text-gray-300">|</span>
              <p className="flex items-center gap-2 text-base md:text-xl text-gray-700 dark:text-gray-300">
                <MdDateRange />{" "}
                <span className="font-bold text-sm md:text-xl text-accent dark:text-gray-300">
                  November 1, 2023
                </span>{" "}
              </p>
            </div>
            <div>
              <button
                onClick={() => setIsBookmarked((prev) => !prev)}
                className="py-2 px-3 hover:bg-gray-400/20 rounded text-base md:text-2xl text-pink-600 dark:text-gray-300"
              >
                {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-2 px-2 md:px-5 py-5 bg-accent/20 dark:bg-slate-700 rounded-sm md:rounded-md shadow-md">
            <Link
              to={`/blog-news`}
              className="px-2 py-1 text-sm border border-indigo-600/30 dark:border-gray-200 dark:text-gray-200 rounded-full truncate text-indigo-700 hover:border-indigo-600 transition-all duration-200 hover:text-indigo-700 "
            >
              Sport
            </Link>
          </div>
          <h1 className="text-wrap py-2 font-bold text-gray-700 dark:text-gray-200 tracking-wide leading-8 text-xl md:text-3xl">
            Lorem ipsum dolor sit amet.
          </h1>
          <p className="leading-7 tracking-wide font-semibold py-3 dark:text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit,
            tempora molestiae maiores voluptatibus laudantium et nobis ipsam
            dolorum omnis odio beatae corrupti repellendus debitis, sunt autem
            iusto nam earum, provident non temporibus voluptas. Minima,
            perferendis doloremque qui earum possimus culpa natus molestiae
            cumque dolores reiciendis consectetur atque eveniet delectus
            voluptas mollitia amet, hic eaque nisi commodi. Esse eos eveniet
            repellendus rem nemo quisquam, numquam at vitae a quasi expedita
            unde itaque voluptates enim omnis quod eligendi ullam veniam hic ab.
            Quos nisi suscipit placeat, nostrum repellendus debitis
            necessitatibus! Iste quia mollitia veniam. Quasi obcaecati,
            dignissimos quas nihil accusamus assumenda perferendis magnam illum
            sed! Est inventore debitis corporis ratione vero provident
            reiciendis quaerat dignissimos! Aut dicta quasi labore laboriosam
            blanditiis nisi aliquid quia dolore excepturi animi! Recusandae,
            numquam? Iusto vero numquam quam nihil quae provident. Nulla nam
            sint voluptatem repellat, enim harum ad iusto laboriosam soluta
            accusamus doloremque temporibus tempore cumque velit tempora
            consequatur ut molestias autem voluptas corrupti architecto quisquam
            laudantium facilis expedita! Beatae labore consectetur, numquam
            omnis itaque saepe maxime illum temporibus vitae ducimus at quod
            magni explicabo obcaecati architecto earum natus modi sequi fugiat
            ab vel corrupti? Totam facilis, ipsa tempore quaerat blanditiis vero
            fugiat possimus recusandae voluptatibus.
          </p>
          <div className="py-5">
            <SharePost />
          </div>
          <div>
            <CommentSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostSection;
