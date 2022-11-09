import { createBrowserRouter } from "react-router-dom";
import { Main } from "../Layout/Main";
import { Home } from "../Pages/Home/Home";
import { Services } from "../Pages/Home/Services/Services";
import { Login } from "../Pages/Login/Login";
import { MyReviews } from "../Pages/MyReviews/MyReviews";
import { Register } from "../Pages/Register/Register";
import { Service } from "../Pages/Service/Service";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/services",
        element: <Services />,
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "/service/:id",
        element: <Service />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/service/${params.id}`),
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
        path: "my-reviews",
        element: <MyReviews />,
      },
    ],
  },
]);
