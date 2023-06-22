import React from "react";
import TravelImage from "../images/Rectangle 6.png";
import CardVector from "../images/Vector (2).png";
import starVector from "../images/Star.png"
import VectorImage3 from "../images/Vector (6).png"

function Travel(props) {
  return (
    <div className="travsel">
      <div className="travel-card">
        <img id="travel-img" src={TravelImage} alt="" />
        <span id="travel-card-title">{props.title}</span>
        <br/>
        {/* <img className="" src={CardVector} /> */}
        <span className="">{props.hour}</span>
        <br/>
        <span id="travel-card-price">{props.price}</span>
        <br/>
        <img className="star-rate" src={starVector} alt="" />
        <img className="star-rate" src={starVector} alt="" />
        <img className="star-rate" src={starVector} alt="" />
        <img className="star-rate" src={starVector} alt="" />
        <img className="star-rate" src={starVector} alt="" />
        <img className="Vector-Image3" src={VectorImage3} alt="" />
      </div>
     

        {/* <button className="btn">View All</button> */}
    </div>
  );
}

export default Travel;
