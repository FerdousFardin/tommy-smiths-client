export const About = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-mono text-3xl font-medium  tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                <span className="relative inline-block text-deep-purple-accent-400">
                  About
                </span>
              </span>{" "}
              Me
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              I'm a published Photography enthusiast, living in Austin, Texas.
              It's all about documenting life for what it is. I have specialized
              in capturing the candid moments of your day. I love to capture the
              emotions and details of everything. I am also available for
              freelance on UpWork.
            </p>
          </div>
          <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
            <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5">
                  I'm a reliable service provider
                </h6>
                <p className="text-sm text-gray-900">
                  with well over 500 satisfied customers already! Contact me for
                  a free quote today.
                </p>
              </div>
            </div>
            <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5">
                  Have a near 10-year track record of success
                </h6>
                <p className="text-sm text-gray-900">
                  servicing any problem, in home or on site.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="https://img.freepik.com/free-photo/front-view-cute-man-posing-with-his-hands-his-chin_23-2148946266.jpg?w=996&t=st=1668012324~exp=1668012924~hmac=1575a3ee1072e62b8b9f89d4e30265e73e9f45615299ac2b4f88021ab57b9312"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
