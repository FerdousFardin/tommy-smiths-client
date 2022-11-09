import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from "react-router-dom";
import { route } from "./Routes/Routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="bg-slate-200 custom-font">
      <RouterProvider router={route} />
      <ToastContainer />
    </div>
  );
}

export default App;
