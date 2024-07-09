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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
