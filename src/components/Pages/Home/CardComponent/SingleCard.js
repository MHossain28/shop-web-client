import React from "react";
import { Link } from "react-router-dom";
import "./SingleCard.css";

const SingleCard = ({ cardItem }) => {
  return (
    <div className="my-6">
      <img className="w-full" src={cardItem.img} alt="" />
      <div className="text-center ">
        <Link className="name-btn text-center " to="/">
          {cardItem.name}
        </Link>
      </div>
    </div>
  );
};

export default SingleCard;
