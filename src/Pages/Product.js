import React, { useContext } from "react";
import { ShopContext } from "../Context/shopContext";
import { useParams } from "react-router-dom";
import BreadCrum from "../Component/BreadCrums/BreadCrum";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((product) => {
    return product.id === Number(productId);
  });
  return (
    <div>
      <BreadCrum product={product} />
    </div>
  );
};

export default Product;
