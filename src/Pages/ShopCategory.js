import React, { useContext } from "react";
import { ShopContext } from "../Context/shopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Items from "../Component/Item/Items";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <section className="">
      <div className="max-w-screen-xl mx-auto px-4">
        <img src={props.banner} alt="" />
        <div className=" mt-5">
          <div className="flex justify-between items-center capitalize mt-4 px-3">
            <p className="text-sm font-semibold text-gray-700">
              <span className="text-gray-800 text-lg">showing 1-12</span> out of
              36 product
            </p>
            <div className="flex gap-3 items-center bg-gray-200 border border-gray-400 pt-2 pb-2 px-4 rounded-full cursor-pointer font-medium">
              <p>Sort by</p>
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-14 pb-14">
            {all_product.map((product) => {
              if (props.category === product.category) {
                return (
                  <Items
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    image={product.image}
                    new_price={product.new_price}
                    old_price={product.old_price}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
          <div className="text-center mb-10">
            <button className="bg-gray-400 text-gray-800 rounded-full px-6 pt-2 pb-2 bg-opacity-60 hover:bg-opacity-70 border border-gray-500 font-medium font-sans">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopCategory;
