import React from "react";
import ShopProduct from "./ShopProduct";
import ShopSecProduct from "./ShopSecProdcut";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const ShopHeader = () => {
  return (
    <div>
      <header className="relative  ">
        <div className=" ">
          <img
            className="w-full 
          
            "
            src="./IMG1/Rectangle 1.png"
            alt=""
          />
          {/* <div className="overlay w-full  absolute top-0 py-9 h-22 md:h-44   border-2 "></div> */}
          <div className="  md:top-32 md:left-128 flex justify-center items-center gap-2 text-Greydarker flex-col -mt-16 md:-mt-32 mb-3  ">
            <h1 className="text-md  top-5 left-32 md:top-20 md:left-130 md:text-2xl font-bold text-Greydarker">
              Shop
            </h1>

            <div className="  md:top-32 md:left-128 flex justify-center items-center gap-2 text-Greydarkery">
              <Link className="text-xs md:text-sm font-bold " to="/">
                Home
              </Link>
              <img
                className="w-2 h-3 md:w-3 md:h-4 "
                src="./icons/Vector(2).png"
                alt=""
              />
              <p className="text-xs md:text-sm ">Shop</p>
            </div>
          </div>
          <div className="bg-Greydarker flex items-center justify-between px-2 py-5 text-xs sm:px-16  md:mt-16">
            <div className="flex gap-1 z-20   ">
              <img
                className="w-5 h-5 hidden"
                src="./icons/Vector(3).png"
                alt=""
              />
              <p className="text-white font-bold cursor-pointer mr-2">Filter</p>
              <img
                className="w-5 h-5 hidden"
                src="./icons/Vector(4).png"
                alt=""
              />

              <img
                className="w-5 h-5 hidden"
                src="./icons/Vector(5).png"
                alt=""
              />
            </div>
            <p className="text-white font-semibold text-xs ">
              Showing 1-16 of 32 results
            </p>
            <div className="flex gap-2 justify-center items-center ">
              <p className="text-white font-bold text-xs ">Show</p>
              <span className="bg-white w-8 text-center h-8 flex items-center justify-center text-xs rounded-sm text-Greydarker">
                16
              </span>
              <p className="text-white font-bold text-xs">Sort by</p>
              <span className="bg-white w-28  h-8 flex items-center justify-start text-xs px-4 rounded-sm text-Greydarker font-semibold">
                Default
              </span>
            </div>
          </div>
        </div>
      </header>
      <ShopProduct />
      <Routes>
        <Route path="/ShopSecProduct" element={<ShopSecProduct />} />
      </Routes>
    </div>
  );
};

export default ShopHeader;
