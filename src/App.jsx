import React from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Facilities from "./components/Facilities";

const App = () => {
  const slides = [
    {
      url: "https://img.freepik.com/free-photo/nature-landscape-with-black-sand-beach_23-2151380344.jpg?t=st=1713492283~exp=1713495883~hmac=7746bf20b479e6aff84d89ecb99e6c680748f7855cd4aeb42ff07c44517c0919&w=1380",
    },
    {
      url: "https://img.freepik.com/free-photo/beautiful-mountains-landscape_23-2151151063.jpg?t=st=1713491654~exp=1713495254~hmac=f4926cd25b8d873d307d5b8d5a37e7bd2e967a3d215df74e5426e182335e6a93&w=1380",
    },
    {
      url: "https://img.freepik.com/free-photo/lonely-boats-calm-lake-with-misty-mountain-background_23-2148153617.jpg?t=st=1713493292~exp=1713496892~hmac=2adf5dacddacdba293112e45dcd7bf2b62872ede379de25744882d072aac0d01&w=1060",
    },
    {
      url: "https://img.freepik.com/free-photo/nature-tranquil-beauty-reflected-calm-water-generative-ai_188544-12798.jpg?w=1380&t=st=1713493187~exp=1713493787~hmac=b098e55d3032f6ba47863bcd99ccfe8dd4d810a369f765bb4fa4592926566a6f",
    },
  ];

  const hallImages = [
    {
      url: "https://www.ambientha.com/wp-content/uploads/2020/11/idee-carta-da-parati-soggiorno-broken-ocean-ambientha-1536x1023.jpg"
    },
    {
      url: "https://www.giffywalls.com/blog/wp-content/uploads/2021/12/new-aqua-onyx-stone-texture-marble-wallpaper-mural.jpg"
    }
  ];

  return (
    <>
      <Navbar />
      <Slider slides={slides} />
      <Facilities />
      <Slider slides={hallImages} />
    </>
  );
};

export default App;
