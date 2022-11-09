import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { PhotoViewer } from "../Services/PhotoViewer";
import { Reviews } from "./Reviews";

export const Service = () => {
  const [{ _id, title, img, price, description, rating }] = useLoaderData();
  // console.log(img);
  return (
    <div className="dark:bg-gray-900 py-20 px-5 lg:px-5">
      <div className="mx-auto sm:text-center lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block my-5">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative font-thin font-mono">
                <div className="absolute inset-0 transform -skew-x-12 bg-teal-accent-400" />
                <span className="relative text-teal-900">About</span>
              </span>
            </span>
            <br />
            {title}
          </h2>
        </div>
        <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
          <PhotoViewer
            imgStyles={
              "object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
            }
            img={img}
          />
        </div>
        <p className="max-w-xl mb-4 text-base text-gray-700 sm:mx-auto">
          {description}
        </p>
        <Link
          aria-label=""
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        >
          Buy Now
          <svg
            className="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </Link>
      </div>
      <Reviews _id={_id} title={title} />
    </div>
  );
};
