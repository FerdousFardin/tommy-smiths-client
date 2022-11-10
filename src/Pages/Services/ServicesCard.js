import React from "react";
import { Link } from "react-router-dom";
import { PhotoViewer } from "../Services/PhotoViewer";

export const ServicesCard = ({
  service: { _id, title, img, benifits, description, price },
}) => {
  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
      <PhotoViewer img={img} imgStyles={"object-cover w-full h-64"} />
      <div className="p-5 border border-t-0">
        <div className="flex justify-between items-center">
          <Link
            to={`/service/${_id}`}
            aria-label="Category"
            title={`Visit ${title}`}
            className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-teal-accent-400"
          >
            {title}
          </Link>
          <p className="border-2 rounded-lg px-2 py-1 border-teal-accent-200 text-teal-accent-700 font-medium md:font-semibold">
            {price}
          </p>
        </div>
        <p className="my-2">You'll obtain</p>
        <ul className="grid sm:grid-cols-2 p-1 border-2 rounded-md mb-2">
          {benifits.map((benifit, idx) => (
            <li key={idx} className="flex items-center gap-1 ">
              <img
                src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                alt="check-mark"
              />
              <p className="text-gray-800 text-xs font-normal">{benifit}</p>
            </li>
          ))}
        </ul>
        <p className="mb-2 text-gray-700">{description.slice(0, 100)}...</p>
        <Link
          to={`/service/${_id}`}
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-200 hover:text-deep-purple-900"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
};
