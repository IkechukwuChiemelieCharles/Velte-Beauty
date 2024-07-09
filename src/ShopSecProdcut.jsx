import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ShopSecProduct = () => {
  return (
    <div>
      <main className="flex flex-wrap gap-20 p-5">
        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img className="w-60" src="/Images.png" alt="" />
          <div className="ml-5">
            <h2 className="font-bold  mt-2">Face Foam Wash</h2>
            <p className="font-light text-sm  mt-2">Face & Lip</p>

            <p className="font-bold text-sm  mt-2">₦2,800</p>
            <p className=" text-sm  mt-2 text-gray-500 line-through">₦3,500</p>
          </div>
          <p className=" absolute rounded-full px-2 py-3 bg-tomato top-3 text-white left-44">
            -50%
          </p>

          {/* <p className=" absolute rounded-full px-2 py-3 bg-green-400 top-3 text-white right-3">
          New
        </p> */}
          <div className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold">
            Add To Cart
          </div>
          <div className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold">
            Add To Cart
          </div>
        </div>
        {/* second////////////////////////////////// */}

        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img className="w-60" src="image 1-1.png" alt="" />
          <div className="ml-5">
            <h2 className="font-bold  mt-2"> Face Moisturizer</h2>
            <p className="font-light text-sm  mt-2">Face & Lip</p>

            <p className="font-bold text-sm  mt-2">₦1,000</p>
            <p className=" text-sm  mt-2 text-gray-500 line-through">₦3,500</p>
          </div>
          <p className=" absolute rounded-full px-1 py-3 bg-tomato top-3 text-white left-44">
            -30%
          </p>
          {/* <p className=" absolute rounded-full px-2 py-3 bg-green-400 top-3 text-white right-3">
          New
        </p> */}
          <div className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold">
            Add To Cart
          </div>
        </div>
        {/* third///////////////////////////////////// */}

        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img className="w-60" src="./image 1.png" alt="" />
          <div className="ml-5">
            <h2 className="font-bold  mt-2"> Aryuvedic Hair Butter</h2>
            <p className="font-light text-sm  mt-2">Hair Care</p>

            <p className="font-bold text-sm  mt-2">₦20,000</p>
            <p className=" text-sm  mt-2 text-gray-500 line-through">₦25,000</p>
          </div>
          <p className=" absolute rounded-full px-1 py-3 bg-tomato top-3 text-white left-44">
            -50%
          </p>

          {/* <p className=" absolute rounded-full px-2 py-3 bg-green-400 top-3 text-white right-3">
          New
        </p> */}
          <div className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold">
            Add To Cart
          </div>
        </div>
        {/* fourth/////////////////////////////// */}

        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img className="w-60" src="/Images.png" alt="" />
          <div className="ml-5">
            <h2 className="font-bold  mt-2">Face Foam Wash</h2>
            <p className="font-light text-sm  mt-2">Face & Lip</p>

            <p className="font-bold text-sm  mt-2">₦2,800</p>
            <p className=" text-sm  mt-2 text-gray-500 line-through">₦3,500</p>
          </div>
          <p className=" absolute rounded-full px-2 py-3 bg-tomato top-3 text-white left-44">
            50%
          </p>

          {/* <p className=" absolute rounded-full px-2 py-3 bg-green-400 top-3 text-white right-3">
          New
        </p> */}
          <div className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold">
            Add To Cart
          </div>
        </div>
        {/* fifth////////////////////////////// */}
        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img className="w-60" src="/Images.png" alt="" />
          <div className="ml-5">
            <h2 className="font-bold  mt-2">Face Foam Wash</h2>
            <p className="font-light text-sm  mt-2">Face & Lip</p>

            <p className="font-bold text-sm  mt-2">₦2,800</p>
            <p className=" text-sm  mt-2 text-gray-500 line-through">₦3,500</p>
          </div>
          <p className=" absolute rounded-full px-2 py-3 bg-tomato top-3 text-white left-44">
            50%
          </p>

          {/* <p className=" absolute rounded-full px-2 py-3 bg-green-400 top-3 text-white right-3">
          New
        </p> */}
          <div className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold">
            Add To Cart
          </div>
        </div>
        {/* sixth////////////////////////////////////// */}
        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img className="w-60" src="/Images.png" alt="" />
          <div className="ml-5">
            <h2 className="font-bold  mt-2">Face Foam Wash</h2>
            <p className="font-light text-sm  mt-2">Face & Lip</p>

            <p className="font-bold text-sm  mt-2">₦2,800</p>
            <p className=" text-sm  mt-2 text-gray-500 line-through">₦3,500</p>
          </div>
          <p className=" absolute rounded-full px-2 py-3 bg-tomato top-3 text-white left-44">
            50%
          </p>

          {/* <p className=" absolute rounded-full px-2 py-3 bg-green-400 top-3 text-white right-3">
          New
        </p> */}
          <div className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold">
            Add To Cart
          </div>
        </div>
        {/* seventh/////////////////////////////// */}
        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img className="w-60" src="/Images.png" alt="" />
          <div className="ml-5">
            <h2 className="font-bold  mt-2">Face Foam Wash</h2>
            <p className="font-light text-sm  mt-2">Face & Lip</p>

            <p className="font-bold text-sm  mt-2">₦2,800</p>
            <p className=" text-sm  mt-2 text-gray-500 line-through">₦3,500</p>
          </div>
          <p className=" absolute rounded-full px-2 py-3 bg-tomato top-3 text-white left-44">
            50%
          </p>

          {/* <p className=" absolute rounded-full px-2 py-3 bg-green-400 top-3 text-white right-3">
          New
        </p> */}
          <div className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold">
            Add To Cart
          </div>
        </div>
        {/* eigth////////////////////////////////// */}
        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img className="w-60" src="/Images.png" alt="" />
          <div className="ml-5">
            <h2 className="font-bold  mt-2">Face Foam Wash</h2>
            <p className="font-light text-sm  mt-2">Face & Lip</p>

            <p className="font-bold text-sm  mt-2">₦2,800</p>
            <p className=" text-sm  mt-2 text-gray-500 line-through">₦3,500</p>
          </div>
          <p className=" absolute rounded-full px-2 py-3 bg-tomato top-3 text-white left-44">
            50%
          </p>

          {/* <p className=" absolute rounded-full px-2 py-3 bg-green-400 top-3 text-white right-3">
          New
        </p> */}
          <div className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold">
            Add To Cart
          </div>
        </div>
        {/* ninth/////////////////////////////// */}
        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img className="w-60" src="/Images.png" alt="" />
          <div className="ml-5">
            <h2 className="font-bold  mt-2">Face Foam Wash</h2>
            <p className="font-light text-sm  mt-2">Face & Lip</p>

            <p className="font-bold text-sm  mt-2">₦2,800</p>
            <p className=" text-sm  mt-2 text-gray-500 line-through">₦3,500</p>
          </div>
          <p className=" absolute rounded-full px-2 py-3 bg-tomato top-3 text-white left-44">
            50%
          </p>

          {/* <p className=" absolute rounded-full px-2 py-3 bg-green-400 top-3 text-white right-3">
          New
        </p> */}
          <div className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold">
            Add To Cart
          </div>
        </div>
        {/* tenth////////////////////////////////// */}
        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img className="w-60" src="/Images.png" alt="" />
          <div className="ml-5">
            <h2 className="font-bold  mt-2">Face Foam Wash</h2>
            <p className="font-light text-sm  mt-2">Face & Lip</p>

            <p className="font-bold text-sm  mt-2">₦2,800</p>
            <p className=" text-sm  mt-2 text-gray-500 line-through">₦3,500</p>
          </div>
          <p className=" absolute rounded-full px-2 py-3 bg-tomato top-3 text-white left-44">
            50%
          </p>

          {/* <p className=" absolute rounded-full px-2 py-3 bg-green-400 top-3 text-white right-3">
          New
        </p> */}
          <div className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold">
            Add To Cart
          </div>
        </div>
        {/* eleventh///////////////////////////// */}
        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img className="w-60" src="/Images.png" alt="" />
          <div className="ml-5">
            <h2 className="font-bold  mt-2">Face Foam Wash</h2>
            <p className="font-light text-sm  mt-2">Face & Lip</p>

            <p className="font-bold text-sm  mt-2">₦2,800</p>
            <p className=" text-sm  mt-2 text-gray-500 line-through">₦3,500</p>
          </div>
          <p className=" absolute rounded-full px-2 py-3 bg-tomato top-3 text-white left-44">
            50%
          </p>

          {/* <p className=" absolute rounded-full px-2 py-3 bg-green-400 top-3 text-white right-3">
          New
        </p> */}
          <div className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold">
            Add To Cart
          </div>
        </div>
        {/* twelvth////////////////////////////////// */}
        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img className="w-60" src="/Images.png" alt="" />
          <div className="ml-5">
            <h2 className="font-bold  mt-2">Face Foam Wash</h2>
            <p className="font-light text-sm  mt-2">Face & Lip</p>

            <p className="font-bold text-sm  mt-2">₦2,800</p>
            <p className=" text-sm  mt-2 text-gray-500 line-through">₦3,500</p>
          </div>
          <p className=" absolute rounded-full px-2 py-3 bg-tomato top-3 text-white left-44">
            50%
          </p>

          {/* <p className=" absolute rounded-full px-2 py-3 bg-green-400 top-3 text-white right-3">
          New
        </p> */}
          <div className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold">
            Add To Cart
          </div>
        </div>
        {/* thirthent////////////////////////// */}
        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img className="w-60" src="/Images.png" alt="" />
          <div className="ml-5">
            <h2 className="font-bold  mt-2">Face Foam Wash</h2>
            <p className="font-light text-sm  mt-2">Face & Lip</p>

            <p className="font-bold text-sm  mt-2">₦2,800</p>
            <p className=" text-sm  mt-2 text-gray-500 line-through">₦3,500</p>
          </div>
          <p className=" absolute rounded-full px-2 py-3 bg-tomato top-3 text-white left-44">
            50%
          </p>

          {/* <p className=" absolute rounded-full px-2 py-3 bg-green-400 top-3 text-white right-3">
          New
        </p> */}
          <div className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold">
            Add To Cart
          </div>
        </div>
        {/* fourtrnth//////////////////////////// */}

        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img className="w-60" src="/Images.png" alt="" />
          <div className="ml-5">
            <h2 className="font-bold  mt-2">Face Foam Wash</h2>
            <p className="font-light text-sm  mt-2">Face & Lip</p>

            <p className="font-bold text-sm  mt-2">₦2,800</p>
            <p className=" text-sm  mt-2 text-gray-500 line-through">₦3,500</p>
          </div>
          <p className=" absolute rounded-full px-2 py-3 bg-tomato top-3 text-white left-44">
            50%
          </p>

          {/* <p className=" absolute rounded-full px-2 py-3 bg-green-400 top-3 text-white right-3">
          New
        </p> */}
          <div className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold">
            Add To Cart
          </div>
        </div>
        {/* fiftnent//////////////////////////////// */}
        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img className="w-60" src="/Images.png" alt="" />
          <div className="ml-5">
            <h2 className="font-bold  mt-2">Face Foam Wash</h2>
            <p className="font-light text-sm  mt-2">Face & Lip</p>

            <p className="font-bold text-sm  mt-2">₦2,800</p>
            <p className=" text-sm  mt-2 text-gray-500 line-through">₦3,500</p>
          </div>
          <p className=" absolute rounded-full px-2 py-3 bg-tomato top-3 text-white left-44">
            50%
          </p>

          {/* <p className=" absolute rounded-full px-2 py-3 bg-green-400 top-3 text-white right-3">
          New
        </p> */}
          <div className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold">
            Add To Cart
          </div>
        </div>
        {/* sixtenth/////////////////////////////// */}
        <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
          <img className="w-60" src="/Images.png" alt="" />
          <div className="ml-5">
            <h2 className="font-bold  mt-2">Face Foam Wash</h2>
            <p className="font-light text-sm  mt-2">Face & Lip</p>

            <p className="font-bold text-sm  mt-2">₦2,800</p>
            <p className=" text-sm  mt-2 text-gray-500 line-through">₦3,500</p>
          </div>
          <p className=" absolute rounded-full px-2 py-3 bg-tomato top-3 text-white left-44">
            50%
          </p>

          {/* <p className=" absolute rounded-full px-2 py-3 bg-green-400 top-3 text-white right-3">
          New
        </p> */}
          <div className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold">
            Add To Cart
          </div>
        </div>
      </main>
      <div className="flex justify-center items-center gap-10 mt-10">
        <Link
          className="bg-primaryBlue w-14 h-14 rounded-lg text-white"
          to="/ShopProduct"
        >
          1
        </Link>

        <button className="bg-gray-500 text-black w-14 h-14 rounded-lg">
          2
        </button>
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
