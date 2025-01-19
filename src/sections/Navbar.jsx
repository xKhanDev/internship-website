import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { CgMenuGridO } from "react-icons/cg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative top-0 bg-white p-4 flex justify-between items-center w-full lg:h-[100px] lg:items-center lg:sticky">
      <span className="w-[100px]">
        <img src="./logo.png" alt="" />
      </span>
      <div
        className={`fixed top-0 left-0 z-40 w-full h-full bg-gray-800 ${
          open ? "block" : "hidden"
        } lg:flex lg:relative lg:bg-transparent lg:w-1/2`}
      >
        <span
          className="absolute right-4 top-4 size-12 text-3xl rounded p-2 bg-gray-900 flex items-center justify-center lg:hidden"
          onClick={() => setOpen(!open)}
        >
          <CgClose />
        </span>
        <div className="w-full h-full flex flex-col items-center justify-center gap-4 text-center *:text-white *:w-full *:text-xl *:capitalize *:h-12 lg:flex-row lg:gap-0 lg:*:text-lg">
          <a
            href="/"
            className="flex justify-center items-center hover:bg-gray-700 lg:text-black lg:hover:font-semibold lg:hover:bg-transparent"
          >
            Home
          </a>
          <a
            href="/internship-listing"
            className="flex justify-center items-center hover:bg-gray-700 lg:text-black  lg:hover:font-semibold lg:hover:bg-transparent"
          >
            Internships
          </a>
          <a
            href="/about"
            className="flex justify-center items-center hover:bg-gray-700 lg:text-black  lg:hover:font-semibold lg:hover:bg-transparent"
          >
            About us
          </a>
          <a
            href="/contact"
            className="flex justify-center items-center hover:bg-gray-700 lg:text-black  lg:hover:font-semibold lg:hover:bg-transparent"
          >
            Contact
          </a>
          <a
            href="/apply"
            className="flex justify-center items-center text-white bg-blue-700 rounded-full hover:bg-blue-900  lg:hover:font-semibold"
          >
            Apply
          </a>
        </div>
      </div>
      <span
        className="size-12 text-3xl rounded p-2 bg-gray-900 flex items-center justify-center lg:hidden"
        onClick={() => setOpen(!open)}
      >
        <CgMenuGridO />
      </span>
    </nav>
  );
};

export default Navbar;
