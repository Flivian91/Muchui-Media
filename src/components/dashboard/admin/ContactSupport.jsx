// src/components/ContactSupport.js
import React from 'react';

const ContactSupport = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Contact Support</h1>
      <form className="bg-white p-4 rounded shadow">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input type="text" className="p-2 border rounded w-full" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" className="p-2 border rounded w-full" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea className="p-2 border rounded w-full"></textarea>
        </div>
        <button className="bg-blue-500 text-white p-2 rounded">Send Message</button>
      </form>
    </div>
  );
};

export default ContactSupport;
