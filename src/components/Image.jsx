const images = [
  { url: "/Art1.png", alt: "Image 1" },
  { url: "/Art2.png", alt: "Image 2" },
  { url: "/Art3.png", alt: "Image 3" },
];

const Image = () => {
  return (
    <section className="flex-1 flex flex-col items-center bg-gray-100 p-4">
      <div className="flex flex-wrap justify-center">
        {images.map((image, index) => (
          <div key={index} className="w-64 h-64 mx-2 mb-4 overflow-hidden">
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-none"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Image;
