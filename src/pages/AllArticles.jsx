import React, { useState } from "react";
// import ArticleCard from "../components/ArticleCard";
// import { articles } from "../data/articles";
import ArticleCard from "../components/ArticleCard";
import { articles } from "../data/article";

const AllArticles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page on category change
  };

  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredArticles.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Articles</h1>
        <div className="mt-4">
          <button
            onClick={() => handleCategoryChange("All")}
            className="px-4 py-2 bg-primary text-white rounded-full mx-2"
          >
            All
          </button>
          <button
            onClick={() => handleCategoryChange("Sport")}
            className="px-4 py-2 bg-primary text-white rounded-full mx-2"
          >
            Sport
          </button>
          <button
            onClick={() => handleCategoryChange("Technology")}
            className="px-4 py-2 bg-primary text-white rounded-full mx-2"
          >
            Technology
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentPosts.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      <div className="flex justify-center mt-8 py-10">
        {Array.from(
          { length: Math.ceil(filteredArticles.length / postsPerPage) },
          (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 mx-1 rounded-full ${
                currentPage === index + 1
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default AllArticles;
