import React from "react";
import AboutAuthor from "../common/AboutAuthor";
import AsideCategories from "../common/AsideCategories";
import NewsLetter from "./NewsLetter";
import Advertisements from "./Advertisements";
import RecentAndPopularSection from "./RecentAndPopularSection";

function AsideSection() {
  return (
    <aside className="flex flex-col gap-20 sm:items-center md:items-start">
      <AboutAuthor />
      <AsideCategories />
      <Advertisements />
      <NewsLetter />
      <RecentAndPopularSection />
    </aside>
  );
}

export default AsideSection;
