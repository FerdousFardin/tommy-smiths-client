import React from "react";

export const Review = ({
  review: { _id, title, service_id, photoURL, name, review },
}) => {
  return (
    <div className="p-8 bg-white border rounded shadow-sm">
      <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
        <a
          //   href="/"
          className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          aria-label="Category"
        >
          {title}
        </a>{" "}
        <span className="text-gray-600">— 1 Feb 2020</span>
      </p>
      <p className="mb-5 text-gray-700">
        {review.length > 150 ? review.slice(0, 150) + "..." : review}
      </p>
      <div className="flex items-center">
        <a aria-label="Author" title="Author" className="mr-3">
          <img
            src={photoURL}
            alt="avatar"
            className="object-cover w-10 h-10 rounded-full shadow-sm"
          />
        </a>
        <div>
          <a
            aria-label="Author"
            title="Author"
            className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            {name}
          </a>
          <p className="text-sm font-medium leading-4 text-gray-600">Client</p>
        </div>
      </div>
    </div>
  );
};
