import React, { useEffect } from "react";
import "../pages/AdminRegister.css";
import { Link } from "react-router-dom";
export default function AdminRegister() {
  useEffect(() => {
    document.body.style.backgroundColor = "#E7EFFF";
  }, []);
  return (
    <>
      <div className="loginbox-container">
        <div className="loginbox">
          <div className="left">
            <h1 className="adminregister-h1">Register</h1>

            <div className="form">
              <input
                className="adminregister-input"
                placeholder="name"
                type="text"
              ></input>
              <br />
              <input
                className="adminregister-input"
                placeholder="username"
                type="text"
              ></input>
              <br />
              <input
                className="adminregister-input"
                placeholder="email"
                type="text"
              ></input>
              <br />
              <input
                className="adminregister-input"
                placeholder="password"
                type="password"
              ></input>
              <br />
              <input
                className="adminregister-input"
                placeholder="confirm password"
                type="password"
              ></input>
              <br />
              <button className="adminregister-btnregister">Register</button>
              <hr />
              <Link to="/admin">
                <button className="adminregister-btnlogin">Login</button>
              </Link>
            </div>
          </div>
          <div className="r">{/* <img src="" alt="pharmapurse"></img> */}</div>
        </div>
      </div>
    </>
  );
}
