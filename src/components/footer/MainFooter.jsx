import React from "react";
import { Link } from "react-router-dom";

function MainFooter() {
  return (
    <ul className="flex gap-6 justify-center py-5 px-4 flex-wrap">
      <li className="nav-links">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-links">
        <Link to="/about">About us</Link>
      </li>
      <li className="nav-links">
        <Link to="/articles">Articles</Link>
      </li>
      <li className="nav-links">
        <Link to="/categories">Categories</Link>
      </li>
      <li className="nav-links">
        <Link to="/contact">Contact</Link>
      </li>
      <li className="nav-links">
        <Link to="#faqs">FAQ`s</Link>
      </li>
    </ul>
  );
}

export default MainFooter;
