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
            <button className="home-btn">
              <div className="user-btn">
                <img
                  className="user-icon"
                  src="/images/usericon.png"
                  alt="pharmapurse"
                ></img>
                User
              </div>
            </button>
          </Link>
          <br />
          <Link to="/pharmacist">
            <button className="home-btn">
              <div className="user-btn">
                <img
                  className="user-icon"
                  src="/images/pharmaicon.png"
                  alt="pharmapurse"
                ></img>
                Pharmacist
              </div>
            </button>
          </Link>
          <br />

          <Link to="/admin">
            <button className="home-btn">
              <div className="user-btn">
                <img
                  className="user-icon"
                  src="/images/adminicon.png"
                  alt="pharmapurse"
                ></img>
                Admin
              </div>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
