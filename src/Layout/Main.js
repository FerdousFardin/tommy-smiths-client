import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Shared/Header/Header";

export const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
      <footer />
    </>
  );
};
