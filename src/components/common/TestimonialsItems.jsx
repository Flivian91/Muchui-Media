/* eslint-disable react/prop-types */
import { BiEdit, BiTrash } from "react-icons/bi";
// import image from '../../../src/assets/images/img/latest.jpg'
function TestimonialsItems({ testimonial, onDelete }) {
  return (
    <div className=" grid grid-cols-[0.4fr_0.4fr_0.8fr_1.8fr_0.2fr]  text-sm sm:text-base items-center text-text/80 font-semibold justify-center px-2 sm:px-4 py-1.5">
      <img
        src={testimonial.image}
        className="w-10 h-6 rounded-sm shadow-sm"
        alt=""
      />
      <span>{testimonial.name}</span>
      <span>{testimonial.role}</span>
      <span className="truncate">{testimonial.content}</span>
      <div className="flex space-x-2 transition-all duration-200 ">
        {/* <button
          // onClick={() => onUpdate(role.id)}
          title="edit"
          className="text-secondary hover:text-secondary/80"
        >
          <BiEdit className="h-5 w-5" />
        </button> */}
        <button
          onClick={() =>
            onDelete(testimonial.id, testimonial.image, testimonial.image_type)
          }
          title="delete"
          className="text-red-500 hover:text-red-700"
        >
          <BiTrash className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default TestimonialsItems;
