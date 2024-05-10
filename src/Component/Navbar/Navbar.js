import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/shopContext";

const Navbar = ({ imgIcon, imgIconCart }) => {
  const [border, setBorder] = useState("shop");
  const [showMenu, setShowMenu] = useState(false);
  const { getTotalItems } = useContext(ShopContext);

  const menuHandler = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className="bg-white w-full z-20 top-0 start-0 border-b p-3 border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <div className="flex items-center gap-2 justify-center">
            <img src={imgIcon} className="w-12" alt="logo" />
            <h2 className="uppercase font-semibold text-3xl">Shopping</h2>
          </div>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link to="/cart">
              <div
                className="relative flex-1 flex items-center"
                style={{ justifyContent: "flex-end" }}>
                <img src={imgIconCart} alt="Cart" />
                <small className="absolute -right-2 -top-0 bg-red-500 text-white rounded-full w-5 h-5 text-center">
                  {getTotalItems()}
                </small>
              </div>
            </Link>
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              onClick={menuHandler}>
              <FontAwesomeIcon icon={faBars} className="w-5 h-5" />
            </button>
          </div>
          <div
            className={`${
              showMenu ? "" : "hidden"
            } items-center justify-between w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky">
            <ul className="flex items-center gap-5 max-md:flex-col max-sm:pt-2 max-sm:pb-2 max-md:bg-slate-300 rounded-b-lg">
              <li
                className="cursor-pointer text-lg font-normal select-none"
                onClick={() => {
                  setBorder("shop");
                  setShowMenu(false);
                }}>
                <Link to="/">shop</Link>
                {border === "shop" ? (
                  <hr className="w-2/3 mx-auto h-1 bg-red-500" />
                ) : (
                  <></>
                )}
              </li>
              <li
                className="cursor-pointer text-lg font-normal select-none"
                onClick={() => {
                  setBorder("men");
                  setShowMenu(false);
                }}>
                <Link to="/men">Men</Link>
                {border === "men" ? (
                  <hr className="w-2/3 mx-auto h-1 bg-red-500" />
                ) : (
                  <></>
                )}
              </li>
              <li
                className="cursor-pointer text-lg font-normal select-none"
                onClick={() => {
                  setBorder("women");
                  setShowMenu(false);
                }}>
                <Link to="/women">Women</Link>
                {border === "women" ? (
                  <hr className="w-2/3 mx-auto h-1 bg-red-500" />
                ) : (
                  <></>
                )}
              </li>
              <li
                className="cursor-pointer text-lg font-normal select-none"
                onClick={() => {
                  setBorder("kids");
                  setShowMenu(false);
                }}>
                <Link to="/kid">Kids</Link>
                {border === "kids" ? (
                  <hr className="w-2/3 mx-auto h-1 bg-red-500" />
                ) : (
                  <></>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
