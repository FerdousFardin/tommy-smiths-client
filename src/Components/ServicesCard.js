import React from "react";
import { Link } from "react-router-dom";

export const ServicesCard = ({
  service: { title, img, benifits, description, price },
}) => {
  return (
    <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
      <div className="relative w-full h-48">
        <img
          src={img}
          className="object-cover w-full h-full rounded-t"
          alt="Plan"
        />
      </div>
      <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
        <div>
          <div className="text-xl lg:text-2xl font-semibold my-5">{title}</div>
          <div className="text-lg font-medium">You'll get</div>
          <ul className="py-5">
            {benifits.map((benifit) => (
              <li className="flex items-center mb-2.5">
                <img
                  src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                  className="mr-4"
                  alt="check-mark"
                />
                <p className="text-gray-800 text-base font-normal">{benifit}</p>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-900">
            {description.slice(0, 100)}...
          </p>
          <div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">
            {price}
          </div>
        </div>
        <Link
          to={""}
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        >
          More About {title}
        </Link>
      </div>
    </div>
  );
};