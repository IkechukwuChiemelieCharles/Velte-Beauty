import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Products = ({
  imageurl,
  name,
  detail,
  price,
  dashprice,
  btn,
  greenButton,
  redButton,
  addCart,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <div
        className="bg-LightGrey relative pb-5 drop-shadow-xl  h-96 hover:rounded-lg  hover:h-120"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          className="w-60 hover:w-72  hover:rounded-lg"
          src={imageurl}
          alt="{name}"
        />
        <div className="ml-5">
          <h2 className="font-bold  mt-2">{name}</h2>
          <p className="font-light text-sm  mt-2">{detail}</p>
          <p className="font-bold text-sm  mt-2">{price}</p>
          <p className=" text-sm  mt-2 text-gray-500 line-through">
            {dashprice}
          </p>
        </div>
        {/* <p className="absolute rounded-full px-1 py-2 bg-green-600 top-3 text-white right-6">
          {greenbtn}
        </p> */}
        <p className="">{btn}</p>
        {/* {item.showButton && <button onClick={() => console.log(`Button clicked for ${item.text}`)}>Click me</button>} */}
        {redButton && (
          <p className=" absolute rounded-full px-2 py-3 bg-tomato top-3 text-white right-3">
            {redButton} 50%
          </p>
        )}
        {greenButton && (
          <p className=" absolute rounded-full px-2 py-3 bg-green-400 top-3 text-white right-3">
            {greenButton} 50%
          </p>
        )}

        {/* {isHovered && (
          <div className="absolute top-0 left-0 w-full h-full bg-overlay flex flex-col justify-center items-center opacity-85">
            <button className="m-5 p-5 bg-primaryBlue text-white cursor-pointer">
              View Product
            </button>
            <button className="m-5 p-5 bg-white text-primaryBlue cursor-pointer">
              Add to Cart
            </button>
          </div>
        )} */}

        <Link
          className="px-3 py-2 bg-lightBlue text-white w-28 text-nowrap rounded-lg absolute right-3 bottom-5 border-black border-solid border-2 font-bold hover:bg-blue-700 "
          to="/Cart"
        >
          {addCart}
        </Link>
      </div>
    </div>
  );
};

export default Products;
