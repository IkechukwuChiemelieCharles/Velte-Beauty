import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-primaryBlue flex lg:justify-around items-center w-full  justify-between ">
      <div className="flex justify-center items-center">
        <img className="w-20" src="./Velte logo.png" alt="" />
        <p className="text-nowrap text-xs md:text-2xl text-white font-bold">
          Velte Beauty
        </p>
      </div>
      <ul
        className=" gap-10 hidden lg:block lg:flex xl:gap-20 text-xs text-white font-bold
      "
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Shop">Shop</Link>
        </li>

        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
      <div className="flex justify-between gap-2 md:gap-5 items-center">
        <img
          className="w-4 h-4"
          src="./icons/ant-design_shopping-cart-outlined.png"
          alt=""
        />
        <img
          className="w-10 lg:hidden"
          src="./icons/menu_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png"
          alt=""
        />
      </div>
    </nav>
  );
};

export default Nav;
