/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Logo from "../../common/Logo";
import { MdDashboard } from "react-icons/md";
import { HiOutlineNewspaper } from "react-icons/hi";
import { GrNotification } from "react-icons/gr";
import { CiSettings } from "react-icons/ci";
import { BiLogOut } from "react-icons/bi";
import { TiTimes } from "react-icons/ti";

function ClientSidebarMenu({ onClose }) {
  return (
    <div className="fixed top-0 left-0 h-screen w-3/4 md:hidden  backdrop-blur-[2.5px] bg-surface z-20">
      <div className="flex flex-col gap-5 py-2">
        <div className="flex items-center justify-between px-2 border-b py-1">
          <div className="w-full flex-1 flex-grow">
            <Logo />
          </div>
          <button
            onClick={onClose}
            className="text-text p-2 hover:bg-background rounded-full"
          >
            <TiTimes fontSize={22} />
          </button>
        </div>
        <div className="flex flex-col gap-2 px-4 h-full">
          <div className="flex-grow flex flex-col gap-2">
            <Link
              onClick={onClose}
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
              onClick={onClose}
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
              onClick={onClose}
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
              onClick={onClose}
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
      </div>
    </div>
  );
}

export default ClientSidebarMenu;
