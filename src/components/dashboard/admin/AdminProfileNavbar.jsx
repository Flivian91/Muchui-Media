import { useState } from "react";
import image from "../../../assets/images/img/profile-2.jpg";
import { BiCaretDown } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useCloseModel } from "../../../hooks/useCloseModel";
function AdminProfileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useCloseModel(setIsOpen);
  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 cursor-pointer text-text"
      >
        <img src={image} className="w-[38px] h-[38px] rounded-lg" alt="" />
        <h1 className="font-bold  text-sm tracking-wide hidden md:block">
          Mr.Flivian
        </h1>
        <BiCaretDown fontSize={23} />
      </div>
      {isOpen && (
        <div
          ref={ref}
          className="absolute top-full -left-16  md:left-0 bg-surface text-text w-32 z-20 shadow rounded mt-2"
        >
          <ul className="flex flex-col items-start gap-2 px-2 py-4">
            <li className="px-1 py-2 bg-background w-full font-bold rounded">
              <Link className="tracking-wide">Profile</Link>
            </li>
            <li className="px-1 py-2 bg-background w-full font-bold rounded">
              <button className="tracking-wide">Logout</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default AdminProfileNavbar;
