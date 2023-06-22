import React from "react";
import boatImage from "../images/Vector.png";
import boatImage1 from "../images/Vector (6).png"
import circleBoatImg from "../images/Ellipse 1.png"

function Boat(props) {
  return (
    <div className="boat">
      <center className="searching">
        <h4> What are you looking for?</h4>
      </center>
      <p className="lorem1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis
      </p>

      <div className="boat-card">
        <img className="boat-img" src={boatImage} alt="" />
        <p className="boat-p">{props.title}</p>
        <p className="card-hrs">{props.timeCard}</p>
        <p className="card-lorem">
         {props.cardLorem}
        </p>
        <img className="boat-image1" src={boatImage1} alt="" />
        <img className="boat-circle" src={ circleBoatImg } alt="" />
      </div>
    </div>
  );
}

export default Boat;
