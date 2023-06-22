import React from "react";
import TravelImage from "../images/Rectangle 6.png";
import CardVector from "../images/Vector (2).png";
import starVector from "../images/Star.png"

function Travel(props) {
  return (
    <div className="travel">
      <h2 className="travel-tittle">Travel & Excursion</h2>
      <p className="travel-p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis
      </p>

      <div className="card">
        <img className="travel-img " src={TravelImage} alt="" />
        <p className="card-p">{props.title}</p>
        <p className="card-price">{props.price}</p>
        <img className="card-vector" src={CardVector} />
        <p className="card-time">{props.hour}</p>
        <img className="star-vector" src={starVector} alt="" />
        <button className="btn">View All</button>
      </div>

    </div>
  );
}

export default Travel;
