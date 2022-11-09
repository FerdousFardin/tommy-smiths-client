import React from "react";
import { Helmet } from "react-helmet-async";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export const AddServices = () => {
  const { register, handleSubmit } = useForm();
  const notify = (type) => {
    const Toast = type === "success" ? toast.success : toast.error;
    Toast(
      `${type === "success" ? "Service Added." : "Service couldn't be Added."}`,
      {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      }
    );
  };
  const addService = (data) => {
    // console.log(data);
    const serviceDetails = data;
    serviceDetails.benifits = data.benifits.split(".");
    serviceDetails.rating = +(
      Math.round(Math.random() * 3) +
      1 +
      Math.random()
    ).toFixed(1);
    serviceDetails.date = Date.now();
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(serviceDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          notify("success");
        } else notify("error");
      })
      .catch((er) => {
        console.error(er);
        notify("error");
      });
  };
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Add a Service - Tommy Smiths Photography</title>
        <meta name="Add Service" content="Add Service Page" />
      </Helmet>
      <div className="flex justify-center px-6 my-12">
        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
          <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg bg-[url('https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=680')]"></div>

          <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
            <h3 className="pt-4 text-2xl text-center">Add New Service</h3>
            <form
              onSubmit={handleSubmit(addService)}
              className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
            >
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="service-title"
                  >
                    Title
                  </label>
                  <input
                    {...register("title")}
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="service-title"
                    type="text"
                    placeholder="Service Title"
                  />
                </div>
                <div className="md:ml-2">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="price"
                  >
                    Price
                  </label>
                  <input
                    {...register("price")}
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="price"
                    type="text"
                    defaultValue="$"
                    placeholder="$Price"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="imgURL"
                >
                  Service Thumbnail URL
                </label>
                <input
                  {...register("img")}
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="imgURL"
                  type="url"
                  placeholder="Image URL"
                />
              </div>
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="facilities"
                  >
                    Facilities
                  </label>
                  <textarea
                    {...register("benifits")}
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="facilities"
                    type=""
                    placeholder="Please separate facilities by a period ( . )"
                  />
                  {/* TODO: error */}
                  {/* <p className="text-xs italic text-red-500">
                    Please choose a password.
                  </p> */}
                </div>
                <div className="md:ml-2">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="description"
                  >
                    Description
                  </label>
                  <textarea
                    {...register("description")}
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="description"
                    placeholder="Description"
                  />
                </div>
              </div>
              <div className="mb-6 text-center">
                <input
                  className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="submit"
                  value="Add"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
