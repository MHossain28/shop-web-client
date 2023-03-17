import React, { useState } from "react";
import "./CardComponent.css";
import SingleCard from "./SingleCard";

const CardComponent = () => {
  const [cardItems, setCardItem] = useState([]);

  fetch(`homeShowCard.json`)
    .then((response) => response.json())
    .then((data) => setCardItem(data));

  return (
    <div className="my-6">
      <div className="mx-auto text-center w-3/4">
        <h1 className="text-3xl my-2">SHOPPING BY CATEGORIES</h1>
        <p className="">
          TEEMAX STORE, ALL THE T-SHIRTS, SWEATSHIRTS, HOODIES, TANK TOPS, MUG
          THAT YOU COULD BE LOOKING FOR
        </p>
      </div>
      <div className="grid lg:grid-cols-6 md:grid-cols-3 sm-grid-cols-1">
        {cardItems.map((cardItem) => (
          <SingleCard key={cardItem.id} cardItem={cardItem}></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
