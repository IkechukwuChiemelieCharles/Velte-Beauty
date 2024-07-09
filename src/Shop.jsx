import React from "react";
import ShopHeader from "./ShopHeader";
import ShopSecProdcut from "./ShopSecProdcut";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Shop = () => {
  return (
    <div className="xl:">
      <ShopHeader />
      <Routes>
        <Route path="/ShopSecProdcut" element={<ShopSecProdcut />} />
      </Routes>
    </div>
  );
};

export default Shop;
