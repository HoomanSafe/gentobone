import React from "react";
import logo from "../assets/logo.png";
import { Link, animateScroll as scroll } from "react-scroll";


const Header = () => {
  return (
    <header className="py-3 w-full g-red hidden absolute top-0 md:block text-white">
      <nav className="container flex items-center">
        <img src={logo} alt="" className="w-[3rem]" />
        <div className="flex gap-7 items-center mx-auto">
          <a
            href=""
            className="text-white underline underline-offset-[10px] uppercase font-bold  decoration-red"
          >
            home
          </a>
          <a
            href=""
            className="text-white  hover:text-red hover:underline underline-offset-[10px]  font-normal uppercase hover:decoration-red"
          >
            tokenomics
          </a>
          <a
            href=""
            className="text-white  hover:text-red hover:underline underline-offset-[10px]  font-normal uppercase hover:decoration-red"
          >
            about
          </a>
          <a
            href=""
            className="text-white  hover:text-red hover:underline underline-offset-[10px]  font-normal uppercase hover:decoration-red"
          >
            roadmap
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
