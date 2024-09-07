import { BsSearch } from "react-icons/bs";

function ClientSearchBar() {
  return (
    <div className="flex items-center border-text-secondary/20 focus:border-primary border px-2 rounded-md w-1/3">
      <button className="text-text focus:border-none">
        <BsSearch fontSize={18} className="text-text" />
      </button>
      <input
        type="text"
        className="border-none w-full focus:border-none focus:ring-0 font-mono tracking-wide text-md placeholder:font-mono placeholder:text-text"
        placeholder="Search here.."
      />
    </div>
  );
}

export default ClientSearchBar;
