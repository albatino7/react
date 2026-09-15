import React from "react";
import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ProductDetailCard from "../components/ProductDetailCard";
import ProtectedRoutes from "./ProtectedRoutes";
import Cart from "../pages/Cart";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route
          path="/contact"
          element={
            <ProtectedRoutes>
              <Contact />
            </ProtectedRoutes>
          }
        />
        <Route path="/detail/:id" element={<ProductDetailCard />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
