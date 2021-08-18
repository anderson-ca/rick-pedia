import React from "react";
import "./style/CharacterCard.css";

function CharacterCard({ name, status, species, gender, img }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img className="flip-card-image" src={img} alt="poopxxpoop" />
        </div>
        <div className="flip-card-back">
          <h1>{name}</h1>
          <p>{status}</p>
          <p>{species}</p>
          <p>{gender}</p>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
