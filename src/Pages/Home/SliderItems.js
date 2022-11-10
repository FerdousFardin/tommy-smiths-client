import React from "react";

export const SliderItems = ({ slideData: { image, prev, id, next } }) => {
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full ">
      <img src={image} className="object-cover w-full h-auto sm:rounded-md" />
      <div className="absolute flex justify-end gap-5 transform right-5 top-10">
        <a
          href={`#slide${prev}`}
          className="btn bg-opacity-40 hover:bg-pink-accent-100 border-0 btn-circle"
        >
          ❮
        </a>
        <a
          href={`#slide${next}`}
          className="btn bg-opacity-40 hover:bg-pink-accent-100 border-0 btn-circle"
        >
          ❯
        </a>
      </div>
    </div>
  );
};
