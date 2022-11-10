import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { PhotoViewer } from "../Services/PhotoViewer";
import { Reviews } from "./Reviews";
import { Helmet } from "react-helmet-async";
import { Facilities } from "./Facilities";

export const Service = () => {
  const [{ _id, title, img, price, description, rating, benifits }] =
    useLoaderData();
  return (
    <>
      {_id ? (
        ""
      ) : (
        <div className="w-full h-screen">
          <div className="w-full h-screen">
            <Helmet>
              <title>Loading - Tommy Smiths Photography</title>
              <meta name="Loading" content="Loading Page" />
            </Helmet>
            {/* <!-- component --> */}
            <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
              <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-20 w-20"></div>
            </div>
          </div>
        </div>
      )}
      <div className="dark:bg-gray-900 py-20 px-5 sm:px-0">
        <Helmet>
          <title>{title} - Tommy Smiths Photography</title>
          <meta name="Services" content="Services Page" />
        </Helmet>
        <div className="mx-auto sm:text-center lg:max-w-2xl sm:px-5 ">
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
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none"
          >
            Buy now for {price}
            <svg
              className="inline-block w-3 ml-2"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
            </svg>
          </Link>
        </div>
        <h2 className="my-10 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none text-center">
          Facilities
        </h2>
        <div className="bg-gray-100 my-10">
          <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
              <svg
                viewBox="0 0 88 88"
                className="w-full max-w-screen-xl text-indigo-100"
              >
                <circle fill="currentColor" cx="44" cy="44" r="15.5" />
                <circle
                  fillOpacity="0.2"
                  fill="currentColor"
                  cx="44"
                  cy="44"
                  r="44"
                />
                <circle
                  fillOpacity="0.2"
                  fill="currentColor"
                  cx="44"
                  cy="44"
                  r="37.5"
                />
                <circle
                  fillOpacity="0.3"
                  fill="currentColor"
                  cx="44"
                  cy="44"
                  r="29.5"
                />
                <circle
                  fillOpacity="0.3"
                  fill="currentColor"
                  cx="44"
                  cy="44"
                  r="22.5"
                />
              </svg>
            </div>

            <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {benifits.map((facility, idx) => (
                <Facilities key={idx} facility={facility} />
              ))}
            </div>
          </div>
        </div>
        <Reviews _id={_id} title={title} />
      </div>
    </>
  );
};
/*
export const Content = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-screen-sm sm:text-center sm:mx-auto">
        <a
          href="/"
          aria-label="View"
          className="inline-block mb-5 rounded-full sm:mx-auto"
        >
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-12 h-12 text-deep-purple-accent-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
        </a>
        <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          Chase ball of string eat
        </h2>
        <p className="text-base text-gray-700 md:text-lg sm:px-4">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
        <hr className="w-full my-8 border-gray-300" />
      </div>
    </div>
  );
};
*/
