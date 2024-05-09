import React, { createContext } from "react";
import all_product from "../Assets/all_product";

export const ShopContext = createContext(null);

const ShopConetextProvider = (props) => {
  const ContextValue = { all_product };

  return (
    <ShopContext.Provider value={ContextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopConetextProvider;
