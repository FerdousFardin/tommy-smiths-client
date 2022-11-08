import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

export const ServicesCard = ({
  service: { _id, title, img, benifits, description, price },
}) => {
  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
      <PhotoProvider>
        <PhotoView src={img}>
          <img src={img} className="object-cover w-full h-64" alt="" />
        </PhotoView>
      </PhotoProvider>
      {/*  */}
      <div className="p-5 border border-t-0">
        <a
          href="/"
          aria-label="Category"
          title="Visit the East"
          className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
        >
          {title}
        </a>
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
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
};
