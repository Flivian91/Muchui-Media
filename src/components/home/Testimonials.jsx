import React from "react";
import TestimonialItems from "./TestimonialItems";
import { testimonials } from "../../data/testimonialsData";
function Testimonials() {
  return (
    <section className=" flex items-center md:justify-center">
      <div className="flex gap-6 flex-col px-2">
        <h1 className="md:text-4xl text-2xl  font-bold text-text border-b-2 border-text-secondary py-2 tracking-wide">
          Testiminals
        </h1>
        <div className="grid grid-cols-1  md:grid-cols-3 gap-10 px-20 py-5 w-full">
          {testimonials.map((data) => (
            <TestimonialItems key={data.id} data={data} />
          ))}
          
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
