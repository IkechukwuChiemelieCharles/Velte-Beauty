import React from "react";
const FirstSec = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-5 mt-10 ">
      <h1 className="text-2xl md:text-4xl font-bold text-nowrap">
        Browse Our Collection
      </h1>
      <p className="text-xs">
        Discover the perfect products for your beauty routine
      </p>
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="flex flex-col gap-3 hover:w-72 hover:text-primaryBlue">
          <img className="w-72 " src="./image 106.png" alt="" />
          <p className="text-center text-sm font-bold">Lip & Face Care</p>
        </div>
        <div className="flex flex-col gap-3 hover:w-72 hover:text-primaryBlue">
          <img className="w-72" src="./Image-.png" alt="" />
          <p className="text-center text-sm font-bold">Lip & Face Care</p>
        </div>
        <div className="flex flex-col gap-3 hover:w-72 hover:text-primaryBlue">
          <img className="w-72" src="./image 101.png" alt="" />
          <p className="text-center text-sm font-bold">Lip & Face Care</p>
        </div>
      </div>
    </section>
  );
};

export default FirstSec;
