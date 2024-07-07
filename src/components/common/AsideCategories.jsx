import React from "react";
import IntroductionLabel from "./IntroductionLabel";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

function AsideCategories() {
  return (
    <div className="flex flex-col gap-5 px-5">
      <IntroductionLabel>Categories</IntroductionLabel>
      <div>
        <ul className=" marker:text-text-secondary">
          <li className="py-2 list-disc ">
            <Link
              to={"categories/sport"}
              className="text-base border-b py-2  font-semibold uppercase flex items-center gap-3  px-2 hover:scale-105 transition-all duration-300 hover:bg-background transform hover:text-accent"
            >
              <IoIosArrowForward className="pt-1 text-accent" fontSize={22} />
              <span>Sport</span>
            </Link>
          </li>
          <li className="py-2 list-disc ">
            <Link
              to={"categories/technology"}
              className="text-base border-b py-2  font-semibold uppercase flex items-center gap-3  px-2 hover:scale-105 transition-all duration-300 hover:bg-background transform hover:text-accent"
            >
              <IoIosArrowForward className="pt-1 text-accent" fontSize={22} />
              <span>Technology</span>
            </Link>
          </li>
          <li className="py-2 list-disc ">
            <Link
              to={"categories/health"}
              className="text-base border-b py-2  font-semibold uppercase flex items-center gap-3  px-2 hover:scale-105 transition-all duration-300 hover:bg-background transform hover:text-accent"
            >
              <IoIosArrowForward className="pt-1 text-accent" fontSize={22} />
              <span>Health</span>
            </Link>
          </li>
          <li className="py-2 list-disc ">
            <Link
              to={"categories/science"}
              className="text-base border-b py-2  font-semibold uppercase flex items-center gap-3  px-2 hover:scale-105 transition-all duration-300 hover:bg-background transform hover:text-accent"
            >
              <IoIosArrowForward className="pt-1 text-accent" fontSize={22} />
              <span>Science</span>
            </Link>
          </li>
          <li className="py-2 list-disc ">
            <Link
              to={"categories/travel"}
              className="text-base border-b py-2  font-semibold uppercase flex items-center gap-3  px-2 hover:scale-105 transition-all duration-300 hover:bg-background transform hover:text-accent"
            >
              <IoIosArrowForward className="pt-1 text-accent" fontSize={22} />
              <span>Travel</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AsideCategories;
