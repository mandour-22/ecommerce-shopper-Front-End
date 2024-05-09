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
          <div className="relative">
            <input
              type="email"
              placeholder="Your email id"
              className="border-gray-500 bg-primary outline-none border-2 w-1/3 rounded-full pt-4 pb-3 px-4"
            />
            <button
              className="absolute bg-black pb-5 pt-4 px-6 rounded-full text-sm text-white"
              style={{ right: "28%" }}>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
