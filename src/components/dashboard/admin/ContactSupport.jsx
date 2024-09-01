// src/components/ContactSupport.js
// import React from 'react';

const ContactSupport = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-4">
      <h1 className="sm:text-2xl text-xl font-bold tracking-wide ">
        Contact Support
      </h1>
      <form className="bg-white p-4 rounded flex flex-col gap-4 shadow w-full sm:w-3/4">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input type="text" required className="p-2 border rounded w-full" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" required className="p-2 border rounded w-full" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea required className="p-2 border rounded w-full"></textarea>
        </div>
        <button className="bg-blue-500 text-white p-2 rounded">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactSupport;
