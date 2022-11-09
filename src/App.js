import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from "react-router-dom";
import { route } from "./Routes/Routes";
import { ToastContainer } from "react-toastify";
import { HelmetProvider } from "react-helmet-async";

function App() {
  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
      <div className="bg-slate-200 custom-font">
        <RouterProvider router={route} />
        <ToastContainer />
      </div>
    </HelmetProvider>
  );
}

export default App;
