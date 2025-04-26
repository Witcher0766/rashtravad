import React from "react";
import bgImage from "../assets/homepage_img.jpg";
import person from "../assets/person.png";
import Values from "./Values";
import President from "./President";

const Home = () => {
  return (
    <>
      <div id="home" className="relative w-full overflow-hidden">
        {/* Hero Section */}
        <div className="relative h-screen min-h-[500px] max-h-[800px] w-full">
          {/* Background Image */}
          <img
            src={bgImage}
            alt="Homepage background"
            className="w-full h-full object-cover object-right-top"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-between p-4 sm:p-8 md:p-10">
            {/* Top Right Text */}
            <div className="mt-20 mr-10 sm:mr-20 self-end flex flex-col items-end gap-3 z-10">
              <p className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-orange-600">
                राष्ट्रवाद
              </p>
              <p className="text-black bg-gray-300 border-2 border-white px-4 py-2">
                BHARAT FIRST
              </p>
              <p className="text-orange-600 font-bold px-3 py-1 text-sm sm:text-base rounded">
                राष्ट्रवाद से साम्राज्य
              </p>
              <p className="text-blue-600 font-bold px-3 text-sm sm:text-base rounded">
                WWW.rashtravad.com
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="z-10 flex flex-col sm:flex-row justify-center sm:justify-start items-start sm:items-center gap-4 mt-8 sm:mt-0">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Watch Now
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white/20 text-white font-bold py-3 px-6 rounded-full text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Join Us
              </button>
            </div>

            {/* Person Image */}
            <img
              src={person}
              alt="Person standing"
              className="absolute bottom-0 left-5 sm:left-10 h-[60%] w-auto object-contain z-0"
            />
          </div>
        </div>
      </div>

      {/* Additional Section */}
      <Values />

      <President/>
    </>
  );
};

export default Home;
