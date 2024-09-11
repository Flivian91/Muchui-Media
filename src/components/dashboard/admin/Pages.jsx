// src/components/Posts.js

import PageEditHomePage from "../../common/PageEditHomePage";
import PageEditAboutPage from "../../common/PageEditAboutPage";

const Pages = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Pages</h1>
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search page..."
          className="p-2 border border-secondary focus:border-secondary rounded outline-none focus:outline-none focus:ring-0"
        />
        <button
          disabled={true}
          className="bg-secondary disabled:cursor-not-allowed disabled:bg-gray-400 text-white p-2 px-6 font-semibold rounded"
        >
          Add Page
        </button>
      </div>
      <div className="flex flex-col gap-5">
        <PageEditHomePage />
        <PageEditAboutPage />
      </div>
    </div>
  );
};

export default Pages;
