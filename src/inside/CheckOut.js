import React from "react";
import NavBar from "./NavBar";
import "./CheckOut.css";
export default function CheckOut(props) {
  return (
    <>
      <div className="center">
        <div className="overlay" id="overlay">
          <button
            className="close-btn"
            onClick={() => {
              console.log("disaperar");
              document.getElementById("overlay").style.display = "none";
              document.body.classList.remove("overlay-active");
            }}
          >
            X
          </button>
          <div className="checkOut-container">
            <div className="checkOut-left">
              <p className="checkOut-p">Checkout</p>
              <hr className="checkOutleft-hr" />
              <p className="checkOut-p1">1. Time for Pick up</p>
              <input className="checkOut-input-time" type="time"></input>
              <hr className="checkOutleft-hr" />
              <p className="checkOut-p1">2. Payment Method</p>
              <div className="checkOut-radiobtn">
                <label className="checkOut-radiobtn-label">
                  <input
                    className="checkOut-radiobtn-input"
                    type="radio"
                    value="option1"
                  />
                  Gcash
                </label>
                <br />
                <label className="checkOut-radiobtn-label">
                  <input
                    className="checkOut-radiobtn-input"
                    type="radio"
                    value="option2"
                  />
                  COP
                </label>
              </div>
            </div>
            <div className="checkOut-right">
              <p className="checkOut-p2">Confirm Order</p>
              <hr className="checkOutright-hr" />
              <p className="checkOut-p3">
                Order Total: <span>₱{props.total}</span>
              </p>
              <img
                className="checkOut-img"
                src="/images/processorder.png"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
