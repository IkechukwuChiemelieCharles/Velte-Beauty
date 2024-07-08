import React from "react";
import { useState } from "react";

const Products = ({
  imageurl,
  name,
  detail,
  price,
  dashprice,
  btn,
  greenButton,
  redButton,
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
        className="bg-LightGrey relative pb-5 drop-shadow-xl "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img className="w-60" src={imageurl} alt="{name}" />
        <div className="ml-5">
          <h2 className="font-bold  mt-2">{name}</h2>
          <p className="font-light text-sm  mt-2">{detail}</p>
          <div className="flex items-center gap-2">
            <p className="font-bold text-sm  mt-2">{price}</p>
            <p className=" text-sm  mt-2 text-gray-500 line-through">
              {dashprice}
            </p>
          </div>
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

        {isHovered && (
          <div className="absolute top-0 left-0 w-full h-full bg-overlay flex flex-col justify-center items-center opacity-85">
            <button className="m-5 p-5 bg-primaryBlue text-white cursor-pointer">
              View Product
            </button>
            <button className="m-5 p-5 bg-white text-primaryBlue cursor-pointer">
              Add to Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
