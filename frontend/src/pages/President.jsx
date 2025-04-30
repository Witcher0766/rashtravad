import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import bgImage from "../assets/background2.jpg";
import flag from "../assets/flag.png";
import person2 from "../assets/person2.png";

const President = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div id="president" className="relative w-full overflow-hidden">
      <div className="relative h-auto min-h-[600px] w-full">
        <img
          src={bgImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
        />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 py-10 min-h-[600px]">
          {/* Left Content */}
          <div className="max-w-2xl text-center lg:text-left space-y-6 mb-10 lg:mb-0">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-black">
              Ritesh Tomar
            </h1>
            <p className="text-gray-800 dark:text-black leading-relaxed">
              <b>Ritesh Tomar is the National President of Rashtravad</b>, a
              social organization dedicated to fostering patriotic values and
              national development. Rashtravad focuses on initiatives related to
              education, community service, and social welfare, aiming to
              inspire and mobilize citizens toward national progress.
            </p>
            <p className="text-gray-800 dark:text-black leading-relaxed">
              Tomar's leadership emphasizes grassroots engagement and
              sustainable impact, seeking to address various societal challenges
              through collective action and civic responsibility.
            </p>
            <img
              src={flag}
              alt="Indian Flag"
              className="w-24 sm:w-28 md:w-32 lg:w-40 mx-auto lg:mx-0"
            />
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end w-full lg:w-auto">
            <img
              src={person2}
              alt="Ritesh Tomar"
              className="w-48 sm:w-60 md:w-72 lg:w-80 rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default President;
