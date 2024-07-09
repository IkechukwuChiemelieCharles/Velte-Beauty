import React from "react";
import { Link } from "react-router-dom";

const Information = () => {
  return (
    <div className="overflow-hidden bg-milk">
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
      <div className="flex gap-2 md:gap-5  items-center p-5 bg-lightPink  md:px-20">
        <p className="text-xs md:text-sm text-Greydarker">Cart</p>
        <img className="w-2 h-2  " src="./icons/Vector(2).png" alt="" />
        <p className="text-xs md:text-sm  font-bold text-primaryBlue">
          Information
        </p>
        <img className="w-2 h-2  " src="./icons/Vector(2).png" alt="" />

        <p className="text-xs md:text-sm text-Greydarker">Payment & Shipping</p>
      </div>

      {/* end of list/////////////////////////////////////////// */}
      <div className="general-cont flex-col md:flex-row flex  gap-3 px-5 md:px-20 mb-20 items-center">
        <div className="bg-white w-72 md:w-128 p-5">
          <h2 className="text-center text-xl font-bold">Contact Information</h2>
          <input
            className="w-60 md:w-96 h-8 p-2 mt-5 border-solid border-Greydarker border-2"
            type="email"
            placeholder="Email"
          />
          <div className="flex gap-3 mt-5  items-center">
            <input type="checkbox" />
            <p className="text-xs">Email Me With News And Offers</p>
          </div>
          {/* radio///////////////////////////////// */}
          <div className="flex flex-col justify-center items-center mt-8 gap-2">
            <p className="font-bold text-sm self-start">Delivery Method </p>
            <div className="flex gap-5">
              <div className="flex gap-2">
                <input
                  className="text-primaryBlue"
                  type="radio"
                  name="Delivery"
                  id="Ship"
                />
                <p>Ship</p>
              </div>

              <div className="flex gap-2">
                <input type="radio" name="Delivery" id="Pick Up" />
                <p>Pick Up</p>
              </div>
            </div>
          </div>
          {/* form?////////////////////////////// */}
          <form
            action=""
            className="bg-white md:mt-10 flex flex-col gap-5 p-5 "
          >
            <h2 className="font-bold">Shipping Address</h2>
            <div className="flex flex-col md:flex-row gap-5">
              <input
                className="md:w-72 h-10 px-5 border-solid border-Greydarker border-2"
                type="text"
                placeholder="First Name"
              />
              <input
                className="md:w-72 h-10  px-5 border-solid border-Greydarker border-2"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <input
              className="h-10 px-5 border-solid border-Greydarker border-2"
              type="text"
              placeholder="Country/Region"
            />
            <input
              className="px-5 h-10 border-solid border-Greydarker border-2"
              type="text"
              placeholder="Address"
            />

            <input
              className="h-10 px-5 border-solid border-Greydarker border-2"
              type="text"
              placeholder="Apartment, Suite etc"
            />
            <div className="flex gap-2 flex-col md:flex-row">
              <input
                className="md:w-40 h-10 px-5 border-solid border-Greydarker border-2"
                type="text"
                placeholder="City"
              />
              <input
                className="md:w-40 h-10 px-5 border-solid border-Greydarker border-2"
                type="text"
                placeholder="Province"
              />
              <input
                className="md:w-40 h-10 px-5 border-solid border-Greydarker border-2"
                type="text"
                placeholder="Postal Code"
              />
            </div>
            <input
              className="h-10 px-5 border-solid border-Greydarker border-2"
              type="text"
              placeholder="Phone"
            />
          </form>
          <div className="flex items-center gap-5 md:mt-5 px-5">
            <input type="checkbox" />
            <p className="text-Greydarker ">
              Save this information for next time
            </p>
          </div>
          <div className="flex gap-10 mt-5 flex-col md:flex-row justify-center items-center ">
            <div className="flex items-center gap-2">
              <img className="w-2 h-3" src="icons/Vector.png" alt="" />
              <Link className="cursor-pointer" to="/Cart">
                Back To Cart
              </Link>
            </div>
            <Link
              className="bg-primaryBlue text-white px-8 py-2 font-bold rounded-sm cursor-pointer"
              to="/Payment"
            >
              Continue To shipping
            </Link>
          </div>
        </div>
        {/* end of payment////////////////////////////////////////// */}

        <div className="flex flex-col flex-wrap md:px-5  ">
          <div className="bg-white py-5 px-5 w-72">
            <h3 className="text-Greydarker text-center border-b-2 border-b-Greydarker border-b-solid font-bold py-3">
              Order Summary
            </h3>
            <div className="flex border-b-2 border-b-Greydarker border-b-solid gap-10 md:gap-14 justify-center text-Greydarker mt-10 pb-5 px-20">
              <ul className="flex flex-col gap-2 ">
                <li className="font-bold text-lg text-nowrap">
                  Items Total (2)
                </li>
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
          <div className="flex flex-col justify-center items-center mt-10 bg-white py-5 w-72">
            <p>Payment Method</p>
            <div className="flex gap-5 h-6 mt-5">
              <img src="./icons/Mastercard.png" alt="" />
              <img src="./icons/visa-logo.png" alt="" />
              <img src="./icons/Vector(9).png" alt="" />
            </div>
            <div className="flex flex-col items-start justify-center  p-5 gap-2">
              <div className="flex gap-5 justify-center items-center">
                <img src="./icons/shield-check.png" alt="" />
                <p className="text-Green">Buyer Protection</p>
              </div>
              <p className="md:w-60 w-60 text-Greydarker">
                Get full refund if the item is not as described or if is not
                delivered
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* end of card <details></details>//////////////////////////////////////////*/}
    </div>
  );
};

export default Information;
