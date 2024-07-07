import React from "react";

function CallToAction() {
  return (
    <div className="py-8">
      <div className="flex items-center justify-center w-full">
        <div className="relative w-full md:w-4/5 h-[500px] shadow-xl rounded overflow-hidden">
          <img
            className="w-full object-cover h-full"
            src="https://demo.phlox.pro/blog-tech/wp-content/uploads/sites/286/2021/10/Newsletter.jpg"
            alt=""
          />
          <div className="absolute top-0 left-0 w-full md:w-1/2 h-full flex flex-col gap-4 py-6 px-5">
            <h1 className="font-extrabold text-4xl md:text-5xl text-gray-200 leading-[58px] tracking-wide">
              Get Muchui Media Newsletter
            </h1>
            <p className="font-bold text-base text-gray-300 leading-8 py-3">
              Stay informed and connected with Muchui Media. Subscribe to our
              newsletter, follow us on social media, and join the conversation.
              Together, we can make a difference through the power of informed,
              engaged citizenship.
            </p>
            <form className="flex flex-col gap-4 py-2 flex-grow">
              <div className="flex flex-col gap-2 w-full">
                <input
                  id="email"
                  type="email"
                  placeholder="Enter email..."
                  className="w-full rounded shadow border bg-transparent placeholder:text-gray-300 border-accent"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 w-full py-5">
                <input
                  role="button"
                  id="name"
                  type="submit"
                  className="w-full rounded shadow  bg-accent text-white font-bold text-xl py-2 border-gray-500"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
