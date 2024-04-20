import React, { useState } from "react";
import {
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const duration = 1000;

  return (
    <div className="w-full h-screen relative group">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.url}
          alt={`Slide ${index}`}
          className={`w-full h-full object-cover absolute top-0 left-0 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          } transition-all duration-${duration}`}
        />
      ))}

      <button
        onClick={prevSlide}
        className={`absolute top-1/2 -translate-y-1/2 left-5 rounded-full p-2 bg-black/20 text-white cursor-pointer group-hover:scale-100 scale-0 transition-all duration-${duration}`}
      >
        <HiOutlineArrowLongLeft className="text-2xl" />
      </button>
      <button
        onClick={nextSlide}
        className={`absolute top-1/2 -translate-y-1/2 right-5 rounded-full p-2 bg-black/20 text-white cursor-pointer group-hover:scale-100 scale-0 transition-all duration-${duration}`}
      >
        <HiOutlineArrowLongRight className="text-2xl" />
      </button>
    </div>
  );
};

export default Slider;
