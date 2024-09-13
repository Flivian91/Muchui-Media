import { useEffect, useState } from "react";
import AddTestimonialModel from "../../common/AddTestimonialModel";
import LoadingSpinner from "../../common/LoadingSpinner";
import TestimonialsItems from "../../common/TestimonialsItems";
import { supabase } from "../../../supabase/supabaseClient";
// import CreatePost from "../../common/CreatePost";
// import { BiPlusCircle } from "react-icons/bi";

function Testimonials() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [testimonials, setTestimonials] = useState([]);

  // Fetch testimonials
  async function fetchTestimonials() {
    try {
      setIsLoading(true);
      const { data, error } = await supabase.from("Testimonials").select("*");
      if (error) {
        console.log(error.message);
      }
      setTestimonials(data || []);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(function () {
    fetchTestimonials();
  }, []);

  // Function to insert new Item on the testimonial
  async function createNewTestimonial(data) {
    const { error } = await supabase.from("Testimonials").insert(data);
    if (error) {
      console.log(error.message);
    }
    fetchTestimonials();
  }

  function handleTestimonials(record) {
    createNewTestimonial(record);
  }

  // Funciton delete functionality
  async function deleteTestimonial(id, image, type) {
    const imageFile = image.split("/").slice(-2).join("/");
    const img = `${imageFile}.${type.split("/").slice(-1).join("")}`;
    console.log(img);
    // Delete the Image also on the Storage
    const { error: deleteError } = await supabase.storage
      .from("image_url")
      .remove(img);
    if (deleteError) {
      console.log(deleteError.message);
    }
    const { error } = await supabase.from("Testimonials").delete().eq("id", id);
    if (error) {
      console.log(error.message);
    }
    fetchTestimonials();
  }
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Testimonials</h1>
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search testimonial..."
          className="p-2 border border-secondary w-28 md:w-40 focus:w-44 transition-all duration-300 text-sm sm:text-base focus:border-secondary rounded outline-none focus:outline-none focus:ring-0"
        />
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-secondary text-white p-2 sm:px-6 px-3 font-semibold rounded"
        >
          Add Testimonial
        </button>
        <AddTestimonialModel
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          onSubmit={handleTestimonials}
        />
      </div>
      <div className="min-w-full bg-white">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <div className=" grid grid-cols-[0.4fr_0.4fr_0.8fr_1.8fr_0.2fr] items-center w-full justify-center border-b md:px-4 px-2  py-3 font-bold text-base text-text">
              <span>Image</span>
              <span>Name</span>
              <span>Roles</span>
              <span>Content</span>
              <span>Actions</span>
            </div>
            <div>
              {testimonials.length === 0 ? (
                <div className="flex items-center justify-center py-10">
                  <p className="text-text font-bold text-xl">
                    No record 😪😪☠️
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  {testimonials.map((testimonial) => (
                    <TestimonialsItems
                      key={testimonial.id}
                      testimonial={testimonial}
                      onDelete={deleteTestimonial}
                    />
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Testimonials;
