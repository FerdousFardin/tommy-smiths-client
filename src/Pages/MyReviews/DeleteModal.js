import React from "react";

const DeleteModal = ({ myReview: { title, review, _id, deleteReview } }) => {
  return (
    <>
      <input type="checkbox" id="deleteModal" className="modal-toggle" />
      <label
        className="modal modal-bottom sm:modal-middle"
        htmlFor="deleteModal"
      >
        <label className="modal-box relative" htmlFor="">
          <h3 className="font-bold text-lg">
            Are you sure you want to delete the review of {title}?
          </h3>
          <p className="py-4">
            The review was "{review?.length > 50 ? review.slice(0, 50) : review}
            "
          </p>
          <div className="modal-action">
            <label
              htmlFor="deleteModal"
              className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </label>
            <label
              htmlFor="deleteModal"
              onClick={() => deleteReview(_id)}
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Delete
            </label>
          </div>
        </label>
      </label>
    </>
  );
};

export default DeleteModal;
