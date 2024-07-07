import React from "react";

function IntroductionLabel({ children }) {
  return (
    <div className="flex items-center border-b border-text-secondary/60 px-4 py-2">
      <h3 className='uppercase text-2xl font-semibold text-text-secondary relative font-serif after:content-[""] after:w-[6px] after:h-[6px]  after:left-0 after:top-0 after:bottom-0 after:my-auto after:-ml-4 after:bg-accent after:absolute'>
        {children}
      </h3>
    </div>
  );
}

export default IntroductionLabel;
