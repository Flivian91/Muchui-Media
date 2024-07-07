import React from "react";
import IntroductionLabel from "./IntroductionLabel";
import profile from "../../assets/images/img/profile.png";
import { Link } from "react-router-dom";
function AboutAuthor() {
  return (
    <Link to={'/about'} className=" flex flex-col gap-4 sm:w-4/5 md:w-full">
      <IntroductionLabel>About Me</IntroductionLabel>
      <div className="shadow px-4 py-8 flex flex-col items-center gap-8">
        <img
          className="rounded-full"
          src={profile}
          alt="Muchui media profile Image"
        />
        <h1 className="text-xl font-bold uppercase">Muchui Media</h1>
        <p className="text-center text-lg text-text-secondary font-medium leading-6 tracking-wide">
          Journalist, Storyteller, and Passionate Advocate for Truth
        </p>
      </div>
    </Link>
  );
}

export default AboutAuthor;
