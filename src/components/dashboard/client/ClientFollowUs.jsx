import { BsDiscord, BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";

function ClientFollowUs() {
  return (
    <div className="bg-surface shadow rounded px-2 pb-2">
      <h1 className="text-sm md:text-lg font-bold text-text/70 py-2 tracking-wide">
        Follow Us On:
      </h1>
      <div className="flex flex-col gap-3">
        <Link
          to={"tel:+254718017191"}
          className="flex border items-center shadow-md bg-indigo-600 px-2 py-1 rounded gap-4"
        >
          <FaFacebook className="text-white" fontSize={22} />
          <span className="text-white font-bold tracking-wide font-mono text-lg ">
            Facebook Our Page
          </span>
        </Link>
        <Link
          to={"tel:+254718017191"}
          className="flex border items-center bg-stone-800 shadow-md px-2 py-1 rounded gap-4"
        >
          <BsTwitterX className="text-white" fontSize={22} />
          <span className="text-white font-bold tracking-wide font-mono text-lg ">
            Twitter Page
          </span>
        </Link>
        <Link
          to={"wa-me:/+254718017191"}
          className="flex border items-center shadow-md bg-blue-500 px-2 py-1 rounded gap-4"
        >
          <BsDiscord className="text-white" fontSize={22} />
          <span className="text-white font-boldn tracking-wide font-mono text-sm ">
            Join our Discord Community
          </span>
        </Link>
      </div>
    </div>
  );
}

export default ClientFollowUs;
