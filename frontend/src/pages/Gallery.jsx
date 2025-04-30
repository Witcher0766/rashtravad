import React from 'react';
import bgImage from "../assets/background2.jpg";
import { useGetUploadsQuery } from '../slices/uploadApiSlice';

const GalleryPage = () => {
  const { data: uploads, isLoading, error } = useGetUploadsQuery();
  const filteredUploads = uploads?.filter((upload) => upload.type === "gallery");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading uploads.</div>;

  return (
    <div id="gallery" className="relative w-full min-h-screen overflow-hidden">
      <img
        src={bgImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
      />

      <div className="relative z-10 flex flex-col items-center min-h-screen px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl">
          {filteredUploads?.map((upload) => (
            <div
              key={upload._id}
              style={{ borderRadius: "0px 40px 0px 40px" }}
              className="overflow-hidden w-full h-48 sm:h-56 md:h-60 lg:h-64"
            >
              {upload.imageUrl && (
                <img
                  src={upload.imageUrl}
                  alt="Gallery Image"
                  className="w-full h-full object-cover rounded-lg"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
