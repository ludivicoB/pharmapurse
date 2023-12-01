import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import "./Prescription.css";

export default function Prescription() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <NavBar />
      {/* <header>
        <h1>P PharmaPurse</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/notifications">Notifications</Link>
          <Link to="/my-cart">My Cart</Link>
          <Link to="/about-us">About Us</Link>
        </nav>
      </header> */}
      <main>
        <h1>Virtual Pillbox</h1>
        <section className="prescriptions">
          <h2>Prescriptions</h2>
          <div className="prescription-list">
            <div className="prescription">
              <h3>Prescription 1</h3>
              <p>Medication: Amoxicillin</p>
              <p>Dosage: 500mg</p>
              <p>Quantity: 100</p>
            </div>
            <div className="prescription">
              <h3>Prescription 2</h3>
              <p>Medication: Metformin</p>
              <p>Dosage: 500mg</p>
              <p>Quantity: 300</p>
            </div>
          </div>
        </section>
        <section className="pillbox">
          <h2>Pillbox</h2>
          <div className="pillbox-list">
            <div className="pill">
              <h3>Amoxicillin</h3>
              <p>Dosage: 500mg</p>
              <p>Quantity: 100</p>
            </div>
            <div className="pill">
              <h3>Metformin</h3>
              <p>Dosage: 500mg</p>
              <p>Quantity: 300</p>
            </div>
          </div>
        </section>
      </main>
      <footer>Copyright &copy; 2023 PharmaPurse</footer>
    </div>
  );
}
