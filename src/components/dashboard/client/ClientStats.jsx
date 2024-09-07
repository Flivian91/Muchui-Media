import { BiLike, BiMessageAltDetail } from "react-icons/bi";
import { HiOutlineNewspaper } from "react-icons/hi2";

function ClientStats() {
  return (
    <div className="flex items-center flex-col sm:flex-row md:flex-col xl:flex-row gap-5 justify-between">
      <div className="flex items-center w-3/4 lg:w-ful md:w-3/4 sm:w-full gap-2 md:gap-5 px-4 border shadow-sm rounded bg-secondary/30 py-1">
        <span className="p-2 rounded-full bg-surface">
          <HiOutlineNewspaper fontSize={23} />
        </span>
        <div className="flex flex-col items-center  gap-1 border-l border-gray-400 pl-3">
          <p className="text-text font-bold text-sm text-center tracking-wider">
            Posts
          </p>
          <span className="text-text font-bold font-mono tracking-wide">
            40
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2 w-3/4 lg:w-ful md:w-3/4 sm:w-full md:gap-5 px-4 border shadow-sm rounded bg-green-500/30 py-1">
        <span className="p-2 rounded-full bg-surface">
          <BiMessageAltDetail fontSize={23} />
        </span>
        <div className="flex flex-col items-center gap-1 border-l border-gray-400 pl-3">
          <p className="text-text font-bold text-sm text-center tracking-wide md:tracking-wider">
            Comments
          </p>
          <span className="text-text font-bold font-mono tracking-wide">
            340
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2 w-3/4 lg:w-ful md:w-3/4 sm:w-full md:gap-5 px-4 border shadow-sm rounded bg-pink-500/40 py-1">
        <span className="p-2 rounded-full bg-surface">
          <BiLike fontSize={23} />
        </span>
        <div className="flex flex-col items-center gap-1 border-l border-gray-400 pl-3">
          <p className="text-text font-bold text-sm text-center tracking-wider">
            Likes
          </p>
          <span className="text-text font-bold font-mono tracking-wide">
            2000
          </span>
        </div>
      </div>
    </div>
  );
}

export default ClientStats;
