import React, { useState } from "react";
import AddTestimonialModel from "../../common/AddTestimonialModel";
// import CreatePost from "../../common/CreatePost";
// import { BiPlusCircle } from "react-icons/bi";

function Testimonials() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTestimonial = (user) => {
    console.log("New User:", user);
  };
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Testimonials</h1>
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search testimonial..."
          className="p-2 border border-secondary w-28 md:w-40 focus:w-44 transition-all duration-300 text-sm sm:text-base focus:border-secondary rounded outline-none focus:outline-none focus:ring-0"
        />
        <button onClick={()=> setIsModalOpen(true)} className="bg-secondary text-white p-2 sm:px-6 px-3 font-semibold rounded">
          Add Testimonial
        </button>
        <AddTestimonialModel
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          onSubmit={handleTestimonial}
          // users={users}
        />
      </div>
    </div>
  );
}

export default Testimonials;
