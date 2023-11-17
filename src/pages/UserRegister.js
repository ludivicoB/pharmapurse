import React, { useEffect } from "react";
import "../pages/UserRegister.css";
import { Link } from "react-router-dom";
export default function UserRegister() {
  useEffect(() => {
    document.body.style.backgroundColor = "#E7EFFF";
  }, []);
  return (
    <>
      <div className="loginbox">
        <div className="left">
          <h1>Register</h1>

          <div className="form">
            <input placeholder="name"></input>
            <br />
            <input placeholder="username"></input>
            <br />
            <input placeholder="email"></input>
            <br />
            <input placeholder="password"></input>
            <br />
            <input placeholder="confirm password"></input>
            <br />
            <button className="btnregister">Register</button>
            <hr />
            <Link to="/user">
              <button className="btnlogin">Login</button>
            </Link>
          </div>
        </div>
        <div className="rr">{/* <img src="" alt="pharmapurse"></img> */}</div>
      </div>
    </>
  );
}
