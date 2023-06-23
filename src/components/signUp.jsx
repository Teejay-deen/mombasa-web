import React from "react";
import palmTree from "../images/palmTree.png"

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
    </div>
  );
}

export default SignUp;
