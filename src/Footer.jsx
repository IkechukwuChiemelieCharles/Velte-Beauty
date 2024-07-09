import React from "react";

const Footer = () => {
  return (
    <footer className="bg-Greydarker w-full flex flex-col justify-center ">
      <div className="  flex flex-wrap gap-10 md:gap-5 text-white justify-center md:justify-around p-10">
        <div className="flex  gap-10 justify-center items-start">
          <img className="-mt-5" src="./prodimg2/Velte logo.png" alt="" />
          <h1 className="font-bold text-xl ">Velte Beauty</h1>
          {/* <p className="text-sm w-56">
        
        </p> */}
        </div>
        <ul className="flex flex-col gap-5">
          <li className="mb-5 text-bold">Links</li>
          <li>Home</li>
          <li>Shop</li>
          <li>Cart</li>
          <li>Contact</li>
        </ul>

        <div className="flex flex-col  gap-5">
          <p>Contact</p>
          <div className="flex flex-col gap-5">
            <div className="flex justify-start items-center gap-5">
              <img src="/icons/Vector(10).png" alt="" />
              <p>090123456789</p>
            </div>
            <div className="flex justify-start items-center gap-5">
              <img src="/icons/Vector(12).png" alt="" />
              <p>veltebeauty@gmail.com</p>
            </div>
            <div className="flex justify-start items-center gap-5">
              <img src="/icons/Vector(11).png" alt="" />
              <p className="w-52">
                Unity Quarters, Orita Obele Estate, Road Block, Akure, Ondo
                State
              </p>
            </div>

            {/* <input
            className="bg-Greydarker h-10 border-b-2 border-b-white border-b-solid"
            type="email"
            placeholder="Enter Your Email Address"
          />
          <button
            className="border-b-2 h-10 border-b-white border-b-solid"
            type="submit"
          >
            SUBSCRIBE
          </button> */}
          </div>
        </div>
      </div>
      <div className="flex gap-5 self-center items-center ">
        <img src="./prodimg2/mdi_gmail.png" alt="" />
        <img src="./prodimg2/mdi_instagram.png" alt="" />
        <img src="./prodimg2/mdi_linkedin.png" alt="" />
        <img src="./prodimg2/Vector.png" alt="" />
        <img src="./prodimg2/Vector-1.png" alt="" />
      </div>
      <hr className="w-40 md:w-140 border-2 border-solid border-white self-center mt-5 mb-5" />
      <p className=" text-white">2024 Velte Beauty. All rights reserved</p>
    </footer>
  );
};

export default Footer;
