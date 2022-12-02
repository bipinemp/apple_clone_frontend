import React from "react";
import iphone from "../assets/iphone.jpg";
import "../styles/section2.css";

function Section2() {
  return (
    <div className="section2">
      <h1>iPhone 14 Pro</h1>
      <p>Pro.Beyond.</p>
      <div className="section2-btns">
        <p>Learn more &gt;</p>
        <p>Buy &gt;</p>
      </div>
      <div className="section2-imgs">
        <img src={iphone} />
      </div>
    </div>
  );
}

export default Section2;
