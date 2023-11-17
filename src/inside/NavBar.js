import React from "react";
import "./style.css";
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
          <button className="homebtn">Home</button>
          <button className="homebtn">Notification</button>
          <button className="homebtn">MyCart</button>
          <button className="homebtn">About Us</button>
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
