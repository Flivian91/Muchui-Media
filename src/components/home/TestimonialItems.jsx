import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import profile from "../../assets/images/img/image-2.jpg";
function TestimonialItems({ data }) {
  return (
    <div className="flex flex-col  shadow-md bg-surface rounded overflow-hidden ">
      <img src={profile} className="h-36 w-full" alt="client image 1" />
      <div className="relative py-[5px] bg-gray-400/50">
        <span className="p-2 rounded-full text-white absolute bg-secondary left-1/4 -top-4 transform -translate-x-1/2">
          <RiDoubleQuotesL fontSize={24} />
        </span>
      </div>
      <div className="py-6 px-4 flex flex-col ">
        <p className="py-2 text-base flex-grow font-semibold text-text leading-6 tracking-wide">
          {data.message}
        </p>
        <div className="py-3 mt-3">
          <h3 className="text-lg font-bold text-text">{data.name}</h3>
          <i className="text-text-secondary">{data.role}</i>
        </div>
      </div>
    </div>
  );
}

export default TestimonialItems;
