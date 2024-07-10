import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ShopSecProduct = () => {
  return (
    <div className="overflow-hidden">
      <main className="flex flex-wrap gap-10 p-5 justify-center items-center overflow-hidden">
        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img
            className="w-60 hover:w-64  hover:rounded-lg"
            src="/prodimg2/Images(2).png"
            alt=""
          />
          <div className="ml-5">
            <h2 className="font-bold  mt-2">Heat Hair Spray</h2>
            <p className="font-light text-sm  mt-2">Hair Care</p>

            <p className="font-bold text-sm  mt-2">₦ 2,450.00</p>
            <p className=" text-sm  mt-2 text-gray-500 line-through">₦3,500</p>
          </div>
          <p className=" absolute rounded-full px-2 py-3 bg-tomato top-3 text-white left-44">
            -30%
          </p>

          <Link
            className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold cursor-pointer hover:bg-blue-700"
            to="/Cart"
          >
            Add To Cart
          </Link>
        </div>
        {/* second////////////////////////////////// */}

        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img
            className="w-64 hover:w-72  hover:rounded-lg"
            src="/prodimg2/image 1(6).png"
            alt=""
          />
          <div className="ml-5">
            <h2 className="font-bold  mt-2"> Cellulite Cream</h2>
            <p className="font-light text-sm  mt-2">Bath & Body</p>

            <p className="font-bold text-sm  mt-2">₦ 3,500.00</p>
          </div>

          {/* <p className=" absolute rounded-full px-2 py-3 bg-green-400 top-3 text-white right-3">
          New
        </p> */}
          <Link
            className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold cursor-pointer hover:bg-blue-700"
            to="/Cart"
          >
            Add To Cart
          </Link>
        </div>
        {/* third///////////////////////////////////// */}

        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img
            className="w-64 hover:w-72  hover:rounded-lg"
            src="./image 1(4).png"
            alt=""
          />
          <div className="ml-5">
            <h2 className="font-bold  mt-2">Hand Cream</h2>
            <p className="font-light text-sm  mt-2">Bath & Body </p>

            <p className="font-bold text-sm  mt-2">₦5,000</p>
          </div>

          {/* <p className=" absolute rounded-full px-2 py-3 bg-green-400 top-3 text-white right-3">
          New
        </p> */}
          <Link
            className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold cursor-pointer hover:bg-blue-700"
            to="/Cart"
          >
            Add To Cart
          </Link>
        </div>
        {/* fourth/////////////////////////////// */}

        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img
            className="w-64 hover:w-72   hover:rounded-lg"
            src="/prodimg2/Images(3).png"
            alt=""
          />
          <div className="ml-5">
            <h2 className="font-bold  mt-2">Sun Screen Lotion</h2>
            <p className="font-light text-sm  mt-2">Bath & Body</p>

            <p className="font-bold text-sm  mt-2">₦8,800</p>
          </div>

          {/* <p className=" absolute rounded-full px-2 py-3 bg-green-400 top-3 text-white right-3">
          New
        </p> */}
          <Link
            className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold cursor-pointer hover:bg-blue-700"
            to="/Cart"
          >
            Add To Cart
          </Link>
        </div>
        {/* fifth////////////////////////////// */}
        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img
            className="w-60 hover:w-64  hover:rounded-lg"
            src="/prodimg2/image 1(8).png"
            alt=""
          />
          <div className="ml-5">
            <h2 className="font-bold  mt-2">Face Scrub</h2>
            <p className="font-light text-sm  mt-2">Face & Lip Care</p>

            <p className="font-bold text-sm  mt-2">₦ 2,450.00</p>
            <p className=" text-sm  mt-2 text-gray-500 line-through">₦3,500</p>
          </div>
          <p className=" absolute rounded-full px-2 py-3 bg-tomato top-3 text-white left-44">
            50%
          </p>

          {/* <p className=" absolute rounded-full px-2 py-3 bg-green-400 top-3 text-white right-3">
          New
        </p> */}
          <Link
            className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold cursor-pointer hover:bg-blue-700"
            to="/Cart"
          >
            Add To Cart
          </Link>
        </div>
        {/* sixth////////////////////////////////////// */}
        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img
            className="w-64 hover:w-72   hover:rounded-lg"
            src="/prodimg2/image 1(9).png"
            alt=""
          />
          <div className="ml-5">
            <h2 className="font-bold  mt-2">Face Foam Wash</h2>
            <p className="font-light text-sm  mt-2">Face & Lip</p>

            <p className="font-bold text-sm  mt-2">₦4,500</p>
          </div>

          {/* <p className=" absolute rounded-full px-2 py-3 bg-green-400 top-3 text-white right-3">
          New
        </p> */}
          <Link
            className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold cursor-pointer hover:bg-blue-700"
            to="/Cart"
          >
            Add To Cart
          </Link>
        </div>
        {/* seventh/////////////////////////////// */}
        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img
            className="w-60 hover:w-64  hover:rounded-lg"
            src="/prodimg2/image 1(10).png"
            alt=""
          />
          <div className="ml-5">
            <h2 className="font-bold  mt-2">Face Foam Wash</h2>
            <p className="font-light text-sm  mt-2">Face & Lip</p>

            <p className="font-bold text-sm  mt-2">₦1,000</p>
            <p className=" text-sm  mt-2 text-gray-500 line-through">₦2,000</p>
          </div>
          <p className=" absolute rounded-full px-2 py-3 bg-tomato top-3 text-white left-44">
            50%
          </p>

          {/* <p className=" absolute rounded-full px-2 py-3 bg-green-400 top-3 text-white right-3">
          New
        </p> */}
          <Link
            className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold cursor-pointer hover:bg-blue-700"
            to="/Cart"
          >
            Add To Cart
          </Link>
        </div>
        {/* eigth////////////////////////////////// */}
        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img
            className="w-64 hover:w-72   hover:rounded-lg"
            src="/prodimg2/image 1(7).png"
            alt=""
          />
          <div className="ml-5">
            <h2 className="font-bold  mt-2">Face Foam Wash</h2>
            <p className="font-light text-sm  mt-2">Face & Lip</p>

            <p className="font-bold text-sm  mt-2">₦4,000</p>
          </div>
          <p className=" absolute rounded-full px-2 py-3 bg-tomato top-3 text-white left-44">
            50%
          </p>

          {/* <p className=" absolute rounded-full px-2 py-3 bg-green-400 top-3 text-white right-3">
          New
        </p> */}
          <Link
            className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold cursor-pointer hover:bg-blue-700"
            to="/Cart"
          >
            Add To Cart
          </Link>
        </div>
        {/* ninth/////////////////////////////// */}
        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img
            className="w-60 hover:w-64  hover:rounded-lg"
            src="/prodimg2/Images(4).png"
            alt=""
          />
          <div className="ml-5">
            <h2 className="font-bold  mt-2">Under Eye Cream</h2>
            <p className="font-light text-sm  mt-2">Face & Lip</p>

            <p className="font-bold text-sm  mt-2">₦2,450</p>
            <p className=" text-sm  mt-2 text-gray-500 line-through">₦3,500</p>
          </div>
          <p className=" absolute rounded-full px-2 py-3 bg-tomato top-3 text-white left-44">
            50%
          </p>

          {/* <p className=" absolute rounded-full px-2 py-3 bg-green-400 top-3 text-white right-3">
          New
        </p> */}
          <Link
            className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold cursor-pointer hover:bg-blue-700"
            to="/Cart"
          >
            Add To Cart
          </Link>
        </div>
        {/* tenth////////////////////////////////// */}
        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img
            className="w-64 hover:w-72  hover:rounded-lg"
            src="/prodimg2/image 1(12).png"
            alt=""
          />
          <div className="ml-5">
            <h2 className="font-bold  mt-2">Hair Growth Tonic</h2>
            <p className="font-light text-sm  mt-2">Hair Carep</p>

            <p className="font-bold text-sm  mt-2">₦3,500</p>
          </div>

          {/* <p className=" absolute rounded-full px-2 py-3 bg-green-400 top-3 text-white right-3">
          New
        </p> */}
          <Link
            className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold cursor-pointer hover:bg-blue-700"
            to="/Cart"
          >
            Add To Cart
          </Link>
        </div>
        {/* eleventh///////////////////////////// */}
        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img
            className="w-60 hover:w-64  hover:rounded-lg"
            src="/prodimg2/image 1(13).png"
            alt=""
          />
          <div className="ml-5">
            <h2 className="font-bold  mt-2">Hand Wash</h2>
            <p className="font-light text-sm  mt-2">Bath & Body</p>

            <p className="font-bold text-sm  mt-2">₦5,000</p>
            <p className=" text-sm  mt-2 text-gray-500 line-through">₦3,500</p>
          </div>
          <p className=" absolute rounded-full px-2 py-3 bg-tomato top-3 text-white left-44">
            50%
          </p>

          {/* <p className=" absolute rounded-full px-2 py-3 bg-green-400 top-3 text-white right-3">
          New
        </p> */}
          <Link
            className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold cursor-pointer hover:bg-blue-700"
            to="/Cart"
          >
            Add To Cart
          </Link>
        </div>
        {/* twelvth////////////////////////////////// */}
        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img
            className="w-64 hover:w-72  hover:rounded-lg"
            src="/prodimg2/image 1(14).png"
            alt=""
          />
          <div className="ml-5">
            <h2 className="font-bold  mt-2">Face Foam Wash</h2>
            <p className="font-light text-sm  mt-2">Face & Lip</p>

            <p className="font-bold text-sm  mt-2">₦4,000</p>
          </div>
          <p className=" absolute rounded-full px-2 py-3 bg-tomato top-3 text-white left-44">
            50%
          </p>

          {/* <p className=" absolute rounded-full px-2 py-3 bg-green-400 top-3 text-white right-3">
          New
        </p> */}
          <Link
            className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold cursor-pointer hover:bg-blue-700"
            to="/Cart"
          >
            Add To Cart
          </Link>
        </div>
        {/* thirthent////////////////////////// */}
        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img
            className="w-60 hover:w-64  hover:rounded-lg"
            src="/prodimg2/Images(5).png"
            alt=""
          />
          <div className="ml-5">
            <h2 className="font-bold  mt-2">Lip Mask</h2>
            <p className="font-light text-sm  mt-2">Face & Lip Care</p>

            <p className="font-bold text-sm  mt-2">₦2,450</p>
            <p className=" text-sm  mt-2 text-gray-500 line-through">₦3,500</p>
          </div>
          <p className=" absolute rounded-full px-2 py-3 bg-tomato top-3 text-white left-44">
            -30%
          </p>

          {/* <p className=" absolute rounded-full px-2 py-3 bg-green-400 top-3 text-white right-3">
          New
        </p> */}
          <Link
            className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold cursor-pointer hover:bg-blue-700"
            to="/Cart"
          >
            Add To Cart
          </Link>
        </div>
        {/* fourtrnth//////////////////////////// */}

        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img
            className="w-60 hover:w-64  hover:rounded-lg"
            src="/prodimg2/image 1(15).png"
            alt=""
          />
          <div className="ml-5">
            <h2 className="font-bold  mt-2">Nude Lipgloss</h2>
            <p className="font-light text-sm  mt-2">Face & Lip</p>

            <p className="font-bold text-sm  mt-2">₦2,450</p>
            <p className=" text-sm  mt-2 text-gray-500 line-through">₦2,450</p>
          </div>

          {/* <p className=" absolute rounded-full px-2 py-3 bg-green-400 top-3 text-white right-3">
          New
        </p> */}
          <Link
            className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold cursor-pointer hover:bg-blue-700"
            to="/Cart"
          >
            Add To Cart
          </Link>
        </div>
        {/* fiftnent//////////////////////////////// */}
        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img
            className="w-60 hover:w-64  hover:rounded-lg"
            src="/prodimg2/image 1(16).png"
            alt=""
          />
          <div className="ml-5">
            <h2 className="font-bold  mt-2">Body Glitter</h2>
            <p className="font-light text-sm  mt-2">Bath & Body</p>

            <p className="font-bold text-sm  mt-2">₦10,000</p>
            <p className=" text-sm  mt-2 text-gray-500 line-through">₦20,000</p>
          </div>
          <p className=" absolute rounded-full px-2 py-3 bg-tomato top-3 text-white left-44">
            50%
          </p>

          {/* <p className=" absolute rounded-full px-2 py-3 bg-green-400 top-3 text-white right-3">
          New
        </p> */}
          <Link
            className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold cursor-pointer hover:bg-blue-700"
            to="/Cart"
          >
            Add To Cart
          </Link>
        </div>
        {/* sixtenth/////////////////////////////// */}
        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img
            className="w-64 hover:w-72  hover:rounded-lg "
            src="/prodimg2/image 1(17).png"
            alt=""
          />
          <div className="ml-5">
            <h2 className="font-bold  mt-2">Silver Lining Lipgloss</h2>
            <p className="font-light text-sm  mt-2">Face & Lip Care</p>

            <p className="font-bold text-sm  mt-2">₦4,000</p>
          </div>

          {/* <p className=" absolute rounded-full px-2 py-3 bg-green-400 top-3 text-white right-3">
          New
        </p> */}
          <Link
            className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold cursor-pointer hover:bg-blue-700"
            to="/Cart"
          >
            Add To Cart
          </Link>
        </div>
      </main>
      <div className="flex justify-center items-center gap-10 mt-10">
        <Link
          className="bg-primaryBlue w-14 h-14 hover:rounded-lg text-white  flex justify-center items-center"
          to="/ShopProduct"
        >
          1
        </Link>
        <Link
          className="bg-gray-500 text-black w-14 h-14 hover:rounded-lg flex justify-center items-center"
          to="/ShopProduct"
        >
          1
        </Link>
      </div>
      <article className="bg-lightPink flex justify-between px-10 py-20 mt-20 flex-col md:flex-row flex-wrap">
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

export default ShopSecProduct;
