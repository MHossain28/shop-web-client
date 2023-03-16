import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../sheard/Footer/Footer";
import Navbar from "../sheard/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
