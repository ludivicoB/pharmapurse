import React from "react";
import "./AboutUs.css";
import NavBar from "./NavBar";
export default function AboutUs() {
  return (
    <>
      <NavBar />
      <div className="aboutsection">
        <h1>About Us</h1>
        <p>
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
    </>
  );
}
