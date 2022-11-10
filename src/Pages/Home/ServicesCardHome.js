import React from "react";
import { Link } from "react-router-dom";
import { PhotoViewer } from "../Services/PhotoViewer";

export const ServicesCardHome = ({
  service: { title, img, benifits, description, price, _id },
}) => {
  return (
    <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
      <div className="relative w-full ">
        <PhotoViewer
          img={img}
          imgStyles={"object-cover w-full h-48 rounded-t"}
        />
      </div>
      <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
        <div>
          <div className="text-xl lg:text-2xl font-semibold my-5">{title}</div>
          <div className="text-lg font-medium">You'll get</div>
          <ul className="py-5">
            {benifits.map((benifit, idx) => (
              <li key={idx} className="flex items-center mb-2.5">
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
            {description.length > 100
              ? description.slice(0, 100) + "..."
              : description}
          </p>
          <div className="mt-1 mb-4 mr-1 text-3xl font-bold sm:text-4xl">
            {price}
          </div>
        </div>
        <Link
          to={`/service/${_id}`}
          className="inline-flex items-center justify-center w-full px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-pink-accent-200 hover:bg-pink-accent-700 focus:shadow-outline focus:outline-none text-center h-16"
        >
          More About {title}
        </Link>
      </div>
    </div>
  );
};
