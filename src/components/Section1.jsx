import React from "react";
import "../styles/section1.css";
import hand1 from "../assets/hand1.jpg";
import hand2 from "../assets/hand2.jpg";

function Section1() {
  return (
    <div className="section1">
      <h1>iPhone 14</h1>
      <p>Big and bigger</p>
      <div className="section1-btns">
        <p>Learn more &gt;</p>
        <p>Buy &gt;</p>
      </div>
      <div className="section1-imgs">
        <img src={hand2} />
        <img src={hand1} />
      </div>
    </div>
  );
}

export default Section1;
