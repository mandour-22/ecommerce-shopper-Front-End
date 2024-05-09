import React from "react";

// import Hero from "../Component/Hero/Hero";
import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";
import Icon from "../Assets/logo.png";
import cartIcon from "../Assets/cart_icon.png";
const HomeShop = () => {
  return (
    <>
      <Navbar imgIcon={Icon} imgIconCart={cartIcon} />
      <>
        <Outlet />
      </>
      <Footer />
    </>
  );
};

export default HomeShop;
