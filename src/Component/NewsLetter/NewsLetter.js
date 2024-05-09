import React from "react";

const NewsLetter = () => {
  return (
    <section className="bg-primary pt-12 pb-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center">
          <h1 className="text-5xl mb-4 font-semibold capitalize font-sans">
            Get Exclusive offers on your email
          </h1>
          <h6 className="capitalize text-xl font-medium mb-6">
            subscribe to our newLetter and stay updated
          </h6>
          <div className="flex items-center gap-4 justify-center max-sm:flex-col">
            <input
              type="email"
              placeholder="Your email id"
              className="border-gray-500 max-sm:w-full bg-primary outline-none border-2 w-1/3 rounded-md pt-2 pb-2 px-4"
            />
            <button className="bg-red-500 max-sm:w-full rounded-md font-normal text-lg pb-2 pt-2 px-6 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
