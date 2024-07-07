import React from "react";

const Footer = () => {
  return (
    <footer className="bg-Greydarker w-full flex flex-wrap gap-10 md:gap-5 text-white justify-center md:justify-around p-10">
      <div className="flex flex-col gap-10">
        <h1 className="font-bold text-xl">Velte Beauty</h1>
        <p className="text-sm w-56">
          Unity Quarters, Orita Obele Estate, Road Block, Akure, Ondo State
        </p>
      </div>
      <ul className="flex flex-col gap-5">
        <li>Links</li>
        <li>Home</li>
        <li>Shop</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <ul className="flex flex-col gap-5">
        <li>Help</li>
        <li>Payment Options</li>
        <li>Returns</li>
        <li>Privacy Policies</li>
      </ul>
      <div className="flex flex-col  gap-5">
        <p>Newsletter</p>
        <div className="flex gap-5">
          <input
            className="bg-Greydarker h-10 border-b-2 border-b-white border-b-solid"
            type="email"
            placeholder="Enter Your Email Address"
          />
          <button
            className="border-b-2 h-10 border-b-white border-b-solid"
            type="submit"
          >
            SUBSCRIBE
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
