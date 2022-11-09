import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Auth/AuthProvider";
import { TableRow } from "./TableRow";

export const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  const notify = (type) => {
    const Toast = type === "success" ? toast.success : toast.error;
    Toast(
      `${
        type === "success" ? "Review Deleted." : "Review couldn't be Deleted."
      }`,
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
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyReviews(data);
      });
  }, [user]);
  const deleteReview = (id) => {
    fetch(`http://localhost:5000/reviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const restReviews = myReviews.filter(
            (myReview) => myReview._id !== id
          );
          setMyReviews(restReviews);
          notify("success");
        } else notify("error");
      })
      .catch((er) => {
        notify("error");
        console.error(er);
      });
  };
  return (
    <>
      <div>
        <div className="sm:px-6 w-full">
          <div className="px-4 md:px-10 py-4 md:py-7">
            <div className="flex items-center justify-between">
              <p className="text-base font-mono sm:text-xl md:text-2xl lg:text-3xl font-medium leading-normal text-gray-800">
                My{" "}
                <span className="relative inline-block px-2">
                  <div className="absolute inset-0 transform -skew-x-12 bg-teal-accent-400" />
                  <span className="relative text-teal-900">Reviews</span>
                </span>
              </p>
            </div>
          </div>
          <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
            <div className="sm:flex items-center justify-between">
              <div className="flex items-center">
                <a>
                  <div className="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full">
                    <p>All</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="mt-7 overflow-x-auto">
              <table className="w-full whitespace-nowrap">
                <tbody>
                  {myReviews.length === 0 ? (
                    <td>
                      <h1 className="text-xl text-red-400 md:text-2xl lg:text-3xl">
                        No Reviews Were Added!
                      </h1>
                    </td>
                  ) : (
                    myReviews.map((myReview, idx) => (
                      <TableRow
                        key={myReview._id}
                        myReview={{ ...myReview, idx, deleteReview }}
                      />
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
