import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Nav from "./Components/Home/Nav";
import Footer from "./Components/Home/Footer";
import Shop from "./Components/Shop/Shop";
import ShopHeader from "./Components/Shop/ShopHeader";
import ShopProduct from "./Components/Shop/ShopProduct";
import ShopSecProdcut from "./Components/Shop/ShopSecProdcut";
import Cart from "./Components/CheckOut/Cart";
import Information from "./Components/CheckOut/Information";
import Payment from "./Components/CheckOut/Payment";
import Success from "./Components/CheckOut/Success";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <Router>
      <div className="">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopHeader />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/ShopProduct" element={<Shop />} />
          <Route path="/ShopSecProdcut" element={<ShopSecProdcut />} />
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
