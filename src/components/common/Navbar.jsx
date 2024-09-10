import React, { useState } from "react";
import Logo from "./Logo";
import { Link, NavLink } from "react-router-dom";
import SocialMediaIcons from "./SocialMediaIcons";
import Menu from "./Menu";
import Overlay from "./Overlay";
import Sidebar from "./Sidebar";
import SearchIcons from "./SearchIcons";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";
import LinkButton from "./LinkButton";
import { supabase } from "../../supabase/supabaseClient";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);
  const [auth, setAuth] = useState(null);
  const [role, setRole] = useState("client");

  async function getSession() {
    const { data } = await supabase.auth.getSession();
    setAuth(data.session.user.aud);
    setRole(data.session.user.user_metadata.role.toLowerCase());
  }
  getSession();

  return (
    <nav className="text-white px-2 md:py-4 py-3 shadow ">
      <div className=" flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold">
          <Logo />
        </NavLink>
        <ul className="items-center gap-6 hidden md:flex">
          <li className="nav-links">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav-links">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="nav-links">
            <NavLink to="/articles">Articles</NavLink>
          </li>
          <li
            onMouseEnter={() => setIsDropdown(true)}
            onMouseLeave={() => setIsDropdown(false)}
            className="nav-links flex items-center gap-2 relative"
          >
            <NavLink to="/categories">Categories</NavLink>
            <button>{isDropdown ? <BiCaretUp /> : <BiCaretDown />}</button>
            {isDropdown && (
              <ul className="absolute top-full left-0 py-2 w-full shadow z-10 bg-background flex flex-col gap-2  text-base">
                <li className="px-2 py-1 hover:bg-secondary/30 rounded">
                  <Link to={"/categories/sport"}>Sport</Link>
                </li>
                <li className="px-2 py-1 hover:bg-secondary/30 rounded">
                  <Link to={"/categories/technology"}>Technology</Link>
                </li>
                <li className="px-2 py-1 hover:bg-secondary/30 rounded">
                  <Link to={"/categories/environment"}>Environment</Link>
                </li>
                <li className="px-2 py-1 hover:bg-secondary/30 rounded">
                  <Link to={"/categories/health"}>Health</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="nav-links">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <SocialMediaIcons />
        <div className="flex items-center gap-4">
          <SearchIcons />
          <div className="hidden md:block">
            {auth === "authenticated" ? (
              <LinkButton link={role === "client" ? "client" : "admin"}>
                Dashboard
              </LinkButton>
            ) : (
              <LinkButton link="signup">Get started</LinkButton>
            )}
          </div>
        </div>
        <Menu onOpen={() => setIsOpen(true)} />
        {isOpen && <Sidebar onClose={() => setIsOpen(false)} />}
        {isOpen && <Overlay onClose={() => setIsOpen(false)} />}
      </div>
    </nav>
  );
}

export default Navbar;
