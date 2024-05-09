import React from "react";
import footerLogo from "../../Assets/logo_big.png";
import instagramIcon from "../../Assets/instagram_icon.png";
import PintesterIcon from "../../Assets/pintester_icon.png";
import WhatsAppIcon from "../../Assets/whatsapp_icon.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const listItems = [
    {
      name: "Company",
      link: "/",
    },
    {
      name: "Products",
      link: "/",
    },
    {
      name: "Offices",
      link: "/",
    },
    {
      name: "About",
      link: "/",
    },
    {
      name: "Contact",
      link: "/",
    },
  ];
  return (
    <footer className="bg-slate-200 pt-12 pb-4">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 justify-center">
            <img src={footerLogo} className="w-12" alt="logo" />
            <h2 className="uppercase font-semibold text-3xl">Shopping</h2>
          </div>
          <ul className="flex flex-wrap items-center justify-center gap-12 max-md:gap-5 mt-10 mb-10">
            {listItems.map((items, index) => (
              <li key={index}>
                <Link to={"#"} className="font-sans font-normal text-lg">
                  {items.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center gap-4">
            <img
              className="cursor-pointer"
              src={instagramIcon}
              alt="instagram"
            />
            <img
              className="cursor-pointer"
              src={PintesterIcon}
              alt="pintester"
            />
            <img className="cursor-pointer" src={WhatsAppIcon} alt="whatsapp" />
          </div>
          <div className="mt-10 w-full">
            <hr className="bg-black h-1 w-full" />
            <p className="mt-3 text-center">
              Copyright © {new Date().getFullYear()} Shopping. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
