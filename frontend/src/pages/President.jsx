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
    <div
      id="president"
      className="relative w-full overflow-hidden"
    >
      <div className="relative h-screen min-h-[500px] max-h-[500px] w-full">
        <img
          src={bgImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
        />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-around px-6 md:px-12 py-10 h-full">
          {/* Left Content */}
          <div className="max-w-2xl text-center  space-y-6 ">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-black">
              Ritesh Tomar
            </h1>
            <p className="text-gray-800 dark:text-black-300 leading-relaxed">
              <b>Ritesh Tomar is the National President of Rashtravad</b>, a
              social organization dedicated to fostering patriotic values and
              national development. Rashtravad focuses on initiatives related to
              education, community service, and social welfare, aiming to
              inspire and mobilize citizens toward national progress.
            </p>
            <p className="text-gray-800 dark:text-black-300 leading-relaxed">
              Tomar's leadership emphasizes grassroots engagement and
              sustainable impact, seeking to address various societal challenges
              through collective action and civic responsibility.
            </p>
            <img
              src={flag}
              alt="Indian Flag"
              className="w-32 md:w-40 mx-auto"
            />
          </div>

          {/* Right Image */}
          <div>
            <div className="absolute bottom-0 right-0 transform -translate-x-1/2  lg:mt-0">
              <img
                src={person2}
                alt="Ritesh Tomar"
                className="w-64 md:w-80 rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default President;
