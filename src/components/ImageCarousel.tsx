import React, { useState } from "react";
import "../assets/css/styles.css";

const images = [
  "https://via.placeholder.com/400x250?text=Slide+1",
  "https://via.placeholder.com/400x250?text=Slide+2",
  "https://via.placeholder.com/400x250?text=Slide+3",
];

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <button className="nav-button left" onClick={goToPrev}>
          ←
        </button>
        <div className="carousel-inner">
          <div className="carousel-item">
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="custom-img"
            />
          </div>
        </div>
        <button className="nav-button right" onClick={goToNext}>
          →
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
