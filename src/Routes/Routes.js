import { createBrowserRouter } from "react-router-dom";
import { Main } from "../Layout/Main";
import { Home } from "../Pages/Home/Home";
import { Services } from "../Pages/Home/Services/Services";

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
    ],
  },
]);
