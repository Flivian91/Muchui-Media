import React, { useState } from "react";
import FAQAdminItems from "../../common/FAQAdminItems";
import AddFAQModel from "../../common/AddFAQModel";

function FAQs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleAddRole = (query) => {
    console.log("New query:", query);
    // Add logic to handle the new role data (e.g., save to database)
  };
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">FAQ`s</h1>
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search faqs..."
          className="p-2 border border-secondary w-28 md:w-40 focus:w-44 transition-all duration-300 text-sm sm:text-base focus:border-secondary rounded outline-none focus:outline-none focus:ring-0"
        />
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-3 py-2  text-white  sm:text-base text-sm font-bold bg-secondary hover:bg-secondary/80 transition-all duration-200 rounded uppercase "
        >
          Add FAQ
        </button>
        <AddFAQModel
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          onSubmit={handleAddRole}
        />
      </div>
      <div>
        <div className="flex flex-col gap-4 md:px-5">
          <FAQAdminItems />
          <FAQAdminItems />
          <FAQAdminItems />
          <FAQAdminItems />
        </div>
      </div>
    </div>
  );
}

export default FAQs;
