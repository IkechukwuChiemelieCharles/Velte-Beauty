import React from "react";
import { useState } from "react";

const Products = ({
  imageurl,
  name,
  detail,
  price,
  dashprice,
  btn,
  greenbtn,
}) => {
  // const productCard = () => {
  //   const [isHovered, setIsHovered] = useState(false);

  //   const handleMouseEnter = () => {
  //     setIsHovered(true);
  //   };
  //   const handleMouseLeave = () => {
  //     setIsHovered(false);
  //   };
  // };
  return (
    <div>
      <div
        className="bg-LightGrey relative pb-5 drop-shadow-xl "
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
      >
        <img className="w-60" src={imageurl} alt="{name}" />
        <h2 className="font-bold  mt-2">{name}</h2>
        <p className="font-light text-sm  mt-2">{detail}</p>
        <div className="flex items-center gap-2">
          <p className="font-bold text-sm  mt-2">{price}</p>
          <p className=" text-sm  mt-2 text-gray-500 line-through">
            {dashprice}
          </p>
        </div>
        <p className="absolute rounded-full px-1 py-2 bg-green-600 top-3 text-white right-6">
          {greenbtn}
        </p>
        <p className="absolute rounded-full px-1 py-2 bg-red-600 top-3 text-white right-3">
          {btn}
        </p>

        {/* {isHovered && (
          <div className="">
            <button className="action-button">View Product</button>
            <button className="action-button">Add to Cart</button>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Products;
