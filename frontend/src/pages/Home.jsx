import React from "react";
import bgImage from "../assets/homepage_img.jpg";
import person from "../assets/person.png";
import Values from "./Values";
import President from "./President";
import Group from "./Group";
import Team from "./Team";
import StatePresident from "./StatePresident";
import EventPage from "./Event";
import GalleryPage from "./Gallery";

const Home = () => {
  return (
    <>
      <div id="home" className="relative w-full overflow-hidden">
        {/* Hero Section */}
        <div className="relative h-screen min-h-[500px] max-h-[900px] w-full">
          {/* Background Image with optimized loading */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={bgImage}
              alt="Homepage background"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          {/* Overlay with gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30 flex flex-col justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 md:py-12">
            {/* Top Right Text - Responsive sizing and spacing */}
            <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-32 xl:mt-40 self-end text-right z-10 space-y-1 sm:space-y-2 md:space-y-3">
              <p className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-orange-600 leading-tight tracking-tight">
                राष्ट्रवाद
              </p>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg bg-gray-300/90 border-2 border-white px-3 py-1 sm:px-4 sm:py-2 text-black inline-block">
                BHARAT FIRST
              </p>
              <p className="text-orange-500 font-semibold text-xs sm:text-sm md:text-base lg:text-lg">
                राष्ट्रवाद से साम्राज्य
              </p>
              <p className="text-blue-500 font-semibold text-xs sm:text-sm md:text-base lg:text-lg hover:underline cursor-pointer">
                WWW.rashtravad.com
              </p>
            </div>

            {/* CTA Buttons - Responsive sizing and hover effects */}
            <div className="z-10 mt-4 sm:mt-6 md:mt-8 flex flex-col sm:flex-row justify-center sm:justify-end items-end sm:items-center gap-3 sm:gap-4 md:gap-5">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-1.5 px-4 sm:py-2 sm:px-5 md:py-2.5 md:px-6 rounded-full text-xs sm:text-sm md:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl active:scale-95">
                Watch Now
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white/20 text-white font-bold py-1.5 px-4 sm:py-2 sm:px-5 md:py-2.5 md:px-6 rounded-full text-xs sm:text-sm md:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl active:scale-95">
                Join Us
              </button>
            </div>

            {/* Person Image - Responsive positioning and sizing */}
            <div className="absolute bottom-0 left-2 xs:left-4 sm:left-6 md:left-8 lg:left-10 xl:left-12 w-28 xs:w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 2xl:w-72 hidden sm:block">
              <img
                src={person}
                alt="Person standing"
                className="w-full h-auto object-contain"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <Values />
      <President />
      <Group />
      <Team />
      <StatePresident />
      <EventPage />
      <GalleryPage />
    </>
  );
};

export default Home;
