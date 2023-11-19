import React from "react";
import "./AboutUs.css";
import NavBar from "./NavBar";
export default function AboutUs() {
  return (
    <>
      <NavBar />
      <div className="aboutsection">
        <h1 className="abouth1">About Us</h1>
        <p className="aboutp">
          "As developers and students from Cebu Institute of Technology <br />
          University, we proudly present PharmaPurse a comprehensive
          <br /> app designed to streamline operations, minimize errors,
          <br /> enhance efficiency, elevate patient care, and facilitate
          informed
          <br />
          decision-making. With PharmaPurse, you can prioritize what
          <br /> matters most: your patients."
        </p>
        <h2 className="developer">Developers</h2>
        <img src="/images/devdesign.png"></img>
      </div>
      <div className="devname-container">
        <div className="devnames">
          <img src="/images/ludi.png"></img>
          <img src="/images/ben.png"></img>
          <img src="/images/john.png"></img>
        </div>
        <div className="devnames-2">
          <img src="/images/jared.png"></img>
        </div>
      </div>
    </>
  );
}
