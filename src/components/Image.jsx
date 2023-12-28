import React from "react";

const images = [
  { url: "/Art1.jpg", alt: "Image 1" },
  { url: "/Art2.jpeg", alt: "Image 2" },
  { url: "/Art3.jpeg", alt: "Image 3" },
];

const Image = () => {
  return (
    <section className="flex-1 flex flex-col items-center bg-gray-100 p-4">
      <div className="flex flex-wrap justify-center">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-64 h-64 md:w-96 md:h-96 lg:w-96 lg:h-96 xl:w-96 xl:h-96 mx-2 mb-4 overflow-hidden bg-gray-100"
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Image;
