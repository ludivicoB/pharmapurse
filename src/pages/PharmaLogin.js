import React, { useEffect } from "react";
import "../pages/PharmaLogin.css";
import { Link } from "react-router-dom";
export default function PharmaLogin() {
  useEffect(() => {
    document.body.style.backgroundColor = "#E7EFFF";
  }, []);
  return (
    <>
      <div className="loginbox-container">
        <div className="loginbox">
          <div className="left">
            <h1 className="pharmalogin-h1">Login</h1>

            <div className="form">
              <h2 className="pharmalogin-h2">
                Welcome <span className="pharmalogin-span">Pharmacist</span>
              </h2>
              <input
                className="pharmalogin-input"
                placeholder="👨‍💻 username"
                type="text"
              ></input>
              <br />
              <input
                className="pharmalogin-input"
                placeholder="🔒 password"
                type="password"
              ></input>
              <br />
              <button className="pharmalogin-loginbtn">Login</button>
              <hr />
              <Link to="/pharmacistRegister">
                <button className="pharmalogin-registerbtn">Register</button>
              </Link>
            </div>
          </div>
          <div className="r-pharma">
            <Link to="/">
              <button className="pharmalogin-backbtn">Back</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
