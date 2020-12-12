import React from "react";
import helen from "../img/helen.png";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span>
            </h2>
          </div>
          <div className="hide">
            <h2>come true.</h2>
          </div>
        </div>
        <p>Contact me</p>
        <button>Contact me</button>
      </div>
      <div className="image">
        <img style={{ borderRadius: 25 }} src={helen} alt="Cutie Helen" />
      </div>
    </div>
  );
};

export default AboutSection;
