import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const BreadCrum = (props) => {
  const { product } = props;
  return (
    <div className="bg-slate-50">
      <div className="capitalize bg-slate-50  pt-3 pb-3 max-w-screen-xl mx-auto px-4">
        <Link className="text-gray-600 hover:text-black text-normal" to="/">
          Home
        </Link>{" "}
        <FontAwesomeIcon className="text-gray-700" icon={faArrowRight} />{" "}
        <Link
          className="text-gray-600 hover:text-black text-normal"
          to={`/${product.category}`}>
          Shop
        </Link>{" "}
        <FontAwesomeIcon className="text-gray-700" icon={faArrowRight} />{" "}
        {product.category}s
      </div>
    </div>
  );
};

export default BreadCrum;
