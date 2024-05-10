import React, { createContext, useState } from "react";
import all_product from "../Assets/all_product";

export const ShopContext = createContext(null);

// Cart
const getDefaultCart = () => {
  let cart = {};

  for (let i = 0; i < all_product.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopConetextProvider = (props) => {
  // set cart
  const [cart, setCart] = useState(getDefaultCart());

  const addToCart = (id) => {
    setCart((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const removeFromCart = (id) => {
    setCart((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cart) {
      if (cart[item] > 0) {
        let itemInfo = all_product.find((pro) => pro.id === Number(item));
        totalAmount += itemInfo.new_price * cart[item];
      }
    }
    return totalAmount;
  };

  const getTotalItems = () => {
    let totalItems = 0;
    for (const item in cart) {
      if (cart[item] > 0) totalItems += cart[item];
    }
    return totalItems;
  };
  const ContextValue = {
    getTotalCartAmount,
    all_product,
    cart,
    addToCart,
    removeFromCart,
    getTotalItems,
  };

  // console.log(cart);

  return (
    <ShopContext.Provider value={ContextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopConetextProvider;
