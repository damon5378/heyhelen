import React from "react";
// import { FaMicrophone } from "react-icons";
import helen from "../img/helen.png";
import brush from "../img/brush.svg";
import micro from "../img/micro.svg";
import wood from "../img/wood.svg";
import headset from "../img/headset.svg";

export const TriggersSection = () => {
  return (
    <div>
      <div className="triggers">
        <div className="description">
          <h2>
            Some of my <span>triggers</span>
          </h2>
        </div>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={brush} alt="" />
              <h3>Brush Trigger</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={micro} alt="" />
              <h3>Microphone Trigger</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={wood} alt="" />
              <h3>Wood Trigger</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={headset} alt="" />
              <h3>Headset is the best for listen ASMR</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={helen} alt="" />
      </div>
    </div>
  );
};
