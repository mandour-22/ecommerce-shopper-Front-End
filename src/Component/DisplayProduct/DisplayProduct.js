import React, { useContext } from "react";
import { ShopContext } from "../../Context/shopContext";
import StarIcon from "../../Assets/star_icon.png";
import StarDullIcon from "../../Assets/star_dull_icon.png";
const DisplayProduct = (props) => {
  const { Product } = props;
  const { addToCart } = useContext(ShopContext);

  const list = [
    {
      id: 1,
      name: "S",
    },
    {
      id: 2,
      name: "M",
    },
    {
      id: 3,
      name: "L",
    },
    {
      id: 4,
      name: "X",
    },
    {
      id: 5,
      name: "XL",
    },
    {
      id: 6,
      name: "XXL",
    },
  ];
  return (
    <section className="bg-slate-100 pt-5 pb-5">
      <div className="max-w-screen-xl mx-auto px-3">
        <div className="flex items-center max-lg:justify-center max-lg:flex-col gap-7 justify-between">
          <div className="flex items-center gap-3">
            <div className=" flex flex-col gap-2 ">
              <img
                src={Product.image}
                loading="lazy"
                alt="prodcut Img"
                className="w-16 border-2 border-slate-500 object-fill"
              />
              <img
                src={Product.image}
                loading="lazy"
                alt="prodcut Img"
                className="w-16 border-2 border-slate-500 object-fill"
              />
              <img
                src={Product.image}
                loading="lazy"
                alt="prodcut Img"
                className="w-16 border-2 border-slate-500 object-fill"
              />
              <img
                src={Product.image}
                loading="lazy"
                alt="prodcut Img"
                className="w-16 border-2 border-slate-500 object-fill"
              />
              <img
                src={Product.image}
                loading="lazy"
                alt="prodcut Img"
                className="w-16 border-2 border-slate-500 object-fill"
              />
            </div>
            <div>
              <img src={Product.image} loading="lazy" alt="product img" />
            </div>
          </div>
          <div className="lg:flex-1 w-full">
            <h1 className="text-3xl font-semibold w-3/4 max-lg:w-full text-gray-900">
              {Product.name}
            </h1>
            <div className="flex items-center gap-3 mt-2">
              <div className="flex items-center gap-1">
                <img src={StarIcon} alt="star" />
                <img src={StarIcon} alt="star" />
                <img src={StarIcon} alt="star" />
                <img src={StarIcon} alt="star" />
                <img src={StarDullIcon} alt="starDull" />
              </div>
              <span className="">{"(122)"}</span>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <p className="text-gray-800 font-medium bg-opacity-50 line-through text-md">
                ${Product.old_price}
              </p>
              <p className="text-lg bg-red-500 text-white font-semibold px-2 rounded w-fit">
                ${Product.new_price}
              </p>
            </div>
            <div className="mt-5">
              <p className="font-medium text-sm w-3/4 max-sm:w-full leading-6 text-gray-800">
                A lightweight usually knitted, pullover close-fitting and with
                around neckdine and start sleeves worn as an undershirt or outer
                garment
              </p>
            </div>
            <div className="mt-5 mb-3">
              <form className="w-52 max-sm:w-full">
                <label
                  for="countries"
                  className="block mb-2 text-lg font-semibold font-sans text-gray-900 ">
                  Select an Size
                </label>
                <select
                  id="countries"
                  className="bg-gray-200 border cursor-pointer border-gray-300 border-none capitalize font-bold h-7 outline-none px-2 rounded shadow-lg w-52">
                  {list.map((list) => {
                    return (
                      <option
                        className="capitalize"
                        key={list.id}
                        value={list.name}>
                        {list.name}
                      </option>
                    );
                  })}
                </select>
              </form>
            </div>
            <button
              className="uppercase bg-red-500 text-white rounded-md mt-4 font-bold px-8 pt-2 pb-2"
              onClick={() => {
                addToCart(Product.id);
              }}>
              Add To Chart
            </button>

            <div className="mt-6">
              <div className="">
                <p className="mb-1 text-md">
                  <span className="font-bold">Category:</span>{" "}
                  {Product.category}.T-Shirt, Crop Top{" "}
                </p>
                <p className="mb-1 text-md">
                  <span className="font-bold">Tages:</span> Modern Latest
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// https://www.youtube.com/watch?v=jbfuzcrfjqQ

export default DisplayProduct;
