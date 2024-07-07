import React from "react";
import CategoryAddItem from "./CategoryAddItem";
import profile from "../../assets/images/img/profile.png";

function PageEditHomePage() {
  return (
    <div className="gap-3 flex flex-col">
      <h1 className="md:text-4xl text-2xl  font-bold text-text border-b-2 border-text-secondary/30 py-2 tracking-wide">
        Home Page
      </h1>
      <div className="border border-dashed border-text/80 rounded py-3 divide-y md:divide-x px-2 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex items-center flex-col gap-4">
          <h1 className="text-2xl font-semibold">About Me Section</h1>
          <form className="flex flex-col w-full items-center gap-5">
            <div className="space-y-2 flex flex-col items-center">
              <img className="w-32 h-32 rounded-full" src={profile} alt="" />
              <input
                type="file"
                className="file:bg-accent file:border-none file:outline-none"
              />
            </div>
            <input
              className="text-sm outline-none w-full focus:ring-0 focus:outline-none border-dashed border-accent rounded"
              defaultValue={"Muchui media"}
            />
            <textarea
              className="text-sm outline-none w-full focus:ring-0 focus:outline-none border-dashed border-accent rounded"
              defaultValue={
                "Journalist, Storyteller, and Passionate Advocate for Truth"
              }
            ></textarea>
            <button
              type="submit"
              className="px-6 bg-green-500 py-2 text-white font-semibold rounded"
            >
              Update Now
            </button>
          </form>
        </div>
        <div className="px-2">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-semibold">Add Category</h1>
            <form className="flex items-center py-2">
              <input
                type="text"
                placeholder="Enter category name..."
                required
                className="rounded-l border border-accent flex-grow focus:ring-0 outline-none focus:outline-none focus:border-accent/80"
              />
              <button className="px-5 py-2 bg-green-500 border text-white font-semibold border-transparent rounded-r">
                Add Category
              </button>
            </form>
            <ul className="px-3 pt-2 flex flex-col gap-2">
              <CategoryAddItem />
              <CategoryAddItem />
              <CategoryAddItem />
              <CategoryAddItem />
              <CategoryAddItem />
              <CategoryAddItem />
              {/*<CategoryAddItem/>
            <CategoryAddItem/> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageEditHomePage;
