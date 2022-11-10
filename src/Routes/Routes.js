import { createBrowserRouter } from "react-router-dom";
import { Main } from "../Layout/Main";
import { Home } from "../Pages/Home/Home";
import { Services } from "../Pages/Services/Services";

import { Login } from "../Pages/Login/Login";
import { MyReviews } from "../Pages/MyReviews/MyReviews";
import { Register } from "../Pages/Register/Register";
import { Service } from "../Pages/Service/Service";
import Error from "../Pages/Error/Error";
import { AddServices } from "../Pages/AddServices/AddServices";
import { Private } from "../Private/Private";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/services",
        element: <Services />,
        loader: () =>
          fetch("https://tom-smiths-photography.vercel.app/services"),
      },
      {
        path: "/service/:id",
        element: <Service />,
        loader: ({ params }) =>
          fetch(
            `https://tom-smiths-photography.vercel.app/service/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/add-services",
        element: (
          <Private>
            <AddServices />
          </Private>
        ),
      },
      {
        path: "/my-reviews",
        element: (
          <Private>
            <MyReviews />
          </Private>
        ),
      },
      {
        path: "/blog",
        element: <blog />,
      },
    ],
  },
]);
