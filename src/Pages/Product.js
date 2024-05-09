import React, { useContext } from "react";
import { ShopContext } from "../Context/shopContext";
import { useParams } from "react-router-dom";
import BreadCrum from "../Component/BreadCrums/BreadCrum";
import DisplayProduct from "../Component/DisplayProduct/DisplayProduct";
import DiscriptionProduct from "../Component/DiscriptionProduct/DiscriptionProduct";
import RelatedProducts from "../Component/RelatedProduct/RelatedProducts";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((product) => {
    return product.id === Number(productId);
  });
  return (
    <div>
      <BreadCrum product={product} />
      <DisplayProduct Product={product} />
      <DiscriptionProduct />
      <RelatedProducts />
    </div>
  );
};

export default Product;
