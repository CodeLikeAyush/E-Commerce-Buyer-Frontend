// import React, { useState } from "react";

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   let startX;

//   const images = [
//     "https://speedysense.com/wp-content/uploads/2023/01/codelobster-ide.jpg",
//     "https://speedysense.com/wp-content/uploads/2023/01/codelobster-ide.jpg",
//     "https://speedysense.com/wp-content/uploads/2023/01/codelobster-ide.jpg",
//     // Add more image URLs as needed
//   ];

//   const showSlide = (index) => {
//     if (index < 0) {
//       setCurrentIndex(images.length - 1);
//     } else if (index >= images.length) {
//       setCurrentIndex(0);
//     } else {
//       setCurrentIndex(index);
//     }
//   };

//   const prevSlide = () => {
//     showSlide(currentIndex - 1);
//   };

//   const nextSlide = () => {
//     showSlide(currentIndex + 1);
//   };

//   const startTouch = (event) => {
//     startX = event.touches[0].clientX;
//   };

//   const moveTouch = (event) => {
//     if (startX != null) {
//       const currentX = event.touches[0].clientX;
//       const diffX = startX - currentX;

//       if (Math.abs(diffX) > 50) {
//         if (diffX > 0) {
//           nextSlide();
//         } else {
//           prevSlide();
//         }
//         startX = null;
//       }
//     }
//   };

//   return (
//     <div
//       className="relative w-full h-[300px] mt-5 mx-auto overflow-hidden"
//       onTouchStart={startTouch}
//       onTouchMove={moveTouch}
//     >
//       <div
//         className="flex transition-transform duration-500 ease-in-out"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {images.map((image, index) => (
//           <div key={index} className="w-full">
//             <img
//               src={image}
//               alt={`Image ${index + 1}`}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         ))}
//       </div>
//       <button
//         className="absolute top-1/2 transform -translate-y-36 left-4 bg-gray-700 text-white w-8 h-8 rounded-full cursor-pointer"
//         onClick={prevSlide}
//       >
//         ‹
//       </button>
//       <button
//         className="absolute top-1/2 transform -translate-y-36 right-4 bg-gray-700 text-white w-8 h-8 rounded-full cursor-pointer"
//         onClick={nextSlide}
//       >
//         ›
//       </button>
//     </div>
//   );
// };

// export default Carousel;

import React, { useState, useEffect } from "react";

const Carousel = () => {
  const dummyImages = [
    "https://placekitten.com/800/400",
    "https://placekitten.com/800/401",
    "https://placekitten.com/800/402",
  ];

  const dummyCaptions = ["Cute Kitten 1", "Cute Kitten 2", "Cute Kitten 3"];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % dummyImages.length);
    }, 3000); // Change the interval time as needed

    return () => clearInterval(interval);
  }, [currentSlide, dummyImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % dummyImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? dummyImages.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="flex transition-transform duration-300 ease-in-out transform -translate-x-full">
        {dummyImages.map((image, index) => (
          <div
            key={index}
            className={`w-full h-full bg-cover bg-center relative`}
            // style={{ backgroundImage: `url(${image})` }}
            style={{
              backgroundImage: 'url("https://placekitten.com/800/400")',
            }}
          >
            <img
              src={image}
              alt={`slide-${index}`}
              className="w-full h-full opacity-0"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50">
              <div className="flex items-center justify-between px-4 py-2 text-white">
                <p>{dummyCaptions[index]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {dummyImages.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 bg-white rounded-full cursor-pointer ${
              index === currentSlide ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
