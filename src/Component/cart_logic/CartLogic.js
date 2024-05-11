import React, { useContext } from "react";
import { ShopContext } from "../../Context/shopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const CartLogic = () => {
  const { getTotalCartAmount, all_product, cart, removeFromCart } =
    useContext(ShopContext);
  return (
    <div className="">
      <div className="line-line overflow-x-auto w-full pt-12 pb-12">
        <div
          className="grid grid-cols-6 gap-2 pb-2 mx-auto"
          style={{ width: "1000px" }}>
          {["product", "Title", "Price", "Quantity", "Total", "Remove"].map(
            (data) => (
              <table key={data}>
                <thead>
                  <tr>
                    <th className="text-center text-sm">{data}</th>
                  </tr>
                </thead>
              </table>
            )
          )}
        </div>
        <hr className="bg-gray-700" style={{ height: "2px" }} />
        <div className="line-line flex items-start w-full flex-col justify-between min-h-96">
          {all_product.map((prod) => {
            if (cart[prod.id] > 0) {
              return (
                <>
                  <div
                    key={prod.id}
                    className="max-w-screen-xl mx-auto overflow-x-auto mb-4 mt-6 border-b border-gray-300 p-2">
                    <div
                      className="grid grid-cols-6 items-center mx-auto"
                      style={{ width: "1000px" }}>
                      <img
                        className="w-16 mx-auto"
                        loading="lazy"
                        src={prod.image}
                        alt=""
                      />
                      <p className="text-center col-span-1 text-sm font-semibold">
                        {prod.name}
                      </p>
                      <p className="text-center">${prod.new_price}</p>
                      <button>{cart[prod.id]}</button>
                      <p className="text-center">
                        ${prod.new_price * cart[prod.id]}
                      </p>
                      <button
                        onClick={() => removeFromCart(prod.id)}
                        className="w-12 h-7 mx-auto">
                        <span className="hover:bg-red-500 rounded-md text-black hover:text-white focus:text-white font-normal focus:bg-red-500 bg-gray-300 block  mx-auto text-center">
                          <FontAwesomeIcon icon={faXmark} />
                        </span>
                      </button>
                    </div>
                  </div>
                </>
                // <table
                //   key={prod.id}
                //   className="w-full mb-4 mt-6 border-b border-gray-300 p-2">
                //   <tbody className="grid grid-cols-">
                //     <tr>
                //       <td>
                //         <img
                //           className="w-16"
                //           loading="lazy"
                //           src={prod.image}
                //           alt=""
                //         />
                //       </td>
                //       <td colSpan={"1"}>
                //         <p className="text-center col-span-1 text-sm font-semibold">
                //           {prod.name}
                //         </p>
                //       </td>
                //       <td>
                //         <p className="text-center">${prod.new_price}</p>
                //       </td>
                //       <td>
                //         <button>{cart[prod.id]}</button>
                //       </td>
                //       <td>
                //         <p className="text-center">
                //           ${prod.new_price * cart[prod.id]}
                //         </p>
                //       </td>
                //       <td>
                //         <button
                //           onClick={() => removeFromCart(prod.id)}
                //           className="w-12 h-7 mx-auto">
                //           <span className="hover:bg-red-500 rounded-md text-black hover:text-white focus:text-white font-normal focus:bg-red-500 bg-gray-300 block  mx-auto text-center">
                //             <FontAwesomeIcon icon={faXmark} />
                //           </span>
                //         </button>
                //       </td>
                //     </tr>
                //   </tbody>
                // </table>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <hr className="bg-gray-600 " style={{ height: "2px" }} />
      <div className="flex justify-between items-center gap-10 max-md:flex-col w-full pt-12 pb-12 bg-slate-100">
        <div className="flex-1 max-md:w-full">
          <h1 className="text-3xl font-semibold mb-5">Cart Totals</h1>
          <div className="flex items-center justify-between border-b border-gray-400  pb-2 mb-3">
            <p className="">SubTotal</p>
            <p className="">${getTotalCartAmount()}</p>
          </div>
          <div className="flex items-center justify-between border-b border-gray-400  pb-2 mb-3">
            <p className="">Shopping Free</p>
            <p className="">Free</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg">Total</p>
            <p className="font-bold text-lg">${getTotalCartAmount()}</p>
          </div>
        </div>
        <div className="flex-1 max-md:w-full text-center">
          <p className="capitalize text-xl">
            if you have a promo code, Enter it here:
          </p>
          <div className="flex items-center justify-center">
            <input
              type="text"
              className="border border-gray-400 p-2 w-1/2"
              placeholder="promo code"
            />
            <button className="text-white pt-2 pb-2 px-6 font-semibold bg-black">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartLogic;
