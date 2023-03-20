import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import router from "./components/router/Routes/Routes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto app-css">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
