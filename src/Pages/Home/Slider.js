import React from "react";
import img1 from "../../assets/images/carousel/img-1.jpg";
import img2 from "../../assets/images/carousel/img-2.jpg";
import img3 from "../../assets/images/carousel/img-3.jpg";
import img4 from "../../assets/images/carousel/img-4.jpg";

import { SliderItems } from "./SliderItems";

export const Slider = () => {
  const sliders = [
    {
      image: img1,
      prev: 4,
      id: 1,
      next: 2,
    },
    {
      image: img2,
      prev: 1,
      id: 2,
      next: 3,
    },
    {
      image: img3,
      prev: 2,
      id: 3,
      next: 4,
    },
    {
      image: img4,
      prev: 3,
      id: 4,
      next: 1,
    },
  ];
  return (
    <div className="carousel relative w-full h-screen">
      {sliders.map((slideData) => (
        <SliderItems slideData={slideData} />
      ))}
    </div>
  );
};
