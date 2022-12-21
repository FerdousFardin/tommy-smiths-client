import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ServicesCardHome } from "./ServicesCardHome";

export const ServiceHome = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://tom-smiths-photography.vercel.app/services?limit=3")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="py-10 mx-20 text-3xl font-mono tracking-tight  sm:text-4xl sm:leading-none">
          My{" "}
          <span className="relative inline-block px-2">
            <div className="absolute inset-0 transform -skew-x-12 bg-teal-accent-400" />
            <span className="relative text-teal-900">Services</span>
          </span>
        </h2>
        <p className="font-extrabold text-gray-700 md:text-xl">
          DO YOU WANT ME TO SHOOT YOU?
        </p>
      </div>
      <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service._id}
            className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2"
          >
            <ServicesCardHome service={service} />
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link
          to={"/services"}
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none"
        >
          See All
        </Link>
      </div>
    </div>
  );
};
