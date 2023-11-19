import React, { useEffect } from "react";
import "../pages/UserRegister.css";
import { Link } from "react-router-dom";
export default function UserRegister() {
  useEffect(() => {
    document.body.style.backgroundColor = "#E7EFFF";
  }, []);
  return (
    <>
      <div className="loginbox-container">
        <div className="loginbox">
          <div className="left">
            <h1 className="usereg-h1">Register</h1>

            <div className="form">
              <input
                className="usereg-input"
                type="text"
                placeholder="name"
              ></input>
              <br />
              <input
                className="usereg-input"
                type="text"
                placeholder="username"
              ></input>
              <br />
              <input
                className="usereg-input"
                type="text"
                placeholder="email"
              ></input>
              <br />
              <input
                className="usereg-input"
                type="password"
                placeholder="password"
              ></input>
              <br />
              <input
                className="usereg-input"
                type="password"
                placeholder="confirm password"
              ></input>
              <br />
              <button className="usereg-btnregister">Register</button>
              <hr />
              <Link to="/user">
                <button className="usereg-btnlogin">Login</button>
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
