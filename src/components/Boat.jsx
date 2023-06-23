import React from "react";
import boatImage from "../images/Vector.png";
import boatImage1 from "../images/Vector (6).png";
import circleBoatImg from "../images/Ellipse 1.png";

function Boat(props) {
  return (
    <div id="boat-card">
      <img id="boat-img" src={boatImage} alt="" />
      <img id="boat-card-circle" src={circleBoatImg} alt="" />
      
      <p id="boat-title">{props.title}</p>
      <p id="boat-card-time">{props.timeCard}</p>
      <p id="boat-card-desc">{props.cardLorem}</p>
      <img id="boat-card-image" src={boatImage1} alt="" />
    </div>
  );
}

export default Boat;
