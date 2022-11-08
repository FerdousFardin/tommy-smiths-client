import React from "react";
import { useLoaderData } from "react-router-dom";

export const Service = () => {
  const service = useLoaderData();
  console.log(service);
  return <div>Service</div>;
};
