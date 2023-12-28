import React from 'react';

const images = [
  { url: "/Art1.png", alt: "Image 1" },
  { url: "/Art2.png", alt: "Image 2" },
  { url: "/Art1.png", alt: "Image 3" },
  // Add more image URLs and alt text as needed
];

const Image = () => {
  return (
    <section className="flex-1 flex flex-col items-center bg-gray-100 p-4">
      <div className="flex flex-wrap justify-center">
        {images.map((image, index) => (
          <div key={index} className="max-w-md mb-4 mx-2">
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-56 md:h-72 lg:h-80 xl:h-96 object-cover object-contain rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Image;
