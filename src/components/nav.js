import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-white bg-opacity-70 px-4 py-3 shadow-sm backdrop-blur-primary">
      <div className="flex flex-row items-center justify-between">
        <button onClick={toggleMenu} className="text-xl text-blue md:hidden">
          &#9776;
        </button>
      </div>
      <ul
        className={`mt-3 md:mt-0 md:flex md:flex-row md:items-center md:justify-between ${isOpen ? "block" : "hidden"} md:block`}
      >
        <li
          className={`group w-full rounded-lg border-2 border-blue px-6 py-3 font-primary font-bold uppercase text-blue transition-all hover:rounded-full hover:bg-blue md:w-auto ${isOpen ? "mb-3" : ""}`}
        >
          <NavLink
            to="/"
            exact
            className="block w-full text-center group-hover:text-white"
          >
            Hjem
          </NavLink>
        </li>
        <div className="flex w-full flex-col items-center gap-3 md:w-auto md:flex-row">
          <li className="group w-full rounded-lg border-2 border-blue px-6 py-3 font-primary font-bold uppercase text-blue transition-all hover:rounded-full hover:bg-blue md:w-auto">
            <NavLink
              to="/kommentarer"
              className="block w-full text-center group-hover:text-white"
            >
              Kommentarer
            </NavLink>
          </li>
          <li className="group w-full rounded-lg border-2 border-blue px-6 py-3 font-primary font-bold uppercase text-blue transition-all hover:rounded-full hover:bg-blue md:w-auto">
            <NavLink
              to="/kontakt"
              className="block w-full text-center group-hover:text-white"
            >
              Kontakt
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
