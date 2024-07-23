import React from "react";
import Products from "./Products";
import { useState } from "react";
import { Link } from "react-router-dom";

const SecSect = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      imageurl: "/Images.png",
      name: "Face Foam Wash",
      detail: "Face & Lip",
      price: "₦2,800",
      dashprice: "₦3,500",
      btn: "-30%",
      redButton: true,
      greenButton: false,
      addCart: "Add To Cart",
    },
    {
      id: 1,
      imageurl: "image 1-1.png",
      name: " Face Moisturizer",
      detail: "Face & Lip",
      price: "₦1,000",
      btn: "-30%",
      redButton: true,
      greenButton: false,
      addCart: "Add To Cart",
    },
    {
      id: 1,
      imageurl: "./image 1.png",
      name: "Aryuvedic Hair Butter",
      detail: "Hair Care",
      price: "₦20,000",
      dashprice: "₦25,000",
      btn: "-50%",
      redButton: true,
      greenButton: false,
      addCart: "Add To Cart",
    },
    {
      id: 1,
      imageurl: "./image 1(1).png",
      name: "Body Scrub",
      detail: "Bath & Body",
      price: "₦4,000",
      redButton: true,
      greenButton: false,
      addCart: "Add To Cart",
    },
    {
      id: 1,
      imageurl: "./Images(1).png",
      name: "Body Wash",
      detail: "Bath & Body",
      price: "₦3,500",
      redButton: false,
      greenButton: false,
      addCart: "Add To Cart",
    },
    {
      id: 1,
      imageurl: "./image 1(2).png",
      name: "Face Serum",
      detail: "Face & Lip Care",

      price: "₦3,500",
      redButton: true,
      greenButton: false,
      addCart: "Add To Cart",
    },
    {
      id: 1,
      imageurl: "./Images.png",
      name: "Facial Mist",
      detail: "Face & Lip Care",
      price: "₦4,500",
      dashprice: "₦4,000",
      redButton: false,
      greenButton: true,
      addCart: "Add To Cart",
    },
    {
      id: 1,
      imageurl: "./image 1(4).png",
      name: "Hair Conditioner",
      detail: "Hair Care",

      price: "₦5,000",
      redButton: true,
      greenButton: false,
      addCart: "Add To Cart",
    },
  ]);

  return (
    <div className="mt-20 flex flex-col justify-center items-center ">
      <h1 className="text-center text-3xl font-bold">Our Products</h1>
      <div className="flex flex-wrap  justify-center gap-10 mt-10 ">
        {products.map((product) => (
          <Products
            key={product.id}
            imageurl={product.imageurl}
            name={product.name}
            detail={product.detail}
            price={product.price}
            dashprice={product.dashprice}
            greenButton={product.greenButton}
            redButton={product.redButton}
            addCart={product.addCart}
          />
        ))}
      </div>

      <Link
        className="border-2 border-primaryBlue border-solid px-16 py-2 my-10 hover:bg-primaryBlue hover:border-black hover:rounded-lg"
        to="/Shop"
      >
        Shop
      </Link>
    </div>
  );
};

export default SecSect;
