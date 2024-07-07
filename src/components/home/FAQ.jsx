import React from "react";
import { BiMinus } from "react-icons/bi";
import FAQItems from "../common/FAQItems";

function FAQ() {
  return (
    <section id="faqs" className="flex items-center px-2 justify-center w-full bg-background">
      <div className="md:w-1/2 py-20 flex flex-col gap-6 w-full sm:items-center">
        <h1 className="text-xl font-bold text-text mb-6">
          Frequently Asked Questions (FAQs)
        </h1>
        <div className="w-full flex flex-col gap-5">
          <FAQItems />
          <FAQItems />
          <FAQItems />
        </div>
      </div>
    </section>
  );
}

export default FAQ;
