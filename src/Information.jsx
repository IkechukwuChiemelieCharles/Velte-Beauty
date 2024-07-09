import React from "react";
import { Link } from "react-router-dom";

const Information = () => {
  return (
    <div className="overflow-hidden">
      <div>
        <img className="w-full" src="./IMG1/Rectangle 1.png" alt="" />
        <div className="  md:top-32 md:left-128 flex justify-center items-center gap-2 text-Greydarker flex-col -mt-16 md:-mt-32 mb-16 ">
          <h1 className="text-md  top-5 left-32 md:top-20 md:left-130 md:text-2xl font-bold text-Greydarker">
            Cart
          </h1>

          <div className="  md:top-32 md:left-128 flex justify-center items-center gap-2 text-Greydarker">
            <p className="text-xs md:text-sm font-bold ">Home</p>
            <img
              className="w-2 h-3 md:w-3 md:h-4 "
              src="./icons/Vector(2).png"
              alt=""
            />
            <p className="text-xs md:text-sm">Cart</p>
          </div>
        </div>
      </div>
      {/* end of <header></header>///////////////////////////////////////////// */}
      <div className="flex gap-5  items-center p-5 bg-lightPink flex-wrap">
        <p className="text-xs md:text-sm text-Greydarker">Cart</p>
        <img className="w-2 h-2  " src="./icons/Vector(2).png" alt="" />
        <p className="text-xs md:text-sm  font-bold text-primaryBlue">
          Information
        </p>
        <img className="w-2 h-2  " src="./icons/Vector(2).png" alt="" />

        <p className="text-xs md:text-sm text-Greydarker">Payment & Shipping</p>
      </div>

      {/* end of list/////////////////////////////////////////// */}

      <div>
        <h2>Contact Information</h2>
        <input type="email" placeholder="Email" />
        <input type="checkbox" placeholder="Email Me With News And Offers" />

        <p>Delivery</p>
        <input type="radio" name="Ship" id="Ship" />

        <input type="radio" name="Ship" id="Pick Up" />
        {/* <Link
          className="bg-primaryBlue text-white px-8 py-2 font-bold rounded-sm"
          to="/Payment"
        >
          Proceed To Checkout
        </Link> */}
      </div>
      {/* end of payment////////////////////////////////////////// */}

      <div className="flex flex-col flex-wrap px-5 ">
        <div className="bg-white py-5 px-5">
          <h3 className="text-Greydarker text-center border-b-2 border-b-Greydarker border-b-solid font-bold py-3">
            Order Summary
          </h3>
          <div className="flex border-b-2 border-b-Greydarker border-b-solid gap-32 justify-center text-Greydarker mt-10 pb-5">
            <ul className="flex flex-col gap-2">
              <li className="font-bold text-lg ">Items Total (2)</li>
              <li>Discount</li>
              <li className="font-bold">Subtotal</li>
              <li className="font-bold">Shipping</li>
              <li>Duties & Taxes</li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li className="font-bold text-lg">₦10,000.00</li>
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
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-10 bg-white py-5">
          <p>Payment Method</p>
          <div className="flex gap-5 h-6 mt-5">
            <img src="./icons/Mastercard.png" alt="" />
            <img src="./icons/visa-logo.png" alt="" />
            <img src="./icons/Vector(9).png" alt="" />
          </div>
          <div className="flex flex-col items-start justify-center  p-5 gap-2">
            <div className="flex gap-5">
              <img src="./icons/shield-check.png" alt="" />
              <p className="text-Green">Buyer Protection</p>
            </div>
            <p className="w-80 text-Greydarker">
              Get full refund if the item is not as described or if is not
              delivered
            </p>
          </div>
        </div>
      </div>
      {/* end of card <details></details>//////////////////////////////////////////*/}
    </div>
  );
};

export default Information;
