import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-primaryBlue flex items-center w-full  justify-between pr-10 px-5 sm:px-10 md:px-10 lg: fixed z-50">
      <img className="w-20" src="./Velte logo.png" alt="" />
      <ul
        className=" gap-2 sm:gap-10 lg:gap-10 flex  xl:gap-20 text-xs text-white font-bold
      "
      >
        <li>
          <Link to="/" className="hover:text-Green">
            Home
          </Link>
        </li>
        <li>
          <Link to="/Shop" className="hover:text-Green">
            Shop
          </Link>
        </li>
        <li>
          <Link to="/Contact" className="hover:text-Green">
            Contact
          </Link>
        </li>
      </ul>
      <div className="flex justify-between gap-2 md:gap-5 items-center">
        <Link to="/Cart" className="">
          <img
            className="w-4 h-4 sm:mr-10"
            src="./icons/ant-design_shopping-cart-outlined.png"
            alt=""
          />
        </Link>

        {/* <img
          className="w-10 lg:hidden"
          src="./icons/menu_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png"
          alt=""
        /> */}
      </div>
    </nav>
  );
};

export default Nav;
