import React from "react";
import Featured from "./Featured";
import FirstSec from "./FirstSec";
import Header from "./Header";
import SecSect from "../Shop/SecSect";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Header />
      <FirstSec />
      <SecSect />
      <Featured />
      <Testimonial />
    </div>
  );
};

export default Home;
