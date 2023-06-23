import React from "react";
import palmTree from "../images/palmTree.png"
import addidasImage from "../images/addidas.png"
import pumaImage from "../images/puma.png"


function SignUp() {
  return (
    <div className="signUp">
      <div className="mombasaIsland">
        <div className="signUp-background">
          <span className="signUp-title">
            Image of the western coast of Mombasa Island
          </span>
        </div>
      </div>
      <div className="news-signup">
        <img className="palmTree-img" src={palmTree} alt="" />
        <span className="news-letter">Signup for our newsletter</span>
        <span className="signup-lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut</span>
        <input className="email" type="email" placeholder="Enter your email address" />
        <button id="submit-btn">Submit</button>
      </div>
      <div className="logo-containter">
        <span className="patner">Our Partners</span>
        <img className="addidas-img" src={addidasImage} alt="" />
        <img className="puma-img" src={pumaImage} alt="" />
        <img className="puma-img" src={pumaImage} alt="" />
      </div>
    </div>
  );
}

export default SignUp;
