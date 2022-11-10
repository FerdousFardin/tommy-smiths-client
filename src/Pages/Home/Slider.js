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
    <section className="relative">
      <h2 className="py-10 mx-20 text-3xl font-mono tracking-tight  sm:text-4xl sm:leading-none">
        My{" "}
        <span className="relative inline-block px-2">
          <div className="absolute inset-0 transform -skew-x-12 bg-teal-accent-400" />
          <span className="relative text-teal-900">Gallery</span>
        </span>
      </h2>
      <p className=" absolute top-2 lg:top-5 right-20 w-1/3 mb-6 text-sm md:text-base text-right text-gray-700 lg:text-lg">
        I wanted to tell a story on the street. While often in the magazines the
        act of walking is portrayed in a stereotyped and frankly boring way,
        this is where looking to the future is for me, this is where the future
        is for me.
      </p>
      <div className="px-20 bg-slate-200">
        <div className="carousel py-20 relative w-full h-screen">
          {sliders.map((slideData, idx) => (
            <SliderItems key={idx} slideData={slideData} />
          ))}
        </div>
      </div>
    </section>
  );
};
