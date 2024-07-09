import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="w-full overflow-hidden">
      <header className="relative  w-full  ">
        <img className="w-full" src="./IMG1/Rectangle 1.png" alt="" />

        <div className="  md:top-32 md:left-128 flex justify-center items-center gap-2 text-Greydarker flex-col -mt-16 md:-mt-32 mb-32 ">
          <h1 className="text-md  top-5 left-32 md:top-20 md:left-130 md:text-2xl font-bold text-Greydarker">
            Contact
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
            <p className="text-xs md:text-sm">Contact</p>
          </div>
        </div>
      </header>
      <main className=" mt-5 md:mt-10">
        <h1 className="text-center text-xl font-bold text-Greydarker">
          Get In Touch With Us
        </h1>
        <p className="text-center text-sm text-Greydarker px-10 mt-5 md:px-80">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
        {/* sjfjh//////////////////////// */}
        <div className="flex flex-col md:flex-row  justify-center items-center md:items-start mt-20 gap-20">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center md:items-start ">
              <div className="flex justify-center md:justify-start items-center md:items-start gap-5">
                <img className="w-4 h-5" src="./icons/Vector(6).png" alt="" />

                <h2 className="text-lg font-bold text-Greydarker">Address</h2>
              </div>
              <p className="w-52 text-center md:text-start">
                Unity Quarters, Orita Obele Estate, Road Block, Akure, Ondo
                State
              </p>
            </div>
            <div className="">
              <div className="flex justify-center md:justify-start items-start gap-5 mt-5">
                <img className="w-5 h-5" src="/icons/Vector(7).png" alt="" />
                <h2 className="text-lg font-bold text-Greydarker">Phone</h2>
              </div>

              <p className="text-center md:text-start">
                Hotline: +(01) 189-6789-3488
              </p>
              <p className="text-center md:text-start">
                Mobile: +(234) 9266-6789-10
              </p>
              <div className="flex justify-center md:justify-start items-start gap-5 mt-5">
                <img className="w-5 h-5" src="/icons/Vector(8).png" alt="" />
                <h2 className="text-lg font-bold text-Greydarker">
                  Working Time
                </h2>
              </div>
              <p className="text-center">Monday-Friday: 9:00 - 22:00</p>
              <p className="text-center">Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
          <form
            action=""
            className="flex flex-col md:justify-start md:items-start justify-center items-center"
          >
            <p className="font-bold text-Greydarker text-sm px-5 self-start ">
              Your Name
            </p>
            <input
              type="text"
              placeholder="Abc"
              className="w-72 md:w-80 h-12 border-2 border-gray-400 border-solid rounded-md px-5 mt-4  "
            />
            <p className="font-bold text-Greydarker text-sm mt-8 px-5 self-start">
              Email Address
            </p>
            <input
              type="email"
              placeholder="Abc@def.com"
              className="w-72 md:w-80 h-12 border-2 border-gray-400 border-solid rounded-md px-5 mt-4"
            />
            <p className="font-bold text-Greydarker text-sm mt-8 self-start px-5">
              Subject
            </p>
            <input
              type="text"
              placeholder="This is Optional"
              className="w-72 md:w-80 h-12 border-2 border-gray-400 border-solid rounded-md px-5 mt-4"
            />
            <p className="font-bold text-Greydarker text-sm mt-8 self-start px-5">
              Message
            </p>
            <textarea
              name=""
              id=""
              placeholder="Hi i'd like to ask about"
              className="w-72 md:w-80 h-36 border-2 border-gray-400 border-solid rounded-md px-5 py-5 mt-4"
            ></textarea>
            <button
              type="submit"
              className="bg-primaryBlue text-white px-8 py-2 rounded-md mt-5 "
            >
              Submit
            </button>
          </form>
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
              <h3 className="text-lg font-bold text-Greydarker">
                Free Shipping
              </h3>
              <p>Order over ₦20,000</p>
            </div>
          </div>
          <div className="flex justify-start items-center gap-2 text-sm text-Greydarker mt-10 md:mt-0 flex-col md:flex-row">
            <img src="./customer-support.png" alt="" />
            <div>
              <h3 className="text-lg font-bold text-Greydarker">
                24/7 Support{" "}
              </h3>
              <p>Dedicated Support</p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default Contact;
