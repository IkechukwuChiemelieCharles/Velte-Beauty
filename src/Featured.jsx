import React from "react";

const Featured = () => {
  return (
    <div className="flex justify-around items-center bg-milk p-10 flex-wrap">
      <div className="flex flex-col gap-5 justify-center items-center w-40 mb-10">
        <h1 className="text-2xl font-bold text-nowrap">Featured Product</h1>
        <p className="text-xs">Our Top Pick for you</p>
        <button className="bg-primaryBlue text-white font-bold p-3 md:self-start -mb-5 hover:rounded-lg">
          Add To Cart
        </button>
      </div>
      <div className="relative w-96 mb-10">
        <img className="w-full drop-shadow-md" src="./image 1.png" alt="" />
        <p className="absolute bottom-10 left-10">$ 10,000.00</p>
        <p className="absolute bottom-10 right-10 text-sm  mt-2 text-gray-500 line-through">
          $ 20,000
        </p>
        <p
          className="
        bg-tomato top-3 text-white right-3 rounded-full absolute px-1 py-2 "
        >
          50%
        </p>
      </div>
      <div className="w-128   bg-white px-5 py-2">
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
        <h3 className="text-2xl font-bold text-primaryBlue ">
          FOR ALL HAIR TYPES
        </h3>
      </div>
    </div>
  );
};

export default Featured;
