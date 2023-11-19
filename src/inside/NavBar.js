import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
export default function NavBar() {
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
          <button className="homebtn">Notification</button>
          <button className="homebtn">MyCart</button>

          <Link to="/aboutUs" className="homebtn">
            <button className="homebtn">About Us</button>
          </Link>
          <img
            className="accimg"
            src="/images/account.png"
            alt="pharmapurse"
          ></img>
        </div>
      </div>
    </>
  );
}
