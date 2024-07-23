import React from "react";
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <div className="overflow-hidden bg-milk md:py-142">
      <div className="flex md:gap-5 gap-2  items-center p-5 bg-lightPink flex-wrap md:absolute md:top-12 md:left-0 md:w-full">
        <Link className="text-xs lg:text-sm text-Greydarker " to="/cart">
          Cart
        </Link>
        <img className="w-2 h-2  " src="./icons/Vector(2).png" alt="" />
        <Link className="text-xs lg:text-sm text-Greydarker " to="/information">
          Information
        </Link>
        <img className="w-2 h-2  " src="./icons/Vector(2).png" alt="" />

        <p className="text-xs md:text-sm font-bold text-primaryBlue">
          Payment & Shipping
        </p>
        <img className="w-2 h-2  " src="./icons/Vector(2).png" alt="" />
      </div>
      {/* end of list/////////////////////////////////////////// */}
      <div className="flex flex-col justify-center items-center ">
        <form
          action=""
          className="w-80 sm:w-128 md:w-96 md:absolute md:left-5 md:top-44 lg:left-20 xl:left-36 flex flex-col justify-center items-center px-5 gap-5 bg-white py-10 "
        >
          <div className="border-solid border-2 border-Greydarker w-72 mt-5 sm:w-96 ">
            <div className="flex gap-5 p-2">
              <h3 className="text-sm font-bold ">Contact</h3>
              <input
                className="border-b-solid border-b-Greydarker border-b-2 w-36 text-sm pb-2 px-2 sm:w-96"
                type="text"
                placeholder="Phone"
              />
            </div>
            <div className="flex gap-5 p-2">
              <h3 className="text-sm font-bold">Ship to</h3>
              <input
                className="w-36 text-sm pb-2 px-2"
                type="text"
                placeholder="Address"
              />
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg self-start ">Shipping Method</h3>
            <div className="border-2 border-solid border-Greydarker w-72 p-2 text-sm  sm:w-96">
              <div className="flex justify-between items-center">
                <div className="flex gap-5">
                  <input
                    type="radio"
                    name="shipping"
                    id="free"
                    className="border-b-solid border-b-Greydarker border-b-2  "
                  />
                  <h3 className="text-sm border-b-solid border-b-Greydarker border-b-2 py-2 w-36   sm:w-72">
                    Free Shipping
                  </h3>
                </div>
                <p>Free</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-5">
                  <input
                    type="radio"
                    name="shipping"
                    id="free"
                    className="border-b-solid border-b-Greydarker border-b-2"
                  />
                  <h3 className="text-sm border-b-solid border-b-Greydarker border-b-2 py-2  sm:w-72 text-primaryBlue">
                    Regular Shipping(7 days)
                  </h3>
                </div>
                <p className="text-primaryBlue">₦1,000</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-5">
                  <input
                    type="radio"
                    name="shipping"
                    id="free"
                    className="border-b-solid border-b-Greydarker border-b-2"
                  />
                  <h3 className="text-sm  py-2">Express Shipping(3 days)</h3>
                </div>
                <p>₦3,000</p>
              </div>
            </div>
          </div>
        </form>
        {/* form2///////////////////////////////// */}

        <form
          action=""
          className="w-72 sm:w-128 bg-white flex flex-col justify-center items-center md:w-96 py-10 md:absolute md:left-5 md:top-128 lg:left-20 xl:left-36"
        >
          <div className="border-solid border-Greydarker border-2 p-5">
            <div className="flex justify-center items-center gap-5 py-2">
              <h3 className="text-sm ">Contact </h3>

              <input
                type="text"
                className="border-b-solid border-b-Greydarker border-b-2"
                placeholder="09123456789"
              />
            </div>

            <div className="flex justify-center items-center gap-5 py-2 sm:w-80 ">
              <h3 className="text-sm ">Ship To </h3>

              <input
                type="text"
                className="border-b-solid border-b-Greydarker border-b-2 "
                placeholder="123, Bitmap street, College Road"
              />
            </div>
            <div className="flex justify-center items-center gap-5 py-2">
              <h3 className="text-sm ">Method </h3>

              <input
                type="text"
                className="border-b-solid border-b-Greydarker border-b-2"
                placeholder="Regular Shipping "
              />
            </div>
          </div>

          <div className="flex flex-col   w-72 px-5 sm:mt-10 sm:gap-5 ">
            <h3 className="self-start font-bold text-sm">Payment</h3>
            <h3 className="self-end text-primaryBlue text-sm cursor-pointer">
              Add a new card
            </h3>
            <div className="flex justify-start items-center">
              <img src="./icons/visa-logo.png" alt="" />
              <img src="./icons/Mastercard.png" alt="" />
            </div>
          </div>
          <div className="flex flex-col w-64 gap-5 mt-5 sm:w-96 md:px-5">
            <input
              type="text"
              placeholder="Card Number"
              className="border-2 border-Greydarker border-solid h-10 px-2"
            />
            <input
              type="text"
              placeholder="Cardholder Name"
              className="border-2 border-Greydarker border-solid h-10 px-2"
            />
            <input
              type="text"
              placeholder="Expiration Date (MM/YY)"
              className="border-2 border-Greydarker border-solid h-10 px-2"
            />
            <input
              type="text"
              placeholder="Security Code"
              className="border-2 border-Greydarker border-solid h-10 px-2"
            />
            <div className="flex text-sm items-center  gap-2">
              <input type="checkbox" name="" id="" />
              <p>Save this information for next time</p>
            </div>
            <div className="flex text-sm items-center  gap-2">
              <img src="./icons/Icon.png" alt="" />
              <p className="text-sm">Your order will be processed in Naira</p>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center sm:mt-5">
              <div className="flex items-center gap-2">
                <img className="w-2 h-3" src="icons/Vector.png" alt="" />
                <Link className="cursor-pointer" to="/Information">
                  Back To Information
                </Link>
              </div>
              <Link
                className="bg-primaryBlue text-white px-8 py-2 font-bold rounded-sm"
                to="/Success"
              >
                Proceed To Checkout
              </Link>
            </div>
          </div>
        </form>
      </div>
      {/* end of payment////////////////////////////////////////// */}

      <div className="flex flex-col flex-wrap md:px-5 items-center sm:mt-10 md:absolute md:-right-2 md:top-36 lg:right-10 xl:right-36">
        <div className="bg-white py-5 px-5 w-72 sm:w-128 md:w-96">
          <h3 className="text-Greydarker text-center border-b-2 border-b-Greydarker border-b-solid font-bold py-3">
            Order Summary
          </h3>
          <div className="flex border-b-2 border-b-Greydarker border-b-solid gap-10 md:gap-14 justify-center text-Greydarker mt-10 pb-5 px-20">
            <ul className="flex flex-col gap-2 ">
              <li className="font-bold text-lg text-nowrap">Items Total (2)</li>
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
        <div className="flex flex-col justify-center items-center mt-10 bg-white py-5 w-72 sm:w-128  md:w-96">
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
      {/* end of card <details></details>//////////////////////////////////////////*/}
    </div>
  );
};

export default Payment;
