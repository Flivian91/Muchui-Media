import React from "react";
import SocialMediaIcons from "../components/common/SocialMediaIcons";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen md:p-6 p-2">
      <div className="container mx-auto bg-white shadow-lg  overflow-hidden">
        <div
          className="bg-cover bg-center h-64"
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/1308052781/photo/hand-of-businessman-holding-mobile-smartphone-with-icon-customer-support-concept-copy-space.webp?b=1&s=170667a&w=0&k=20&c=_HnNnWXbu8CyaTdS3yYArJ_PZpBa6QBmuVV_lI2TWGM=')",
          }}
        >
          <div className="flex justify-center items-center h-full bg-black bg-opacity-50">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold">
              Contact Muchui Media
            </h1>
          </div>
        </div>
        <div className="p-6 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold mb-4 text-text">
              Get in Touch
            </h2>
            <p className="text-lg text-text-secondary">
              We'd love to hear from you. Feel free to reach out to us with any
              questions or feedback.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-semibold mb-4">
                Contact Information
              </h3>
              <ul className="text-base leading-7 mb-6 flex flex-col gap-3 flex-grow">
                <li className="py-2 px-3 space-x-1 rounded border sm:w-3/4 border-accent">
                  <strong className="text-xl text-text">Email:</strong>{" "}
                  <Link
                    className="text-text font-semibold text-lg"
                    to={"mailto:muchuimedia@gmail.com"}
                  >
                    muchuimedia@gmial.com
                  </Link>
                </li>
                <li className="py-2 px-3 space-x-1 rounded border sm:w-3/4 border-accent">
                  <strong className="text-xl text-text">Phone:</strong>{" "}
                  <Link
                    className="text-text font-semibold text-lg"
                    to={"tel:+254717518356"}
                  >
                    +2547 17 518356
                  </Link>
                </li>
                <li className="py-2 px-3 space-x-1 rounded border sm:w-3/4 border-accent">
                  <strong className="text-xl text-text">Address:</strong>{" "}
                  <Link
                    className="text-text font-semibold text-lg"
                    to={"mailto:muchuimedia@gmail.com"}
                  >
                    Nairobi, Kenya
                  </Link>
                </li>
              </ul>

              <div className="flex gap-5 items-center">
                <h3 className="text-2xl font-semibold ">Follow Us On:</h3>
                <SocialMediaIcons />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Send Us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-600"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-md transition transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Our Location
            </h3>
            <div className="h-64 w-full bg-gray-200">
              {/* Embed a map using an iframe or a map component */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0947639084015!2d-122.4012555846797!3d37.79325617975661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f0f6bb5d%3A0x84efc3ef8903c2db!2sSalesforce%20Tower!5e0!3m2!1sen!2sus!4v1615922681751!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
