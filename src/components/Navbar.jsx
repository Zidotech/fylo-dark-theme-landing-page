import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { images, navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center">
      <img src={images.logo} alt="logo" className="sm:w-[200px] w-[180px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-raleway font-medium cursor-pointer text-[20px]  ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a
              href={`#${nav.id}`}
              className="uppercase hover:border-b-2 border-white"
            >
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        {toggle ? (
          <AiOutlineClose
            alt="menu-icon"
            className="w-[38px]  h-[38px] object-contain"
            onClick={() => setToggle(false)}
          />
        ) : (
          <HiMenuAlt3
            alt="menu-icon"
            className="w-[38px]  h-[38px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />
        )}

        <div
          className={`${
            toggle ? "block" : "hidden"
          } p-6 bg-DarkBlueMb z-50 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none  flex justify-end items-start flex-1 flex-col ">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[20px]  ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                }`}
              >
                <a href={`#${nav.id}`} className="uppercase text-white">
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
