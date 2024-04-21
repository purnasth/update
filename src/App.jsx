import React from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Facilities from "./components/Facilities";
import Accommodation from "./pages/Accommodation";
import Hall from "./pages/Hall";
import FilterButton from "./components/FilterButton";

const App = () => {
  const slides = [
    {
      url: "https://mayurstay.com/hotelhimalaya/images/slideshow/m9TAT-1.jpg",
    },
    {
      url: "https://mayurstay.com/hotelhimalaya/images/slideshow/mxXP9-2.jpg",
    },
    {
      url: "https://mayurstay.com/hotelhimalaya/images/slideshow/GDLNu-03.jpg",
    },
    {
      url: "https://mayurstay.com/hotelhimalaya/images/package/banner/GJ05P-banner.jpeg",
    },
    {
      url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/km7M2-room3.jpg",
    },
  ];

  const hallImages = [
    {
      url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/KN2OQ-event01.jpg",
    },
    {
      url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/OB5Aq-skyline2.jpg",
    },
    {
      url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/C0Ne4-rato.jpg",
    },
    {
      url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/R3YEn-regent4.jpg",
    },
    {
      url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/SFYSu-pdr4.jpg",
    },
    {
      url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/VyxO5-green4.jpg",
    },
  ];

  return (
    <>
      <Navbar />
      <Slider
        slides={slides}
        containerClassName="w-full h-screen"
        buttonClassName="hero-slider-button"
        imgClassName="w-full h-full object-cover absolute inset-0 transition-all duration-[2s]"
        trueClassName="opacity-100"
        falseClassName="opacity-0"
      />
      <FilterButton />
      <Facilities />
      <Accommodation />
      <Slider
        slides={hallImages}
        containerClassName="w-3/4 h-[80vh] mx-auto"
        buttonClassName="room-slider-button"
        imgClassName="w-full h-full object-cover absolute inset-0 transition-all duration-[1s]"
        trueClassName="opacity-100 scale-100"
        falseClassName="opacity-0 rotate-3 scale-80"
      />
      {/* <Slider
        slides={roomImages}
        containerClassName="w-1/3 h-96 overflow-hidden relative mx-auto mt-10 group"
        buttonClassName="room-slider-button"
        imgClassName="w-full h-full object-cover absolute inset-0 transition-all duration-[1s]"
        trueClassName="opacity-100 scale-100 translate-y-0"
        falseClassName="opacity-0 scale-90 -translate-y-4 -z-10"
      /> */}
      <Hall />
    </>
  );
};

export default App;
