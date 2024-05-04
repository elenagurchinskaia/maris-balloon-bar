import React from "react";
import "../styles/Gallery.css";
import Navbar from "../components/Navbar";

function Gallery() {
  const images = Array.from({ length: 12 }).map((_, index) => ({
    src: `https://via.placeholder.com/150?text=Image+${index + 1}`,
    alt: `Placeholder image ${index + 1}`,
  }));

  return (
    <>
      <Navbar />
      <div className="gallery">
        <h1>Gallery</h1>
        <div className="image-grid">
          {images.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Gallery;
