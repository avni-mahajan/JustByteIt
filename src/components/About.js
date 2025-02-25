import React from "react";
import ramenCat from "../utils/images/ramenCat.png";
import profile from "../utils/images/profile.png";

const About = () => {
  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center p-8">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-3xl text-center">
        <h2 className="text-2xl font-semibold text-pink-500 mb-4">About Me</h2>
        <p className="text-gray-700">
          Hey there! I'm Harshika, a passionate developer who loves building
          creative and functional web applications.💖
        </p>
        <div className="mt-4">
          <img
            src={profile}
            alt="Pink Anime Aesthetic"
            className="rounded-lg mx-auto w-48 shadow-md"
          />
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-3xl text-center mt-6">
        <h2 className="text-2xl font-semibold text-pink-500 mb-4">
          About This Project
        </h2>
        <p className="text-gray-700">
          This project is a fun and stylish web application designed with ReactJS!
          The goal was to create something visually pleasing while ensuring
          smooth functionality.✨
        </p>
        <div className="mt-4">
          <img
            src={ramenCat}
            alt="Cute Pink Cat"
            className="rounded-lg mx-auto w-48 shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
