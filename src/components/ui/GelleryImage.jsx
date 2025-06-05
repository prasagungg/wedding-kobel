import { useState } from "react";

// eslint-disable-next-line react/prop-types
function GalleryImage({ src, alt, name }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      key={name}
      className="group relative w-[280px] sm:w-[280px] rounded-xl overflow-hidden border border-rose-200 shadow-md"
    >
      <img
        src={src}
        alt={alt}
        className={`
          w-full h-40 object-cover
          transition-all duration-700 ease-in-out
          ${imageLoaded ? "blur-0 scale-100" : "blur-lg scale-105"}
        `}
        loading="lazy"
        onLoad={() => setImageLoaded(true)}
        onError={() => console.error(`Failed to load image: ${src}`)}
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300 rounded-xl" />
    </div>
  );
}

export default GalleryImage;
