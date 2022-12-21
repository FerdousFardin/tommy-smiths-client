import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Auth/AuthProvider";
import { Review } from "./Review";

export const Reviews = ({ _id, title }) => {
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContext);
  const notify = (type) => {
    const Toast = type === "success" ? toast.success : toast.error;
    Toast(
      `${type === "success" ? "Review Added." : "Review couldn't be Added."}`,
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
  useEffect(() => {
    fetch(`https://tom-smiths-photography.vercel.app/reviews/${_id}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((er) => console.error(er));
  }, []);
  const addReview = (e) => {
    e.preventDefault();
    const date = Date.now();
    const review = e.target.review.value;
    const reviewBody = {
      date,
      service_id: _id,
      review,
      title,
      email: user?.email,
      photoURL:
        user?.photoURL ||
        "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=1&auto=format&fit=crop&w=64&h=64&q=60&crop=faces&bg=fff",
      name: user?.displayName || "Anonymous",
    };
    fetch("https://tom-smiths-photography.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewBody),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          reviewBody._id = data.insertedId;
          setReviews([reviewBody, ...reviews]);
          notify("success");
          e.target.reset();
        }
      })
      .catch((er) => {
        notify("error");
        console.error(er);
      });
  };
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:text-center md:mx-auto">
        What My Clients Say
      </h2>

      {reviews.length > 0 ? (
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {reviews.map((review) => (
            <Review key={review._id} review={review} />
          ))}
        </div>
      ) : (
        <h1 className="w-full mb-6  text-3xl font-thin leading-none tracking-tight text-red-accent-200 sm:text-4xl md:text-center py-20">
          No Reviews were added for this service!
        </h1>
      )}

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
              name="review"
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
          Please{" "}
          <Link to="/login" className="link-hover link-accent">
            {" "}
            Login
          </Link>{" "}
          to Add Review
        </h1>
      )}
    </div>
  );
};
