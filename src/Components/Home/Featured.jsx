import React from "react";

const Featured = () => {
  return (
    <div className="flex justify-around items-center bg-milk p-10  max-sm:flex-wrap  mt-10 md:flex gap-5">
      <div className="flex flex-col gap-5 justify-center items-center w-40  mb-10">
        <h1 className="text-2xl font-bold text-nowrap sm:text-wrap sm:text-center">
          Featured Product
        </h1>
        <p className="text-xs sm:text-wrap sm:text-center md:text-nowrap">
          Our Top Pick for you
        </p>
        <button className="bg-primaryBlue text-white font-bold p-3 sm:w-20 sm:h-10 sm:text-xs sm:text-nowrap sm:p-0   md:self-start -mb-5 hover:rounded-lg">
          Add To Cart
        </button>
      </div>
      <div className="featured flex justify-between w-full h-64  sm:p-5  p-2  md:px-10">
        {/* <img className="w-full drop-shadow-md" src="./image 1.png" alt="" /> */}
        <div className="self-end flex justify-between items-center w-full ">
          <p className="">$ 10,000.00</p>
          <p className=" text-sm text-gray-500 line-through ">$ 20,000</p>
        </div>
        <p
          className="
        bg-tomato  text-white right-3 rounded-full  px-1 py-2 w-10 self-start "
        >
          50%
        </p>
      </div>
      <div className="w-128   bg-white px-5 py-5 mt-10 flex flex-col gap-5 sm:h-56  sm:mt-0 sm:overflow-scroll md:h-64">
        <h3 className="text-2xl font-bold text-primaryBlue">
          Velte Ayurvedic Hair Butter:
        </h3>
        <h4 className="text-md font-bold text-primaryBlue ">
          Natural Ingredients, Powerful Results
        </h4>
        <p className="text-sm ">
          Introducing our Ayurvedic Hair Butter, a luxurious blend designed to
          transform your hair care routine with the ancient wisdom of Ayurveda.
          Crafted with a unique combination of natural ingredients, this hair
          butter promises to provide deep conditioning, strength, and luster to
          your hair.
        </p>
        <h3 className="text-md font-bold text-primaryBlue ">Key Ingredients</h3>
        <ul className="list-disc ml-10">
          <li>Shea Butter</li>
          <li>Fenugreek Seed</li>
          <li>Rosemary Leaves</li>
          <li>Clove Flower Bud</li>
          <li>Olive Oil</li>
          <li>Coconut Oil</li>
          <li>Avocado Oil</li>
          <li>Tea Tree Essential Oil</li>
          <li>Peppermint Essential Oil</li>
        </ul>
        <h3 className="text-xl font-bold text-primaryBlue ">
          FOR ALL HAIR TYPES
        </h3>
      </div>
    </div>
  );
};

export default Featured;
