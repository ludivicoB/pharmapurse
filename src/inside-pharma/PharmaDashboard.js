import React from "react";
import "./PharmaDashboard.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../inside-admin/AdminNavbar";
export default function PharmaDashboard() {
  useEffect(() => {
    document.body.style.backgroundColor = "#E7EFFF";
  }, []);
  return (
    <div className="aaa">
      <NavBar />
      <div className="gapa">
        <div className="ponoo">
          <h1 className="admincom">Pharma Commands</h1>
        </div>
        <div className="bbb">
          <Link to="/orderManager" className="fboxlink">
            <div className="fbox">
              <img src="/images/prodcat.png" alt="pharmapurse"></img>
              <h2 className="fbox-h2">Customer Order Manager</h2>
              <p className="fp">
                Managing Customer’s Orders Handling the Orders Efficiently
              </p>
            </div>
          </Link>
        </div>
        <div className="obosblue"></div>
      </div>
      <div className="pataas">s</div>
      <footer>
        <div className="footer-container">
          <div className="navtitle">
            <img src="/images/navtitle.png" alt="pharmapurse"></img>
          </div>
          <p>
            PharmaPurse provides progressive, and affordable <br />
            healthcare, accessible on mobile and online <br /> for everyone
          </p>
          <p>©PharmaPurse PTY LTD 2020. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}
