import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About/About";
import Collection from "../../Pages/Collection/Collection/Collection";
import Freatures from "../../Pages/Features/Features/Freatures";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login&Ragister/Login/Login";
import SignUp from "../../Pages/Login&Ragister/SignUp/SignUp";
import Shop from "../../Pages/Shops/Shop/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/features",
        element: <Freatures></Freatures>,
      },
      {
        path: "/collection",
        element: <Collection></Collection>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/aboutus",
        element: <About></About>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
