import React from "react";
import new_collections from "../../Assets/new_collections";
import Items from "../Item/Items";

const NewCollections = () => {
  return (
    <section className="bg-white pt-12 pb-12" id="collection">
      <div className="container mx-auto">
        <h1 className="text-center mb-2 uppercase font-bold text-4xl font-sans">
          new collections
        </h1>
        <hr className="bg-black h-1 w-24 mx-auto" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-14 pb-14">
          {new_collections.map((data) => {
            return (
              <Items
                key={data.id}
                id={data.id}
                name={data.name}
                image={data.image}
                new_price={data.new_price}
                old_price={data.old_price}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewCollections;
