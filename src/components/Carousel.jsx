import React, { useState, useEffect } from "react";

function Carousel() {
  const images = [
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/352e6f0f8034fab5.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/95564d0826dea067.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/aa1b2bdcf519b468.jpg?q=20",
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, [activeIndex, images.length]);

  return (
    <div className="mt-5 border-2 h-80 w-full">
      <img
        src={images[activeIndex]}
        alt={`slide-show-image${activeIndex}`}
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export default Carousel;
