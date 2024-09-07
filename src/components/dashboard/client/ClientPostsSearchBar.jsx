import { BiSearch } from "react-icons/bi";

function ClientPostsSearchBar() {
  return (
    <div className="flex items-center border bg-surface rounded-[6px] px-2 py-1 gap-2">
      <button className="text-text/90 focus:border-none">
        <BiSearch fontSize={22} />
      </button>
      <input
        type="text"
        className="border-none w-24 focus:w-32 transition-all duration-300 md:w-full outline-none focus:border-none focus:ring-0 font-mono tracking-wide text-md placeholder:font-mono placeholder:text-text"
        placeholder="Search post by title"
      />
    </div>
  );
}

export default ClientPostsSearchBar;
