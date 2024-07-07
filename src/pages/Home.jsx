import React, { useEffect, useState } from "react";
import FeaturedArticleSection from "../components/home/FeaturedArticleSection";
import LatestNews from "../components/home/LatestNews";
import WeeklyHottest from "../components/home/WeeklyHottest";
import MoreReading from "../components/home/MoreReading";
import FAQ from "../components/home/FAQ";
import Testimonials from "../components/home/Testimonials";
import AsideSection from "../components/home/AsideSection";
import { articles } from "../data/article";
const numPosts = articles.filter((item) => item.id > 1 && item.id <= 5);

function Home() {
  const [index, setIndex] = useState(0);
  useEffect(
    function () {
      let timer = setTimeout(() => {
        setIndex((prev) => (prev === numPosts.length - 1 ? 0 : prev + 1));
      }, 10000);
      return () => clearTimeout(timer);
    },
    [index]
  );
  const article = numPosts[index];
  return (
    <main className="flex flex-col md:gap-16">
      <FeaturedArticleSection
        data={article}
        index={index}
        setIndex={setIndex}
        numPosts={numPosts}
      />
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-10 md:py-10  md:mt-0  px-2">
        <div className="flex flex-col gap-10 md:gap-96 xl:gap-56 md:mt-5">
          <LatestNews />
          <LatestNews />
          <LatestNews />
        </div>
        <AsideSection />
      </div>
      <WeeklyHottest />
      <MoreReading />
      <Testimonials />
      <FAQ />
    </main>
  );
}

export default Home;
