import React, { useEffect } from "react";
import "./AdminDashboard.css";
import "../inside-admin/AdminDashboard.css";
import NavBar from "../inside/NavBar";
export default function AdminDashboard() {
  useEffect(() => {
    document.body.style.backgroundColor = "#E7EFFF";
  }, []);
  return (
    <>
      <div className="aa">
        <NavBar />
        <div className="gap">
          <div className="pono">
            <h1 className="admincom">Admin Commands</h1>
          </div>
          <div className="bb">
            <div className="fbox">
              <img src="/images/prodcat.png" alt="pharmapurse"></img>
              <h2 className="fbox-h2">Customer Support</h2>
              <p className="fp">
                Get Instant Help: Connect with Our Customer Support Chat for
                Quick and Friendly Assistance!
              </p>
            </div>
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
    </>
  );
}
