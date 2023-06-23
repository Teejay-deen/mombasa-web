import React from "react";
import palmTree from "../images/palmTree.png";
import addidasImage from "../images/addidas.png";
import pumaImage from "../images/puma.png";
// import phoneImg from "../images/phone.png";
import linkedinImg from "../images/linkedin.png";
import facebookImg from "../images/facebook.png";
import instaImg from "../images/instagram.png";
import gmailImg from "../images/gmail.png";
import twitterImg from "../images/twitter.png";

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
        <span className="signup-lorem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
        </span>
        <input
          className="email"
          type="email"
          placeholder="Enter your email address"
        />
        <button id="submit-btn">Submit</button>
      </div>
      <div className="logo-section">
        <span className="patner">Our Partners</span>
        <div className="logo-container">
          <img className="addidas-img" src={addidasImage} alt="" />
          <img className="puma-img" src={pumaImage} alt="" />
        </div>
      </div>

      <div className="last-section">
        <div className="Mombasa-logo">
          <span>Mombasa Island</span>
        </div>
        <div className="quickLink">
          <span>Quick Links</span>
          <ul>
            <li className="explore">Explore Mombasa</li>
            <li className="photo">Photo Gallery</li>
            <li className="photo">Photo Gallery</li>
            <li className="photo">Photo Gallery</li>
          </ul>
        </div>
        <div className="social1">
          <div className="social-media">
            <span className="social">Social Media</span>
            <br />
            {/* <img className="phone" src={phoneImg} alt="" /> */}
            <span className="phone-number">+234814775 8883</span>
            <img className="linkedin" src={linkedinImg} alt="" />
            <img className="facebook" src={facebookImg} alt="" />
            <img className="insta" src={instaImg} alt="" />
            <img className="gmail" src={gmailImg} alt="" />
            <img className="twitter" src={twitterImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
