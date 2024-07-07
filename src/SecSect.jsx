import React from "react";
import Products from "./Products";

const SecSect = () => {
  const products = [
    {
      id: 1,
      imageurl: "/Images.png",
      name: "Face Foam Wash",
      detail: "Face & Lip",
      price: "$10",
      dashprice: "$3,500",
      btn: "-30%",
    },
    {
      id: 1,
      imageurl: "image 1-1.png",
      name: " Face Moisturizer",
      detail: "Face & Lip",
      price: "$10",
      btn: "-30%",
    },
    {
      id: 1,
      imageurl: "./image 1.png",
      name: "Aryuvedic Hair Butter",
      detail: "Hair Care",
      price: "$20,000",
      dashprice: "$25,000",
      btn: "-50%",
    },
    {
      id: 1,
      imageurl: "./image 1(1).png",
      name: "Body Scrub",
      detail: "Bath & Body",
      price: "$4,000",
      btn: "-50%",
    },
    {
      id: 1,
      imageurl: "./Images(1).png",
      name: "Body Wash",
      detail: "Bath & Body",
      price: "$3,500",
    },
    {
      id: 1,
      imageurl: "./image 1(2).png",
      name: "Face Serum",
      detail: "Face & Lip Care",

      price: "$3,500",
      greenbtn: "New",
    },
    {
      id: 1,
      imageurl: "./Images.png",
      name: "Facial Mist",
      detail: "Face & Lip Care",
      price: "$10",
      dashprice: "$4,000",
      btn: "-50%",
    },
    {
      id: 1,
      imageurl: "./image 1(4).png",
      name: "Hair Conditioner",
      detail: "Hair Care",

      price: "$5,00",
      greenbtn: "New",
    },
  ];

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
            btn={product.btn}
            greenbtn={product.greenbtn}
          />
        ))}
      </div>
      <button className="border-2 border-primaryBlue border-solid px-16 py-2 my-10">
        Show More
      </button>
    </div>
  );
};

export default SecSect;
