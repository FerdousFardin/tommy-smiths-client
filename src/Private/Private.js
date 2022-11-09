import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import { Helmet } from "react-helmet-async";

export const Private = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading)
    return (
      <div className="w-full h-screen">
        <Helmet>
          <title>Loading - Tommy Smiths Photography</title>
          <meta name="Loading" content="Loading Page" />
        </Helmet>
        {/* <!-- component --> */}
        <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
          <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-20 w-20"></div>
        </div>
      </div>
    );
  if (user?.uid) return <> {children}</>;
  else
    return <Navigate to="/login" state={{ from: location }} replace={true} />;
};
