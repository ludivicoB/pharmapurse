import React from "react";
import "./style.css";
export default function NavBar() {
  return (
    <>
      <div className="navbar">
        <div className="navtitle">
          <img src="/images/navtitle.png" alt="pharmapurse"></img>
        </div>

        <div className="navcontrol">
          <button>Home</button>
          <button>Notification</button>
          <button>MyCart</button>
          <button>About Us</button>
          <img src="/images/account.png" alt="pharmapurse"></img>
        </div>
      </div>
    </>
  );
}
