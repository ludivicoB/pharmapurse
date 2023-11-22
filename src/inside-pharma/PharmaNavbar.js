// PharmaNavbar.js
import React from "react";
import "./PharmaNavbar.css";
import { Link } from "react-router-dom";
import PharmaProfile from "./PharmaProfile"

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
          <Link to="/home" className="homebtn">
            <button className="homebtn">Home</button>
          </Link>
          <Link to="/notification" className="homebtn">
            <button className="homebtn">Notification</button>
          </Link>
          <Link to="/myCart" className="homebtn">
            <button className="homebtn">My Cart</button>
          </Link>
          <Link to="/aboutUs" className="homebtn">
            <button className="homebtn">About Us</button>
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
