import React from "react";
import ShopProduct from "./ShopProduct";
import { useState } from "react";
import { Link } from "react-router-dom";

const ShopList = () => {
  const [list, setList] = useState([
    {
      id: 11,
      imgurl: "/Images.png",
      prodName: "Face Foam Wash",
      prodDetail: "Face & Lip",
      prodPrice: "₦2,800",
      prodDashPrice: "₦3,500",
      tomatoButton: true,
      successButton: false,
    },
    {
      id: 12,
      imgurl: "image 1-1.png",
      prodName: " Face Moisturizer",
      prodDetail: "Face & Lip",
      prodPrice: "₦1,000",
      prodDashPrice: "₦3,500",

      tomatoButton: true,
      successButton: false,
    },
    {
      id: 13,
      imgurl: "./image 1.png",
      prodName: "Aryuvedic Hair Butter",
      prodDetail: "Hair Care",
      prodPrice: "₦1,000",
      prodDashPrice: "₦20,000",
      tomatoButton: true,
      successButton: false,
    },
    {
      id: 14,
      imgurl: "./image 1(1).png",
      prodName: "Body Scrub",
      prodDetail: "Bath & Body",
      prodPrice: "₦4,000",
      prodDashPrice: "₦1,000",
      tomatoButton: true,
      successButton: false,
    },
    {
      id: 15,
      imgurl: "./Images(1).png",
      prodName: "Body Wash",
      prodDetail: "Bath & Body",
      prodPrice: "₦3,500",
      prodDashPrice: "₦1,000",

      tomatoButton: false,
      greenButton: false,
    },
    {
      id: 16,
      imgurl: "./image 1(2).png",
      prodName: "Face Serum",
      prodDetail: "Face & Lip Care",

      prodPrice: "₦3,500",
      tomatoButton: true,
      greenButton: false,
    },
    {
      id: 17,
      imgurl: "./Images.png",
      prodName: "Facial Mist",
      prodDetail: "Face & Lip Care",
      prodPrice: "₦4,500",
      dashprice: "₦4,000",
      tomatoButton: false,
      greenButton: true,
    },
    {
      id: 18,
      imgurl: "./image 1(4).png",
      prodName: "Hair Conditioner",
      prodDetail: "Hair Care",

      prodPrice: "₦5,000",
      tomatoButton: true,
      greenButton: false,
    },
  ]);

  return (
    <div className="mt-20 flex flex-col justify-center items-center ">
      <h1 className="text-center text-3xl font-bold">Our Products</h1>
      <div className="flex flex-wrap  justify-center gap-10 mt-10 ">
        {list.map((newList) => (
          <ShopProduct
            key={newList.id}
            imgurl={newList.imgurl}
            prodName={newList.prodName}
            prodDetail={newList.prodDetail}
            prodPrice={newList.prodPrice}
            prodDashPrice={newList.prodDashPrice}
            successButton={newList.successButton}
            tomatoButton={newList.tomatoButton}
          />
        ))}
      </div>

      <Link
        className="border-2 border-primaryBlue border-solid px-16 py-2 my-10"
        to="/Shop"
      >
        Shop
      </Link>
    </div>
  );
};

export default ShopList;
