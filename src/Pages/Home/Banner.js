import React from "react";

export const Banner = () => {
  return (
    <>
      <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
        <img
          src="https://img.freepik.com/free-photo/front-view-smiley-male-photographer-with-camera_23-2148946289.jpg?w=826&t=st=1667884068~exp=1667884668~hmac=a9fad2b2f855f8a34b74977521f5b189770d12b8f49c3ceeaa30a8671d5fb73c"
          className="object-cover object-right w-full h-auto lg:w-auto lg:h-full"
          alt=""
        />
      </div>
      <div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
        <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs lg:text-sm font-semibold tracking-wider text-neutral-50 uppercase rounded-full bg-teal-accent-400">
                #1 Photo of The Year Winner!
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none">
              Photography
              <br className="hidden md:block" />
              helps people{" "}
              <span className="inline-block text-pink-accent-100">to see</span>
            </h2>
            <div className="text-left">
              <p className="text-base  text-gray-700 md:text-lg">
                From inspiring peoples story to impactful messages, I create
                head-turning photograph that does the right thing, in the right
                place, at the right time to unlock possibility
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
