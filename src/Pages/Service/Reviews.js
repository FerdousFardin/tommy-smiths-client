import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import { Review } from "./Review";

export const Reviews = () => {
  const { user } = useContext(AuthContext);
  const addReview = (e) => {
    e.preventDefault();
  };
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:text-center md:mx-auto">
        What My Clients Say
      </h2>
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <Review />
      </div>
      {user?.email ? (
        <>
          <h2 className="max-w-lg my-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:text-center md:mx-auto">
            Want to add your Review?
          </h2>
          <form
            onSubmit={addReview}
            className="form-control sm:w-2/3 lg:w-1/3 mx-auto"
          >
            <label className="label">
              <span className="label-text">Your review</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Review"
            ></textarea>
            <div className="flex justify-end pt-10">
              <input
                className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-1/3"
                type="submit"
                value="Add Review"
              />
            </div>
          </form>
        </>
      ) : (
        <h1 className="text-info text-center my-10 text-lg md:text-2xl lg:text-4xl">
          Please Login to Add Review
        </h1>
      )}
    </div>
  );
};
