import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import About from "../pages/about/About";
import Navbar from "../components/navbar/Navbar";
import Product from "../pages/product/Product";
import Counter from "../pages/counter/Counter";

const Routing = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </>
  );
};

export default Routing;
