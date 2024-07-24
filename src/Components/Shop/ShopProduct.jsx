import React from "react";
import { useState } from "react";
import ShopSecProduct from "./ShopSecProdcut";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const ShopProduct = () => {
  return (
    <div className=" bg-white mt-20">
      <main className="flex flex-wrap gap-14 p-5 justify-center items-center">
        <div className="bg-LightGrey relative pb-5 drop-shadow-xl hover:rounded-lg">
          <img
            className="w-60 hover:w-64  hover:rounded-lg"
            src="/Images.png"
            alt=""
          />
          <div className="ml-5">
            <h2 className="font-bold  mt-2">Face Foam Wash</h2>
            <p className="font-light text-sm  mt-2">Face & Lip</p>

            <p className="font-bold text-sm  mt-2">₦2,450</p>
            <p className=" text-sm  mt-2 text-gray-500 line-through">₦3,500</p>
          </div>
          <p className=" absolute rounded-full px-2 py-4 bg-tomato top-3 text-white left-44">
            -50%
          </p>

          <Link
            className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold cursor-pointer hover:bg-primaryBlue"
            to="/Cart"
          >
            Add To Cart
          </Link>
        </div>
        {/* second////////////////////////////////// */}
        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img
            className="w-60 hover:w-64  hover:rounded-lg"
            src="image 1-1.png"
            alt=""
          />
          <div className="ml-5">
            <h2 className="font-bold  mt-2"> Face Moisturizer</h2>
            <p className="font-light text-sm  mt-2">Face & Lip</p>

            <p className="font-bold text-sm  mt-2">₦5,000</p>
            <p className=" text-sm  mt-2 text-gray-500 line-through ">₦3,500</p>
          </div>

          <Link
            className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold cursor-pointer hover:bg-primaryBlue"
            to="/Cart"
          >
            Add To Cart
          </Link>
        </div>
        {/* third///////////////////////////////////// */}
        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img
            className="w-60 hover:w-64  hover:rounded-lg"
            src="./image 1.png"
            alt=""
          />
          <div className="ml-5">
            <h2 className="font-bold  mt-2"> Aryuvedic Hair Butter</h2>
            <p className="font-light text-sm  mt-2">Hair Care</p>

            <p className="font-bold text-sm  mt-2">₦10,000</p>
            <p className=" text-sm  mt-2 text-gray-500 line-through">₦20,000</p>
          </div>
          <p className=" absolute rounded-full px-2 py-4 bg-tomato top-3 text-white left-44">
            -50%
          </p>

          <Link
            className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold cursor-pointer hover:bg-primaryBlue"
            to="/Cart"
          >
            Add To Cart
          </Link>
        </div>
        {/* fourth/////////////////////////////// */}
        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img
            className="w-64 hover:w-72  hover:rounded-lg"
            src="/image 1(1).png"
            alt=""
          />
          <div className="ml-5">
            <h2 className="font-bold  mt-2">Body Scrub</h2>
            <p className="font-light text-sm  mt-2">Bath & Body</p>

            <p className="font-bold text-sm  mt-2">₦4,000</p>
          </div>

          <Link
            className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold cursor-pointer hover:bg-primaryBlue"
            to="/Cart"
          >
            Add To Cart
          </Link>
        </div>
        {/* fifth////////////////////////////// */}
        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img
            className="w-60 hover:w-64  hover:rounded-lg"
            src="/Images(1).png"
            alt=""
          />
          <div className="ml-5">
            <h2 className="font-bold  mt-2">Body Wash</h2>
            <p className="font-light text-sm  mt-2">Bath & Body</p>

            <p className="font-bold text-sm  mt-2">₦2,450</p>
            <p className=" text-sm  mt-2 text-gray-500 line-through">₦3,500</p>
          </div>
          <p className=" absolute rounded-full px-2 py-4 bg-tomato top-3 text-white left-44">
            -50%
          </p>

          <Link
            className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold cursor-pointer hover:bg-primaryBlue"
            to="/Cart"
          >
            Add To Cart
          </Link>
        </div>
        {/* sixth////////////////////////////////////// */}
        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img
            className="w-64 hover:w-72   hover:rounded-lg"
            src="/image 1(2).png"
            alt=""
          />
          <div className="ml-5">
            <h2 className="font-bold  mt-2">Face Serum</h2>
            <p className="font-light text-sm  mt-2">Face & Lip Care</p>

            <p className="font-bold text-sm  mt-2">₦3,500</p>
          </div>

          {/* <p className=" absolute rounded-full px-2 py-3 bg-green-400 top-3 text-white right-3">
          New
        </p> */}
          <Link
            className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold cursor-pointer hover:bg-primaryBlue"
            to="/Cart"
          >
            Add To Cart
          </Link>
        </div>
        {/* seventh/////////////////////////////// */}
        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img
            className="w-60 hover:w-64  hover:rounded-lg"
            src="/image 1(5).png"
            alt=""
          />
          <div className="ml-5">
            <h2 className="font-bold  mt-2">Facial Mist</h2>
            <p className="font-light text-sm  mt-2">Face & Lip Care</p>

            <p className="font-bold text-sm  mt-2">₦2,000</p>
            <p className=" text-sm  mt-2 text-gray-500 line-through">₦4,000</p>
          </div>
          <p className=" absolute rounded-full px-2 py-4 bg-tomato top-3 text-white left-44">
            -50%
          </p>

          <Link
            className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold cursor-pointer hover:bg-primaryBlue"
            to="/Cart"
          >
            Add To Cart
          </Link>
        </div>
        {/* eigth////////////////////////////////// */}

        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img
            className="w-64 hover:w-72   hover:rounded-lg"
            src="/image 1(4).png"
            alt=""
          />
          <div className="ml-5">
            <h2 className="font-bold  mt-2">Hair Conditioner</h2>
            <p className="font-light text-sm  mt-2">Hair Care</p>

            <p className="font-bold text-sm  mt-2">₦5,000</p>
          </div>

          <Link
            className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold cursor-pointer hover:bg-primaryBlue"
            to="/Cart"
          >
            Add To Cart
          </Link>
        </div>
        {/* ninth/////////////////////////////// */}
        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img
            className="w-60 hover:w-64  hover:rounded-lg"
            src="/prodimg/Images.png"
            alt=""
          />
          <div className="ml-5">
            <h2 className="font-bold  mt-2">Hair Mask</h2>
            <p className="font-light text-sm  mt-2">Hair Care</p>

            <p className="font-bold text-sm  mt-2">₦ 3,500.00</p>
            <p className=" text-sm  mt-2 text-gray-500 line-through">
              ₦ 5,000.00
            </p>
          </div>
          <p className=" absolute rounded-full px-2 py-4 bg-tomato top-3 text-white left-44">
            -30%
          </p>

          <Link
            className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold cursor-pointer hover:bg-primaryBlue"
            to="/Cart"
          >
            Add To Cart
          </Link>
        </div>
        {/* tenth////////////////////////////////// */}
        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img
            className="w-64 hover:w-72   hover:rounded-lg"
            src="/prodimg/Images-1.png"
            alt=""
          />
          <div className="ml-5">
            <h2 className="font-bold  mt-2">Face Moisturizer</h2>
            <p className="font-light text-sm  mt-2">Face & Lip</p>

            <p className="font-bold text-sm  mt-2">₦2,800</p>
          </div>

          <Link
            className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold cursor-pointer hover:bg-primaryBlue"
            to="/Cart"
          >
            Add To Cart
          </Link>
        </div>
        {/* eleventh///////////////////////////// */}
        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img
            className="w-60 hover:w-64  hover:rounded-lg"
            src="/prodimg/image 1.png"
            alt=""
          />
          <div className="ml-5">
            <h2 className="font-bold  mt-2">Makeup Remover</h2>
            <p className="font-light text-sm  mt-2">Face & Lip Care</p>

            <p className="font-bold text-sm  mt-2">₦7,000</p>
            <p className=" text-sm  mt-2 text-gray-500 line-through">₦14,000</p>
          </div>
          <p className=" absolute rounded-full px-2 py-4 bg-tomato top-3 text-white left-44">
            -50%
          </p>

          <Link
            className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold cursor-pointer hover:bg-primaryBlue"
            to="/Cart"
          >
            Add To Cart
          </Link>
        </div>
        {/* twelvth////////////////////////////////// */}
        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img
            className="w-64 hover:w-72   hover:rounded-lg"
            src="/prodimg/image 1-1.png"
            alt=""
          />
          <div className="ml-5">
            <h2 className="font-bold  mt-2">Face Toner</h2>
            <p className="font-light text-sm  mt-2">Face & Lip</p>

            <p className="font-bold text-sm  mt-2">₦5,000</p>
          </div>
          <p className=" absolute rounded-full px-2 py-4 bg-tomato top-3 text-white left-44">
            -50%
          </p>

          {/* <p className=" absolute rounded-full px-2 py-3 bg-green-400 top-3 text-white right-3">
          New
        </p> */}
          <Link
            className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold cursor-pointer hover:bg-primaryBlue"
            to="/Cart"
          >
            Add To Cart
          </Link>
        </div>
        {/* thirthent////////////////////////// */}
        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img
            className="w-60 hover:w-64  hover:rounded-lg"
            src="/prodimg/Images-2.png"
            alt=""
          />
          <div className="ml-5">
            <h2 className="font-bold  mt-2">Bubblegum Lipgloss</h2>
            <p className="font-light text-sm  mt-2">Face & Lip Care</p>

            <p className="font-bold text-sm  mt-2">₦2,450</p>
            <p className=" text-sm  mt-2 text-gray-500 line-through">₦3,500</p>
          </div>
          <p className=" absolute rounded-full px-2 py-4 bg-tomato top-3 text-white left-44">
            -30%
          </p>

          <Link
            className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold cursor-pointer hover:bg-primaryBlue"
            to="/Cart"
          >
            Add To Cart
          </Link>
        </div>
        {/* fourtrnth//////////////////////////// */}
        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img
            className="w-64 hover:w-72   hover:rounded-lg"
            src="/prodimg/image 1-2.png"
            alt=""
          />
          <div className="ml-5">
            <h2 className="font-bold  mt-2">Face Foam Wash</h2>
            <p className="font-light text-sm  mt-2">Face & Lip</p>

            <p className="font-bold text-sm  mt-2">₦2,500</p>
          </div>

          <Link
            className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold cursor-pointer hover:bg-primaryBlue"
            to="/Cart"
          >
            Add To Cart
          </Link>
        </div>
        {/* fiftnent//////////////////////////////// */}
        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img
            className="w-60 hover:w-64  hover:rounded-lg"
            src="/prodimg/image 1-3.png"
            alt=""
          />
          <div className="ml-5">
            <h2 className="font-bold  mt-2">Edge Control</h2>
            <p className="font-light text-sm  mt-2">Hair Care</p>

            <p className="font-bold text-sm  mt-2">₦ 7,000.00</p>
            <p className=" text-sm  mt-2 text-gray-500 line-through">₦14,000</p>
          </div>
          <p className=" absolute rounded-full px-2 py-4 bg-tomato top-3 text-white left-44">
            -50%
          </p>

          {/* <p className=" absolute rounded-full px-2 py-3 bg-green-400 top-3 text-white right-3">
          New
        </p> */}
          <Link
            className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold cursor-pointer hover:bg-primaryBlue"
            to="/Cart"
          >
            Add To Cart
          </Link>
        </div>
        {/* sixtenth/////////////////////////////// */}
        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img
            className="w-64 hover:w-72   hover:rounded-lg"
            src="/prodimg/image 1-4.png"
            alt=""
          />
          <div className="ml-5">
            <h2 className="font-bold  mt-2">Body Lotion</h2>
            <p className="font-light text-sm  mt-2">Bath Body</p>

            <p className="font-bold text-sm  mt-2">₦5,000</p>
          </div>

          <Link
            className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold cursor-pointer hover:bg-primaryBlue"
            to="/Cart"
          >
            Add To Cart
          </Link>
        </div>
      </main>
      <div className="flex justify-center items-center gap-10 mt-10">
        <Link
          className="bg-primaryBlue w-14 h-14 border-primaryBlue border-2 border-solid hover:rounded-lg  hover:bg-white hover:text-primaryBlue text-white flex justify-center items-center"
          to="/ShopProduct"
        >
          1
        </Link>
        <Link
          className="bg-white border-primaryBlue border-2 border-solid  text-primaryBlue w-14 h-14 hover:rounded-lg hover:bg-primaryBlue hover:text-white  flex justify-center items-center"
          to="/ShopSecProdcut"
        >
          2
        </Link>
      </div>
      <article className="bg-lightPink flex justify-between px-10 py-20 mt-20 flex-col md:flex-row md:px-5 md:gap lg:px-20">
        <div className="flex flex-col md:flex-row md:justify-start justify-center items-center gap-2 text-sm text-Greydarker">
          <img className="w-10" src="./Group.png" alt="" />
          <div>
            <h3 className="text-lg font-bold text-center md:text-start">
              High Quality
            </h3>
            <p className="text-center md:text-start">
              Crafted from top materials
            </p>
          </div>
        </div>
        <div className="flex justify-start flex-col md:flex-row items-center gap-2 text-sm text-Greydarker mt-10 md:mt-0">
          <img className="w-10" src="./Vector.png" alt="" />
          <div>
            <h3 className="text-lg font-bold text-Greydarker text-center md:text-start">
              Warranty Protection
            </h3>
            <p className="text-center md:text-start">Over 2 years</p>
          </div>
        </div>
        <div className="flex justify-start items-center gap-2 text-sm text-Greydarker mt-10 md:mt-0 flex-col md:flex-row">
          <img className="w-10" src="./Vector(1).png" alt="" />
          <div>
            <h3 className="text-lg font-bold text-Greydarker">Free Shipping</h3>
            <p>Order over ₦20,000</p>
          </div>
        </div>
        <div className="flex justify-start items-center gap-2 text-sm text-Greydarker mt-10 md:mt-0 flex-col md:flex-row">
          <img src="./customer-support.png" alt="" />
          <div>
            <h3 className="text-lg font-bold text-Greydarker">24/7 Support </h3>
            <p>Dedicated Support</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ShopProduct;
