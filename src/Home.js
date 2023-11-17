import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="pageLogo">
        <img src="/images/navtitle.png" alt="pharmapurse"></img>
      </div>
      <h1 className="home-h1">Choose a role</h1>
      <div className="control-container">
        <div className="control-buttons">
          <Link to="/user">
            <button className="home-btn">User</button>
          </Link>

          <Link to="/pharmacist">
            <button className="home-btn">Pharmacist</button>
          </Link>

          <Link to="/admin">
            <button className="home-btn">Admin</button>
          </Link>
        </div>
      </div>
    </>
  );
}
