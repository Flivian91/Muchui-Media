import { BiSearch } from "react-icons/bi";

function ClientPostsSearchBar() {
  return (
    <div className="flex items-center border bg-surface rounded-[6px] px-2 py-1 gap-2">
      <button className="text-text/90 focus:border-none">
        <BiSearch fontSize={22} />
      </button>
      <input
        type="text"
        className="border-none w-full focus:border-none focus:ring-0 font-mono tracking-wide text-md placeholder:font-mono placeholder:text-text"
        placeholder="Search post by title"
      />
    </div>
  );
}

export default ClientPostsSearchBar;
