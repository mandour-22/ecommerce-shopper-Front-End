import React from "react";
import { Link } from "react-router-dom";

const 
Items = (props) => {
  
  return (
    <>
      <div className="shadow-md bg-slate-100 max-sm:w-10/12 max-sm:mx-auto">
        <Link to={`/product/${props.id}`}>
          <img src={props.image} alt="" className="mx-auto" />
        </Link>
        <h1 className="leading-7 px-3 mb-4 text-gray-900 font-semibold text-lg mt-4">
          {props.name}
        </h1>
        <hr className="bg-gray-300 h" />
        <div className="px-3 pt-4 pb-4 flex justify-between items-center">
          <p className="text-lg bg-yellow-500 font-semibold px-2 rounded">
            ${props.new_price}
          </p>
          <small className="text-gray-800 font-medium bg-opacity-50 line-through text-md">
            ${props.old_price}
          </small>
        </div>
      </div>
    </>
  );
};

export default Items;
