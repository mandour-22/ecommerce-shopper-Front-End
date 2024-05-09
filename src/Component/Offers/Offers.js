import React from "react";
import exclusive_Img from "../../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <section className="bg-slate-200 pt-10 pb-10">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        <div>
          <h1 className="text-6xl font-semibold mb-3">Exclusive</h1>
          <h1 className="text-6xl font-semibold mb-3">Offer For You</h1>
          <p className="uppercase font-bold mt-5">
            Only on best selleres Products
          </p>
          <button className="bg-red-500 bg-opacity-90 hover:bg-opacity-100 font-medium text-white px-6 pt-2 pb-2 rounded mt-5">
            Cleck Now
          </button>
        </div>
        <div>
          <img src={exclusive_Img} alt="exclusive" />
        </div>
      </div>
    </section>
  );
};

export default Offers;
