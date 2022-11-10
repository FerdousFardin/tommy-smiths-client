import React, { useContext } from "react";
import { toast } from "react-toastify";
import edit from "../../assets/images/icons/edit.png";
import { AuthContext } from "../../Auth/AuthProvider";
const Edit = ({
  modal: { modalHandler, SetmodalHandler, review, title, _id },
}) => {
  const notify = (type) => {
    const Toast = type === "info" ? toast.info : toast.error;
    Toast(
      `${type === "info" ? "Review Updated." : "Review couldn't be Updated."}`,
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
  const { signOutUser } = useContext(AuthContext);
  const editReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const newReview = form.newReview.value;
    fetch(`https://tom-smiths-photography.vercel.app/reviews/${_id}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({ review: newReview, date: Date.now() }),
    })
      .then((res) => {
        if (res.status === 403 || res.status === 401) return signOutUser();
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount) {
          notify("info");
          setTimeout(() => {
            SetmodalHandler(false);
          }, 1000);
        }
      })
      .catch((er) => {
        console.error(er);
        notify("error");
      });
  };
  return (
    <div>
      <div
        className={`${
          modalHandler ? "block" : "hidden"
        } py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0`}
        id="modal"
      >
        <div
          role="alert"
          className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
        >
          <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
            <div className="w-full flex justify-start text-gray-600 mb-3">
              <img className="w-8" src={edit} alt="" />
            </div>
            <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">
              Edit Your Review
            </h1>
            <form onSubmit={editReview}>
              <label
                htmlFor="title"
                className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
              >
                Title
              </label>
              <input
                id="title"
                className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                defaultValue={title}
                readOnly={true}
              />
              <label
                htmlFor="review"
                className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
              >
                Review
              </label>
              <div className="relative mb-5 mt-2">
                <textarea
                  name="newReview"
                  id="review"
                  className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-20 flex items-center text-sm border-gray-300 rounded border"
                  defaultValue={review}
                />
              </div>
              <div className="flex items-center justify-start w-full">
                <input
                  type="submit"
                  className="focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
                  value="Submit"
                />
              </div>
            </form>
            <button
              onClick={() => SetmodalHandler(false)}
              className="focus:outline-none mt-2 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
            >
              Cancel
            </button>
            <div
              onClick={() => SetmodalHandler(false)}
              className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Close"
                className="icon icon-tabler icon-tabler-x"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1={18} y1={6} x2={6} y2={18} />
                <line x1={6} y1={6} x2={18} y2={18} />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Edit;
