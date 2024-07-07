import React from "react";

function PageEditAboutPage() {
  return (
    <div>
      <div className="">
        <h1 className="md:text-4xl text-2xl  font-bold text-text border-b-2 border-text-secondary/30 py-2 tracking-wide">
          About Page
        </h1>
        <div className="border border-dashed border-text/80 rounded py-3 px-2">
          <div className="flex items-center flex-col gap-4">
            <h1 className="text-2xl font-semibold">About Me Section</h1>
            <form className="flex flex-col w-full items-center gap-5">
              <input
                className="text-sm outline-none w-full focus:ring-0 focus:outline-none border-dashed border-accent rounded"
                defaultValue={"About Sammy Muchui"}
              />
              <input
                className="text-sm outline-none w-full focus:ring-0 focus:outline-none border-dashed border-accent rounded"
                defaultValue={"Meet Sammy Muchui"}
              />

              <div className="grid grid-cols-1 md:grid-cols-2  gap-4 w-full">
                <div className="flex flex-col gap-4 w-full">
                  <label className="text-xl font-semibold" htmlFor="biography">
                    Biography Part
                  </label>
                  <textarea
                    cols={30}
                    id="biography"
                    rows={12}
                    className="text-sm outline-none w-full py-2 px-1  focus:ring-0 focus:outline-none border-dashed border-accent rounded"
                    defaultValue={`Sammy Muchui is a seasoned journalist with a keen eye for uncovering the truth. With years of experience in the field, Sammy has reported on some of the most pressing issues of our time, bringing light to stories that matter. His dedication to integrity and authenticity has earned him a reputation as a trusted voice in journalism.

Sammy holds a degree in Journalism from Muranga University and has worked with various renowned media outlets. His passion for storytelling is matched only by his commitment to ethical reporting.`}
                  ></textarea>
                </div>
                <div className="flex flex-col gap-4 w-full">
                  <label className="text-xl font-semibold" htmlFor="mission">
                    Mission Statement
                  </label>
                  <textarea
                    cols={30}
                    id="mission"
                    rows={12}
                    className="text-sm outline-none w-full py-2 px-1  focus:ring-0 focus:outline-none border-dashed border-accent rounded"
                    defaultValue={`At Muchui Media, our mission is to deliver insightful, accurate, and impactful journalism. We strive to be a beacon of truth in an age of misinformation, providing our audience with stories that inspire, inform, and provoke thoughtful discussion.

We believe in the power of journalism to effect change and hold those in power accountable. Our commitment to our readers is unwavering – we pledge to uphold the highest standards of journalistic integrity in everything we do.`}
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="px-6 bg-green-500 py-2 text-white font-semibold rounded"
              >
                Update Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageEditAboutPage;
