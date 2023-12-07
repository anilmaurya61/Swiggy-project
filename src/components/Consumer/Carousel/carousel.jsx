import React, { useState, useEffect } from 'react';
import './carousel.css';

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = [
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/731031544495581f1d6884624aa3ecf5",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/d59fb2bd4af3a0850d426a658172f899",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/071d07e5d5deb5e3da47feef18fb14fc",
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/731031544495581f1d6884624aa3ecf5",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/4bb5e5e0ff6ee6d8465bb57a439085c1"
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 3000); 
    return () => clearInterval(intervalId);
  }, [carouselImages.length]);

  const rotatedImages = [
    ...carouselImages.slice(currentImageIndex),
    ...carouselImages.slice(0, currentImageIndex)
  ];

  return (
    <div className="carousel-container">
      <div className="header">
        <h1>Best offers for you</h1>
      </div>
      <div className="carousel-wrapper">
        <div className="offer-card-container">
          {rotatedImages.map((image, index) => (
            <img key={index} src={image} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
