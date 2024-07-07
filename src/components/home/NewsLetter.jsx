import React from "react";
import IntroductionLabel from "../common/IntroductionLabel";

function NewsLetter() {
  return (
    <div className="flex flex-col gap-5">
      <IntroductionLabel>NewsLetters</IntroductionLabel>
      <form className="flex flex-col gap-6 px-2 py-5 shadow-sm">
        <input
          required
          autoComplete="on"
          type="email"
          className="py-2 px-1 outline-none focus:outline-none border border-text-secondary/50 rounded"
          placeholder="Enter your email..."
        />
        <button className="text-sm font-bold text-text text-center py-2 bg-success rounded uppercase">
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default NewsLetter;
