import React from "react";
import "./Navbar.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function NavBar(props) {
  const [isBold, setIsBold] = useState();
  useEffect(() => {
    if (props.navActive === "homebtn") {
      setIsBold("bold");
    } else {
      setIsBold("none");
    }
  }, []);
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
            <button className="homebtn" style={{ fontWeight: isBold }}>
              Home
            </button>
          </Link>
          <Link to="/notification" className="homebtn">
            <button className="homebtn">Notification</button>
          </Link>
          <Link to="/myCart" className="homebtn">
            <button className="homebtn">MyCart</button>
          </Link>
          <Link to="/aboutUs" className="homebtn">
            <button className="homebtn">About Us</button>
          </Link>
          <Link to="/userProfile" className="accimg">
            <img
              className="accimg"
              src="/images/account.png"
              alt="pharmapurse"
            ></img>
          </Link>
        </div>
      </div>
    </>
  );
}
