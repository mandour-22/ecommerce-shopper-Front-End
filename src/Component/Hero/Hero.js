import React from "react";
import hand_Icon from "../../Assets/hand_icon.png";
import hero from "../../Assets/hero_image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Hero.css";

const Hero = () => {
  return (
    <header className="flex items-center bg-slate-200">
      <div className="container gap-10 mx-auto pt-8 pb-8">
        <div className="flex max-md:flex-col items-center justify-between px-10">
          <div className="font-bold max-md:w-full h-full flex flex-col justify-center ">
            <h6 className="uppercase text-xl">New Arrivals only</h6>
            <div className="leading-tight mb-5">
              <div className="flex items-center gap-3">
                <p className="hero-text font-sans text-5xl  md:text-6xl">new</p>
                <img
                  loading="lazy"
                  className="w-28 max-md:w-16"
                  src={hand_Icon}
                  alt="hand"
                />
              </div>
              <p className="hero-text font-sans text-5xl md:text-6xl">
                Collections
              </p>
              <p className="hero-text font-sans text-5xl md:text-6xl">
                for everyone
              </p>
            </div>
            <div className="flex items-center gap-3 bg-red-500 bg-opacity-95 hover:bg-opacity-100 w-fit rounded text-white px-5 pt-1 pb-1 cursor-pointer hover:gap-4 transition">
              <a href="#collection">Latest Collection</a>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
          <div className="flex max-md:hidden justify-center items-center ">
            <img loading="lazy" className="heroImg" src={hero} alt="Photo" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
