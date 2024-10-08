import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="bg-lightPink  flex flex-col justify-center items-center overflow-hidden">
      <div className="">
        <img
          className="w-full h-28 sm:h-40 md:h-56 lg:h-64 xl:h-80 2xl:h-96"
          src="./IMG1/Rectangle 1.png"
          alt=""
        />
        <div className="  md:top-32 md:left-128 flex justify-center items-center gap-2 text-Greydarker flex-col -mt-16 sm:-mt-20 md:-mt-32 mb-5 2xl:-mt-44">
          <h1 className="text-md  top-5 left-32 md:top-20 md:left-130 md:text-2xl font-bold text-Greydarker">
            Cart
          </h1>

          <div className="  md:top-32 md:left-128 flex justify-center items-center gap-2 text-Greydarker">
            <Link className="text-xs md:text-sm font-bold " to="/">
              Home
            </Link>
            <img
              className="w-2 h-3 md:w-3 md:h-4 "
              src="./icons/Vector(2).png"
              alt=""
            />
            <p className="text-xs md:text-sm">Cart</p>
          </div>
        </div>
      </div>
      <div className="flex gap-5  items-center py-5 bg-lightPink flex-wrap self-start ml-5 sm:ml-8 sm:self-start mt-5 md:mt-16 md:ml-12 lg:ml-14 xl:mt-24">
        <p className="text-xs md:text-sm font-bold text-primaryBlue">Cart</p>
        <img className="w-2 h-2  " src="./icons/Vector(2).png" alt="" />
        <p className="text-xs md:text-sm text-Greydarker">Information</p>
        <p className="text-xs md:text-sm text-Greydarker">Payment & Shipping</p>
      </div>

      <div className="flex gap-20 flex-col lg:flex-row justify-center items-center md:items-start lg:gap-10   xl:justify-between xl:w-full xl:px-10 2xl:mt-10">
        <div className="p-0  ">
          <div className="flex flex-col justify-center items-start p-5 gap-2 bg-white flex-wrap w-72 sm:w-128  md:w-140  mb-5 lg:w-128 xl:w-142 2xl:w-150">
            <h1 className="text-primaryBlue text-2xl font-bold ">
              Shopping Cart
            </h1>
            <p className="font-semibold underline text-Greydarker">
              Deselect All Items
            </p>
          </div>
          <div className="bg-white md:bg-white w-72 sm:w-128 md:w-140  flex  flex-col md:flex-wrap lg:w-128 xl:w-142 xl:h-128 xl:py-20 2xl:w-150">
            <div className="mt-5  p-5 flex  items-center gap-2 flex-wrap">
              <p>Cart (1)</p>
              <img className="w-2 h-2  " src="./icons/Vector(2).png" alt="" />
            </div>
            <div className="flex flex-col md:flex-wrap bg-white">
              <div
                className="border-b-2 border-b-solid border-b-Greydarker
              border-t-2 border-t-solid border-t-Greydarker 
              flex justify-between px-5 sm:justify-end sm:gap-20 sm:px-14 py-5 md:flex-wrap text-xs md:text-lg "
              >
                <p className="text-center">Product</p>
                <p className="text-center"> Name</p>
                <p>Quantity</p>
                <p>Price</p>
              </div>
              <div className="flex  items-center sm:justify-between sm:py-5 sm:px-5  md:justify-between md:items-center md:p-5 p-0 lg:gap-5 gap-3 bg-white  text-xs">
                <input className="self-center" type="checkbox" />
                <img
                  className="w-10 sm:w-20 md:w-28 rounded-sm"
                  src="image 1(1).png"
                  alt=""
                />
                <div className="flex flex-col gap-1 flex-wrap ">
                  <h3 className="text-xs md:text-xl font-bold">Hair Shampoo</h3>
                  <p className="text-xs md:text-sm">Hair Care</p>
                  <p className="text-primaryBlue font-bold s">In Stock</p>
                  <div className="text-primaryBlue font-bold md:flex md:gap-2 mt-2 cursor-pointer">
                    <p
                      className=" 
                    border-b-2 border-b-solid border-b-primaryBlue
                    md:border-r-2 md:border-r-solid md:border-r-primaryBlue  md:pr-2"
                    >
                      Save For Later
                    </p>
                    <p>Remove</p>
                  </div>
                </div>
                <input
                  className="w-10 h-3 md:h-5 md:w-16 rounded-sm border-Greydarker border-2 border-solid py-3 md:px-2 "
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  max="5"
                ></input>
                <p className="nd:ml-14 font-bold">₦ 5,000.00</p>
              </div>
            </div>
            <div
              className="flex justify-end gap-14 px-5 py-5 items-center border-b-2 border-b-solid border-b-Greydarker
              border-t-2 border-t-solid border-t-Greydarker  flex-wrap "
            >
              <p className="text-xs">Subtotal (1 items)</p>
              <h2 className="font-bold text-xs">₦ 10,000.00</h2>
            </div>
          </div>
        </div>

        <div className="flex flex-col  flex-wrap  w-72 sm:w-128  text-xs sm:justify-center sm:items-center  lg:w-128 ">
          <div className="bg-white py-5 px-10  w-72 sm:w-128 md:w-140 lg:w-80 xl:w-96 xl:h-96 2xl:w-130">
            <h3 className="text-Greydarker text-center border-b-2 border-b-Greydarker border-b-solid font-bold py-3 ">
              Order Summary
            </h3>
            <div className="flex  border-b-2  border-b-Greydarker border-b-solid gap-32 justify-center text-Greydarker mt-10 pb-5   ">
              <ul className="flex flex-col gap-2 ">
                <li className="text-xs font-bold sm:text-xs text-nowrap ">
                  Items Total (2)
                </li>
                <li>Discount</li>
                <li className="font-bold">Subtotal</li>
                <li className="font-bold">Shipping</li>
                <li>Duties & Taxes</li>
              </ul>
              <ul className="flex flex-col gap-2">
                <li className="font-bold text-xs">₦10,000.00</li>
                <li>₦00,00</li>
                <li className="font-bold">₦10,000.00</li>
                <li className="font-bold">₦1,000.00</li>
                <li>₦100.00</li>
              </ul>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 mt-5">
              <div className="flex gap-20 text-Greydarker">
                <p className="font-bold">Total</p>
                <p className="font-bold">₦11,100.00</p>
              </div>
              <Link
                className="bg-primaryBlue text-white px-8 py-2 font-bold rounded-sm"
                to="/Information"
              >
                Proceed To Checkout
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-10 bg-white py-5 w-72 px-10 sm:w-128 md:w-140 lg:w-80 xl:w-96 xl:h-72 xl:mt-7 2xl:w-130">
            <p>Payment Method</p>
            <div className="flex gap-5 h-6 mt-5">
              <img src="./icons/Mastercard.png" alt="" />
              <img src="./icons/visa-logo.png" alt="" />
              <img src="./icons/Vector(9).png" alt="" />
            </div>
            <div className="flex flex-col items-start justify-center  py-5 gap-2 ">
              <div className="flex gap-5 justify-center mt-5 w-52 self-center ">
                <img src="./icons/shield-check.png" alt="" />
                <p className="text-Green text-wrap ">Buyer Protection</p>
              </div>
              <p className=" text-Greydarker text-center ">
                Get full refund if the item is not as described or if is not
                delivered
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center bg-white py-10 mt-10 self-center ">
        <h1 className="text-xl font-semibold">Recommended Products</h1>
        <main className="flex flex-wrap gap-20 p-5 justify-center">
          <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
            <img className="w-60" src="/image 1(4).png" alt="" />
            <div className="ml-5">
              <h2 className="font-bold  mt-2">Hair Conditioner</h2>
              <p className="font-light text-sm  mt-2">Hair Care</p>

              <p className="font-bold text-sm  mt-2">₦5,000</p>
            </div>

            <Link
              className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold cursor-pointer"
              to="/Shop"
            >
              Add To Cart
            </Link>
          </div>
          <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
            <img className="w-60" src="/prodimg/Images.png" alt="" />
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
              className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold cursor-pointer"
              to="/Shop"
            >
              Add To Cart
            </Link>
          </div>
          <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
            <img className="w-60" src="./image 1.png" alt="" />
            <div className="ml-5">
              <h2 className="font-bold  mt-2"> Aryuvedic Hair Butter</h2>
              <p className="font-light text-sm  mt-2">Hair Care</p>

              <p className="font-bold text-sm  mt-2">₦10,000</p>
              <p className=" text-sm  mt-2 text-gray-500 line-through">
                ₦20,000
              </p>
            </div>
            <p className=" absolute rounded-full px-2 py-4 bg-tomato top-3 text-white left-44">
              -50%
            </p>

            <Link
              className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold cursor-pointer"
              to="/Shop"
            >
              Add To Cart
            </Link>
          </div>
          <div className="bg-LightGrey relative pb-5 drop-shadow-xl ">
            <img className="w-60" src="/prodimg/image 1-3.png" alt="" />
            <div className="ml-5">
              <h2 className="font-bold  mt-2">Edge Control</h2>
              <p className="font-light text-sm  mt-2">Hair Care</p>

              <p className="font-bold text-sm  mt-2">₦ 7,000.00</p>
              <p className=" text-sm  mt-2 text-gray-500 line-through">
                ₦14,000
              </p>
            </div>
            <p className=" absolute rounded-full px-2 py-4 bg-tomato top-3 text-white left-44">
              -50%
            </p>

            {/* <p className=" absolute rounded-full px-2 py-3 bg-green-400 top-3 text-white right-3">
          New
        </p> */}
            <Link
              className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold cursor-pointer"
              to="/Shop"
            >
              Add To Cart
            </Link>
          </div>
        </main>

        <Link
          className="border-2 border-solid border-primaryBlue text-primaryBlue bg-white px-8 py-2 mt-10"
          to="/Shop"
        >
          Show More
        </Link>
      </div>
    </div>
  );
};

export default Cart;
