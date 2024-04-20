import React from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Facilities from "./components/Facilities";

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

  const roomImages = [
    {
      url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/km7M2-room3.jpg",
    },
    {
      url: "https://mayurstay.com/hotelhimalaya/images/package/banner/8GSHn-room-banner.jpg",
    },
    {
      url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/Q3Wun-room2.jpg",
    },
    {
      url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/AhKbK-room06.jpg",
    },
    {
      url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/ykMee-c.jpeg",
    },
  ];

  return (
    <>
      <Navbar />
      <Slider slides={slides} />
      <Facilities />
      <Slider slides={roomImages} />
    </>
  );
};

export default App;
