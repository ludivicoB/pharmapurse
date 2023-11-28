import React, { useEffect } from "react";
import "./PharmaDashboard.css";
import PharmaNavbar from "./PharmaNavbar"; // Updated import statement
import { Link } from "react-router-dom";

export default function PharmaDashboard() {
  useEffect(() => {
    document.body.style.backgroundColor = "#E7EFFF";
  }, []);

  return (
    <div>
      <PharmaNavbar /> {/* Updated component usage */}
      {/* App Features */}
      <div className="features">
        <div className="featurestext">
          <h2>Pharmacist Commands</h2>
          <hr />
          <p>
            This platform enhances collaboration among pharmacy staff,
            facilitating seamless communication and coordination. PharmaPurse
            represents a significant leap forward in the digitization of
            pharmacy operations, providing a comprehensive solution for
            pharmacists to optimize their workflow and deliver exceptional
            patient care.
          </p>
        </div>
        <div className="fbox-container">
          <Link to="/orderManager" className="link-nounder">
            <div className="fbox">
              <img
                className="cutsup"
                src="/images/cutsup.png"
                alt="pharmapurse"
              ></img>
              <h2 className="fbox-h2">Customer Order Manager</h2>
              <p>Manage customer orders and handle them efficiently.</p>
            </div>
          </Link>
        </div>
      </div>
      {/* Pharmacist Hub */}
      <div className="siteSection2">
        <img src="/images/homesection2.png" alt="pharmapurse"></img>
        <div className="left2">
          <h1>Pharmacist Hub</h1>
          <p>
            Welcome to your one-stop digital health destination. Explore our
            curated catalog, chat with expert pharmacists for instant advice,
            and simplify medication management with our virtual pillbox. Your
            well-being starts here—discover, connect, and thrive.
          </p>
        </div>
      </div>
      {/* Footer */}
      <footer>
        <div className="footer-container">
          <div className="navtitle">
            <img src="/images/navtitle.png" alt="pharmapurse" />
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
