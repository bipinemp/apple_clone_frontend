import React from "react";
import { AiFillApple } from "react-icons/ai";
import img4 from "../assets/img4.jpg";
import img3 from "../assets/img3.jpg";
import img2 from "../assets/img2.jpg";
import img1 from "../assets/img1.jpg";
import supercharge from "../assets/supercharge.png";

import "../styles/section3.css";

function Section3() {
  return (
    <div className="sections3">
      <div className="section3 section3-1">
        <h1>iPad</h1>
        <p>Lovable.Drawable.Magical.</p>
        <div className="section3-btns">
          <p>Learn more &gt;</p>
          <p>Buy &gt;</p>
        </div>
        <div className="section3-imgs">
          <img src={img4} />
        </div>
      </div>
      <div className="section3 section3-2">
        <h1 style={{ display: "flex", alignItems: "center" }}>
          <AiFillApple />
          Watch
        </h1>
        <p>Adventure awaits.</p>
        <div className="section3-btns">
          <p>Learn more &gt;</p>
          <p>Buy &gt;</p>
        </div>
        <div className="section3-imgs">
          <img src={img3} />
        </div>
      </div>
      <div className="section3 section3-4">
        <h1>iPad Pro</h1>
        <p style={{ display: "flex", alignItems: "center" }}>
          Supercharged by&nbsp;{" "}
          <img src={supercharge} style={{ width: "50px" }} />
        </p>
        <div className="section3-btns">
          <p>Learn more &gt;</p>
          <p>Buy &gt;</p>
        </div>
        <div className="section3-imgs">
          <img src={img1} />
        </div>
      </div>
      <div className="section3 section3-3">
        <h1>Smart Watch</h1>
        <p>Share the joy.</p>
        <div className="section3-btns">
          <p>Learn more &gt;</p>
          <p>Buy &gt;</p>
        </div>
        <div className="section3-imgs">
          <img src={img2} />
        </div>
      </div>
    </div>
  );
}

export default Section3;
