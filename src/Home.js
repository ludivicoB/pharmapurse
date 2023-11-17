import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
export default function Home() {
  return (
    <>
      <div className="pageLogo">
        <img src="/images/navtitle.png" alt="pharmapurse"></img>
      </div>
      <div className="controlButtons">
        <Link to="/user" className="btn">
          User
        </Link>
        <Link to="/pharmacist" className="btn">
          Pharmacist
        </Link>
        <Link to="/admin" className="btn">
          Admin
        </Link>
      </div>
    </>
  );
}
