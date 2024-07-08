import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full relative flex flex-col justify-center items-center overflow-hidden">
      <img
        src="./scandinavian-interior-mockup-wall-decal-background 1.jpg"
        alt=""
      />
      <div className="py-5  md:absolute md:top-40 md:right-3 md:w-96  lg:top-52 xl:w-128  lg:right-20 bg-pink w-full  md:h-64  md:py-8 rounded-md flex flex-col justify-center items-center ">
        <h1 className="text-white text-2xl font-bold text-center w-80  ">
          Unveil Your Natural Glow with Velte Beauty
        </h1>

        <p className="text-center font-bold text-gray-600 mt-10 w-80 4">
          Luxury Skincare Inspired by Nature, Perfected by Science
        </p>

        <Link
          className="py-2 px-5 text-sm font-bold  text-white bg-Green rounded-sm drop-shadow-lg mt-10"
          to="/Shop"
        >
          BUY Now
        </Link>
      </div>
    </header>
  );
};

export default Header;
