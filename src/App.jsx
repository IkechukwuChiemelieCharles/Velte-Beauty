import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Nav from "./Nav";
import Footer from "./Footer";
import Shop from "./Shop";
import Contact from "./Contact";
import About from "./About";
import ShopHeader from "./ShopHeader";
import ShopProduct from "./ShopProduct";
import ShopSecProduct from "./ShopSecProdcut";
import Cart from "./Cart";
import Information from "./Information";
import Payment from "./Payment";
import Success from "./Success";

function App() {
  return (
    <Router>
      <div className="">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopHeader />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ShopProduct" element={<Shop />} />
          <Route path="/ShopSecProduct" element={<Shop />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Information" element={<Information />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Success" element={<Success />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
