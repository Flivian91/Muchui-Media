import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { BiHome, BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import { GiHelp } from "react-icons/gi";
import SocialMediaIcons from "./SocialMediaIcons";
import Button from "./LinkButton";
import LinkButton from "./LinkButton";
function Sidebar({ onClose }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-4/5 sm:w-3/4 md:hidden fixed top-0 left-0 h-screen z-50 flex flex-col min-h-min gap-2 shadow  bg-background">
      <div className="flex items-center justify-between py-2 shadow px-2 w-full">
        <Logo />
        <button onClick={onClose} className="text-text text-xl">
          <FaTimes />
        </button>
      </div>
      <ul className="flex flex-col gap-3 px-2 flex-grow">
        <li>
          <NavLink to="/" className="sidebar-links">
            <BiHome className="text-xl" />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="sidebar-links">
            <BiHome className="text-xl" />
            <span>About</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="sidebar-links">
            <BiHome className="text-xl" />
            <span>Article</span>
          </NavLink>
        </li>

        <li className="relative">
          <NavLink to="/" className="sidebar-links relative">
            <GiHelp className="text-xl" />
            <span>Categories</span>
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="absolute right-2 top-0 bottom-0 my-auto"
            >
              {isOpen ? <BiMinusCircle /> : <BiPlusCircle />}
            </button>
          </NavLink>
          {isOpen && (
            <ul className="flex flex-col px-5">
              <li>
                <NavLink to="/" className="sidebar-links">
                  <BiHome className="text-xl" />
                  <span>Sports</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="sidebar-links">
                  <BiHome className="text-xl" />
                  <span>Politics</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="sidebar-links">
                  <BiHome className="text-xl" />
                  <span>Fasion</span>
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li>
          <NavLink to="/" className="sidebar-links">
            <BiHome className="text-xl" />
            <span>Contact</span>
          </NavLink>
        </li>
      </ul>
      <div className="w-full flex justify-center items-center px-4">
        <LinkButton>Get started</LinkButton>
      </div>
      <div className="flex py-5 justify-between px-4">
        <span className="text-text font-bold">Follow us on:</span>
        <SocialMediaIcons />
      </div>
    </div>
  );
}

export default Sidebar;
