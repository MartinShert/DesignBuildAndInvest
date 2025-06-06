import React, { useState } from "react";
import "../assets/css/styles.css";

const images = [
  "https://via.placeholder.com/400x250?text=Slide+1",
  "https://via.placeholder.com/400x250?text=Slide+2",
  "https://via.placeholder.com/400x250?text=Slide+3",
];

const ImageCarousel: React.FC = () => {
  const [currentIndex] = useState(0); // Navigation removed, static image for now

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div className="carousel-inner">
          <div className="carousel-item">
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="custom-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
