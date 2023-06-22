import React from "react";
import VectorImage from "../images/Vector.png";
import VectorCircle from "../images/Ellipse 1.png";
import VectorArrow from "../images/Vector (3).png";
import whiteEllipse from "../images/whiteEllipse.png";
import orangeEllipse from "../images/orangeEllipse.png";

function Hero() {
  return (
    <div className="hero">
      <div className="s"></div>
      <h1 className="title">Discover Mombasa Island like never before</h1>
      <p className="lorem">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis
      </p>

      <div className="private">
        <p className="private-p"> Private boat Charter</p>
        <p className="time">17 hrs Max</p>

        <img className="vector-circle" src={VectorCircle} alt="" />
        <img className="vector-img" src={VectorImage} alt="" />
        <img className="vector-arrow" src={VectorArrow} alt="" />
      </div>

      <div className="ellipse-dot-container">
        <img className="ellipse-dot" src={whiteEllipse} alt="" />
        <img className="ellipse-dot" src={whiteEllipse} alt="" />
        <img className="ellipse-dot" src={whiteEllipse} alt="" />
        <img className="ellipse-dot" src={orangeEllipse} alt="" />
        <img className="ellipse-dot" src={whiteEllipse} alt="" />
      </div>
    </div>
  );
}

export default Hero;
