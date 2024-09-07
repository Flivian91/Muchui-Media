import { Link } from "react-router-dom";
import Logo from "../../common/Logo";
import { MdDashboard } from "react-icons/md";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { GrNotification } from "react-icons/gr";
import { CiSettings } from "react-icons/ci";
import { BiLogOut } from "react-icons/bi";

function ClientSidebar() {
  return (
    <aside className="flex flex-col gap-5 py-4">
      <div className="shadow-sm py-2 px-4">
        <Logo />
      </div>
      <div className="flex flex-col gap-2 px-4 h-full">
        <div className="flex-grow flex flex-col gap-2">
          <Link
            to={"/client"}
            className="group flex shadow-none hover:shadow-sm transition-all duration-200 gap-2 items-center py-1 hover:text-white hover:bg-secondary rounded px-1"
          >
            <MdDashboard
              fontSize={21}
              className="text-text group-hover:text-white"
            />
            <span className="text-lg font-semibold tracking-wide group-hover:text-white text-text">
              Dashboard
            </span>
          </Link>
          <Link
            to={"/client/posts"}
            className="group flex shadow-none hover:shadow-sm transition-all duration-200 gap-2 items-center py-1 hover:text-white hover:bg-secondary rounded px-1"
          >
            <HiOutlineNewspaper
              fontSize={21}
              className="text-text group-hover:text-white"
            />
            <span className="text-lg font-semibold tracking-wide group-hover:text-white text-text">
              My Posts
            </span>
          </Link>
          <Link
            to={"/client/notifications"}
            className="group flex shadow-none hover:shadow-sm transition-all duration-200 gap-2 items-center py-1 hover:text-white hover:bg-secondary rounded px-1"
          >
            <GrNotification
              fontSize={21}
              className="text-text group-hover:text-white"
            />
            <span className="text-lg font-semibold tracking-wide group-hover:text-white text-text">
              Notifications
            </span>
          </Link>
        </div>
        <div className=" flex flex-col gap-2 ">
          <Link
            to={"/client/settings"}
            className="group flex shadow-none hover:shadow-sm transition-all duration-200 gap-2 items-center py-1 hover:text-white hover:bg-secondary rounded px-1"
          >
            <CiSettings
              fontSize={21}
              className="text-text group-hover:text-white"
            />
            <span className="text-lg font-semibold tracking-wide group-hover:text-white text-text">
              Settings
            </span>
          </Link>
          <button className="group flex shadow-none hover:shadow-sm transition-all duration-200 gap-2 items-center py-1 hover:text-white hover:bg-red-500 rounded px-1">
            <BiLogOut
              fontSize={21}
              className="text-text-secondary group-hover:text-white"
            />
            <span className="text-lg font-semibold tracking-wide group-hover:text-white text-text-secondary">
              Logout
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
}

export default ClientSidebar;
