// PharmaNavbar.js
import React from "react";
import "./PharmaNavbar.css";
import { Link } from "react-router-dom";
import PharmaProfile from "./PharmaProfile";

export default function PharmaNavbar() {
  return (
    <>
      <div className="navbar">
        <div className="navtitle">
          <img
            className="navimg"
            src="/images/navtitle.png"
            alt="pharmapurse"
          ></img>
        </div>

        <div className="navcontrol">
          <Link to="/pharmaDashboard" className="homebtn">
            <button className="homebtn">Home</button>
          </Link>

          <Link to="/pharmaProfile" className="pharma-profilebtn">
            <img
              className="pharma-accimg"
              src="/images/account.png"
              alt="pharmapurse"
            ></img>
          </Link>
        </div>
      </div>
    </>
  );
}
