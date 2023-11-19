import React, { useEffect } from "react";
import "../pages/AdminLogin.css";
import { Link } from "react-router-dom";
export default function AdminLogin() {
  useEffect(() => {
    document.body.style.backgroundColor = "#E7EFFF";
  }, []);
  return (
    <>
      <div className="loginbox-container">
        <div className="loginbox">
          <div className="left">
            <h1 className="adminlogin-h1">Login</h1>

            <div className="form">
              <h2 className="adminlogin-h2">
                Welcome <span className="adminlogin-span">Admin</span>
              </h2>
              <input
                className="adminlogin-input"
                placeholder="👨‍💻 username"
                type="text"
              ></input>
              <br />
              <input
                className="adminlogin-input"
                placeholder="🔒 password"
                type="password"
              ></input>
              <br />

              <button className="adminlogin-btnlogin">Login</button>

              <hr />
              <Link to="/adminRegister">
                <button className="adminlogin-btnregister">Register</button>
              </Link>
            </div>
          </div>
          <div className="rr">
            <Link to="/">
              <button className="userlogin-backbtn">Back</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
