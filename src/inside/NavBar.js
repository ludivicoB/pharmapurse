import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Notification from "./Notification";

export default function NavBar(props) {
  const [isBold, setIsBold] = useState("none");
  const [notificationVisible, setNotificationVisible] = useState(false);

  useEffect(() => {
    if (props.navActive === "homebtn") {
      setIsBold("bold");
    } else {
      setIsBold("none");
    }
  }, [props.navActive]);

  const toggleNotification = () => {
    if (notificationVisible) {
      setNotificationVisible(false);
    } else {
      setNotificationVisible(true);
    }
  };

  return (
    <>
      <div className="navbar">
        <div className="navtitle">
          <img
            className="navimg"
            src="/images/navtitle.png"
            alt="pharmapurse"
          />
        </div>

        <div className="navcontrol">
          <Link to="/home" className="homebtn">
            <button className="homebtn" style={{ fontWeight: isBold }}>
              Home
            </button>
          </Link>
          <button className="homebtn" onClick={toggleNotification}>
            Notification
          </button>
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
            />
          </Link>
          {notificationVisible && (
            <Notification setNotificationVisible={setNotificationVisible} />
          )}
        </div>
      </div>
    </>
  );
}
