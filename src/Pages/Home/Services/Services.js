import React from "react";
import { useLoaderData } from "react-router-dom";
import { ServicesCard } from "./ServicesCard";

export const Services = () => {
  const services = useLoaderData();
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h2 className="max-w-lg mb-6 text-3xl custom-font font-semibold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">
        <span className="relative inline-block uppercase ">
          <svg
            viewBox="0 0 52 24"
            fill="currentColor"
            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-200 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
          >
            <defs>
              <pattern
                id="db164e35-2a0e-4c0f-ab05-f14edc6d4d30"
                x="0"
                y="0"
                width=".135"
                height=".30"
              >
                <circle cx="1" cy="1" r=".7" />
              </pattern>
            </defs>
            <rect
              fill="url(#db164e35-2a0e-4c0f-ab05-f14edc6d4d30)"
              width="52"
              height="24"
            />
          </svg>
          Pricing
        </span>
      </h2>
      <p className="uppercase text-lg lg:text-2xl text-center my-10">
        Ready to Hire me?
      </p>
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {services.map((service) => (
          <ServicesCard service={service} key={service._id} />
        ))}
      </div>
    </div>
  );
};
