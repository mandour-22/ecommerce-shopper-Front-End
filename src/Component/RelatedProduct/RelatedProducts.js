import React from "react";
import items_product from "../../Assets/data";
import Items from "../Item/Items";

const RelatedProducts = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center mb-2 uppercase font-bold text-4xl font-sans">
        Related Products
      </h1>
      <hr className="bg-black h-1 w-24 mx-auto" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-14 pb-14">
        {items_product.map((items, i) => {
          return (
            <>
              <Items
                key={i}
                id={items.id}
                name={items.name}
                image={items.image}
                new_price={items.new_price}
                old_price={items.old_price}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
