import React, { useState } from "react";
import { useParams } from "react-router-dom";

import ArticleCard from "../components/ArticleCard";
import { articles } from "../data/article";

const Category = () => {
  const { category } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const filteredArticles = articles.filter(article => article.category.toLowerCase() === category.toLowerCase());

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredArticles.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">{category.at(0).toUpperCase()}{category.slice(1)} Articles</h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentPosts.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        {Array.from({ length: Math.ceil(filteredArticles.length / postsPerPage) }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 mx-1 rounded-full ${currentPage === index + 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category;
