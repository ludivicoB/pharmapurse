import React from "react";
import "./AdminNavbar.css";
import { Link } from "react-router-dom";
export default function AdminNavbar() {
  return (
    <>
      <div className="admin-navbar">
        <div className="admin-navtitle">
          <img
            className="admin-navimg"
            src="/images/navtitle.png"
            alt="pharmapurse"
          ></img>
        </div>

        <div className="admin-navcontrol">
          <Link to="/adminDashboard" className="admin-homebtn">
            <button className="admin-homebtn">Home</button>
          </Link>
          <Link className="admin-homebtn">
            <button className="admin-homebtn">Notification</button>
          </Link>
          <p className="admin-p">Admin</p>
          <Link to="/adminProfile" className="admin-profilebtn">
            <img
              className="admin-accimg"
              src="/images/account.png"
              alt="pharmapurse"
            ></img>
          </Link>
        </div>
      </div>
    </>
  );
}
