import { useState } from "react";
import { BiSearch } from "react-icons/bi";

function AdminSearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (searchQuery === "") {
      setIsEmpty(true);
    } else {
      console.log(`Your search querry is: ${searchQuery}`);
      setSearchQuery("");
      setIsEmpty(false);
    }
  }
  return (
    <div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        autoComplete="off"
        className={`flex items-center bg-surface text-text md:pl-2 border border-transparent transition-all duration-300 rounded-md ${
          isEmpty ? " border border-red-600 " : " border-none"
        }"`}
      >
        <label
          htmlFor="input"
          className="sm:p-2 px-2 cursor-pointer md:p-0 flex items-center justify-center"
        >
          <BiSearch fontSize={23} />
        </label>
        <input
          id="input"
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          placeholder="Search here"
          className={`outline-none w-28 focus:w-full transition-all duration-300  md:block placeholder:text-text-secondary focus:outline-none border-none caret-accent focus:ring-0 focus:border-none `}
        />
        <button
          type="submit"
          className="px-4  hidden md:block font-mono  font-bold hover:text-text/80 transition-all duration-300"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default AdminSearchBar;
