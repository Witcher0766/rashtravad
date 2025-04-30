import React from 'react';
import bgImage from "../assets/background2.jpg";
import { useGetUploadsQuery } from '../slices/uploadApiSlice';

const StatePresident = () => {
  const { data: uploads, isLoading, error } = useGetUploadsQuery();
  const filteredUploads = uploads?.filter((upload) => upload.type === "group");
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading uploads.</div>;

  return (
    <div id="statePresident" className="relative w-full min-h-screen overflow-hidden">
      <img
        src={bgImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
      />

      <div className="relative z-10 flex flex-col items-center min-h-screen px-4 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 w-full max-w-7xl">
          {filteredUploads?.map((upload, index) => (
            <div
              key={upload._id}
              style={{ borderRadius: "0px 40px 0px 40px" }}
              className={`flex flex-col items-center justify-center p-4 rounded-lg h-60 ${
                Math.floor(index / 7) % 2 === 0
                  ? "bg-gradient-to-b from-sky-300 to-white"
                  : "bg-gradient-to-b from-orange-300 to-white"
              }`}
            >
              {upload.imageUrl && (
                <img
                  src={upload.imageUrl}  
                  alt={upload.heading || "statePresident Image"}
                  className="w-30 h-30 object-contain mb-2 rounded-lg"
                />
              )}
              {upload.heading && (
                <h3 className="text-lg font-semibold text-center">{upload.heading}</h3>
              )}
              {upload.description && (
                <p className="text-sm text-gray-700 text-center">{upload.description}</p>
              )}
            </div>
          ))}
        </div>
        <h1 className=' text-4xl mt-5'>www.rashtravad.com</h1>
      </div>
    </div>
  );
};

export default StatePresident;
