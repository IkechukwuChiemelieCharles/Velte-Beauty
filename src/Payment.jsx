import React from "react";
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <div>
      <div className="flex gap-5  items-center p-5 bg-lightPink flex-wrap">
        <p className="text-xs md:text-sm text-Greydarker">Cart</p>
        <img className="w-2 h-2  " src="./icons/Vector(2).png" alt="" />
        <p className="text-xs md:text-sm text-Greydarker ">Information</p>
        <img className="w-2 h-2  " src="./icons/Vector(2).png" alt="" />

        <p className="text-xs md:text-sm font-bold text-primaryBlue">
          Payment & Shipping
        </p>
        <img className="w-2 h-2  " src="./icons/Vector(2).png" alt="" />
      </div>
      {/* end of list/////////////////////////////////////////// */}
      <div>
        <form action="" className="w-128">
          <div className="border-solid border-2 border-Greydarker">
            <div className="flex ">
              <h3 className="text-sm font-bold">Contact</h3>
              <input
                className="border-b-solid border-b-Greydarker border-b-2"
                type="text"
                placeholder="Phone"
              />
            </div>
            <div className="flex">
              <h3 className="text-sm font-bold">Ship to</h3>
              <input type="text" placeholder="Address" />
            </div>
          </div>
          <h3>Shipping Method</h3>
          <div className="border-b-2 border-b-solid border-b-Greydarker">
            <div className="flex ">
              <input
                type="radio"
                name="shipping"
                id="free"
                className="border-b-solid border-b-Greydarker border-b-2"
              />
              <h3 className="text-sm ">Free Shipping</h3>
              <p>Free</p>
            </div>
            <div className="flex ">
              <input
                type="radio"
                name="shipping"
                id="free"
                className="border-b-solid border-b-Greydarker border-b-2"
              />
              <h3 className="text-sm ">Regular Shopping (7 days)</h3>
              <p>₦1,000</p>
            </div>
            <div className="flex ">
              <input
                type="radio"
                name="shipping"
                id="free"
                className="border-b-solid border-b-Greydarker border-b-2"
              />
              <h3 className="text-sm ">Express Shipping (3 days) </h3>
              <p>₦3,000</p>
            </div>
          </div>
        </form>
        {/* form2///////////////////////////////// */}

        <form action="" className="w-128">
          <div className="border-b-solid border-b-Greydarker border-b-2">
            <div className="flex ">
              <h3 className="text-sm ">Contact </h3>

              <input
                type="text"
                className="border-b-solid border-b-Greydarker border-b-2"
                placeholder="09123456789"
              />
            </div>

            <div className="flex ">
              <h3 className="text-sm ">Ship To </h3>

              <input
                type="text"
                className="border-b-solid border-b-Greydarker border-b-2"
                placeholder="123, Bitmap street, College Road"
              />
            </div>
            <div className="flex ">
              <h3 className="text-sm ">Method </h3>

              <input
                type="text"
                className="border-b-solid border-b-Greydarker border-b-2"
                placeholder="Regular Shipping "
              />
            </div>
          </div>

          <div className="flex flex-col">
            <h3>Payment</h3>
            <h3>Add a new card</h3>
            <div>
              <img src="./icons/visa-logo.png" alt="" />
              <img src="./icons/Mastercard.png" alt="" />
            </div>
          </div>
          <div>
            <input
              type="text"
              placeholder="Card Number"
              className="border-2 border-Greydarker border-solid"
            />
            <input
              type="text"
              placeholder="Cardholder Name"
              className="border-2 border-Greydarker border-solid"
            />
            <input
              type="text"
              placeholder="Expiration Date (MM/YY)"
              className="border-2 border-Greydarker border-solid"
            />
            <input
              type="text"
              placeholder="Security Code"
              className="border-2 border-Greydarker border-solid"
            />
            <div>
              <input type="checkbox" name="" id="" />
              <p>Save this information for next time</p>
            </div>
          </div>
        </form>
        <Link
          className="bg-primaryBlue text-white px-8 py-2 font-bold rounded-sm"
          to="/Success"
        >
          Proceed To Checkout
        </Link>
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

export default Payment;
