import React from "react";
import LeandingPageIn from "./LeandingPageIn";
import "./HomeLeangingPage.css";

const HomeLeangingPage = () => {
  return (
    <div
      className="h-72 bg-cyan-500 my-4 mb-16"
      style={{
        backgroundImage: `url("https://i.ibb.co/7t0Zqbn/banner-Img.png")`,
      }}
    >
      <div
        className="leandingPageIn bg-cyan-600"
        style={{
          backgroundImage: `url("https://blog.bdshop.com/wp-content/uploads/2016/10/online-shopping-in-Bangladesh.jpg")`,
        }}
      >
        <LeandingPageIn></LeandingPageIn>
      </div>
    </div>
  );
};

export default HomeLeangingPage;
