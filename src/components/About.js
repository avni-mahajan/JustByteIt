import React from "react";
import ramenCat from "../utils/images/ramenCat.png";

const About = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center bg-pink-100 min-h-[80vh] p-8 lg:p-16">
      {/* Left Content */}
      <div className="text-center lg:text-left max-w-xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 leading-tight mb-4">
          Welcome to the world of
        </h1>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-pink-500 bg-white px-4 py-2 inline-block rounded-xl shadow-md">
          Cute & Crave-worthy Eats 💖
        </h2>
        <p className="text-gray-600 italic text-lg mt-4">
          "Satisfy your cravings in the most adorable way — only on <span className="text-pink-500 font-semibold">Just Byte It</span>!"
        </p>
      </div>

      <div className="max-w-sm lg:max-w-md mb-10 lg:mb-0">
        <img
          src={ramenCat}
          alt="Cute Ramen Cat"
          className="w-full rounded-2xl shadow-xl"
        />
      </div>
    </div>
  );
};

export default About;
