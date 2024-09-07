import { BiEdit, BiTrash } from "react-icons/bi";
import { BsEye } from "react-icons/bs";

function ClientRecentPostsItems() {
  return (
    <div className="grid grid-cols-[0.2fr_1.5fr_0.8fr_1fr] gap-2 items-center even:bg-background hover:bg-secondary/40 cursor-pointer rounded-sm transition-all duration-200">
      <span className="text-sm font-semibold font-mono px-1">01</span>
      <span className="truncate text-text-secondary font-semibold tracking-wide">
        About what is Going on difukgiudasflgfdslkjdsdks
      </span>
      <span className="text-text-secondary font-semibold tracking-wide">
        23/04/2024
      </span>
      <div className="flex items-center gap-2">
        <button
          role="button"
          title="view"
          className="text-text-secondary hover:text-green-500 transition-all duration-200"
        >
          <BsEye fontSize={19} />
        </button>
        <button
          role="button"
          title="edit"
          className="text-text-secondary hover:text-blue-500 transition-all duration-200"
        >
          <BiEdit fontSize={19} />
        </button>
        <button
          role="button"
          title="view"
          className="text-text-secondary hover:text-red-500 transition-all duration-200"
        >
          <BiTrash fontSize={19} />
        </button>
      </div>
    </div>
  );
}

export default ClientRecentPostsItems;
