import React, { useEffect } from "react";
import "../pages/UserLogin.css";
import { Link, Routes, Route } from "react-router-dom";
export default function UserLogin() {
  useEffect(() => {
    document.body.style.backgroundColor = "#E7EFFF";
  }, []);
  return (
    <>
      <div className="loginbox-container">
        <div className="loginbox">
          <div className="left">
            <h1 className="userlogin-h1">Login</h1>
            <div className="form">
              <h2 className="userlogin-h2">
                Welcome to <span className="userlogin-span">PharmaPurse</span>
              </h2>
              <input
                className="userlogin-input"
                type="text"
                placeholder="✉️ username or email"
              ></input>
              <br />

              <input
                className="userlogin-input"
                type="password"
                placeholder="🔒 password"
              ></input>

              <br />
              <Link to="/home">
                <button className="btnlogin">Login</button>
              </Link>
              <hr />
              <Link to="/userRegister">
                <button className="btnregister">Register</button>
              </Link>
            </div>
          </div>
          <div className="rr">{/* <img src="" alt="pharmapurse"></img> */}</div>
        </div>
      </div>
    </>
  );
}
