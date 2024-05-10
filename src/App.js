import React, { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Icon from "./Assets/logo.png";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import HomeShop from "./Pages/HomeShop";
import Shopping from "./Pages/Shopping";
import Favicon from "react-favicon";
import MenBanner from "./Assets/banner_mens.png";
import WomenBanner from "./Assets/banner_women.png";
import KidsBanner from "./Assets/banner_kids.png";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeShop />}>
      <Route index element={<Shopping />} />
      <Route
        path="/men"
        element={<ShopCategory banner={MenBanner} category="men" />}
      />
      <Route
        path="/women"
        element={<ShopCategory banner={WomenBanner} category="women" />}
      />
      <Route
        path="/kid"
        element={<ShopCategory banner={KidsBanner} category="kid" />}
      />
      <Route path="/product" element={<Product />}>
        <Route path=":productId" element={<Product />} />
      </Route>
      <Route path="/cart" element={<Cart />} />
      {/* ... etc. */}
    </Route>
  )
);

const App = () => {
  return (
    <>
      <Favicon url={Icon} />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
