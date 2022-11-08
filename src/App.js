import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { route } from "./Routes/Routes";

function App() {
  return (
    <div>
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
