import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ imgIcon, imgIconCart }) => {
  const [border, setBorder] = useState("shop");

  return (
    <header className="h-20 bg-slate-100 shadow-lg flex items-center">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 justify-center">
            <img src={imgIcon} className="w-12" alt="logo" />
            <h2 className="uppercase font-semibold text-3xl">Shopping</h2>
          </div>
          <ul className="flex items-center gap-5">
            <li
              className="cursor-pointer text-lg font-normal select-none"
              onClick={() => setBorder("shop")}>
              <Link to="/">shop</Link>
              {border === "shop" ? (
                <hr className="w-2/3 mx-auto h-1 bg-red-500" />
              ) : (
                <></>
              )}
            </li>
            <li
              className="cursor-pointer text-lg font-normal select-none"
              onClick={() => setBorder("men")}>
              <Link to="/men">Men</Link>
              {border === "men" ? (
                <hr className="w-2/3 mx-auto h-1 bg-red-500" />
              ) : (
                <></>
              )}
            </li>
            <li
              className="cursor-pointer text-lg font-normal select-none"
              onClick={() => setBorder("women")}>
              <Link to="/women">Women</Link>
              {border === "women" ? (
                <hr className="w-2/3 mx-auto h-1 bg-red-500" />
              ) : (
                <></>
              )}
            </li>
            <li
              className="cursor-pointer text-lg font-normal select-none"
              onClick={() => setBorder("kids")}>
              <Link to="/kid">Kids</Link>
              {border === "kids" ? (
                <hr className="w-2/3 mx-auto h-1 bg-red-500" />
              ) : (
                <></>
              )}
            </li>
          </ul>

          <div className="relative">
            <img src={imgIconCart} alt="Cart" />
            <small className="absolute -right-2 -top-0 bg-red-500 text-white rounded-full w-5 h-5 text-center">
              0
            </small>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
