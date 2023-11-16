import React, { useEffect } from "react";
import "../pages/AdminRegister.css";
export default function AdminRegister() {
  useEffect(() => {
    document.body.style.backgroundColor = "#E7EFFF";
  }, []);
  return (
    <>
      <div className="loginbox">
        <div className="left">
          <h1>Register</h1>

          <div className="form">
            <input placeholder="name" type="text"></input>
            <br />
            <input placeholder="username" type="text"></input>
            <br />
            <input placeholder="email" type="text"></input>
            <br />
            <input placeholder="password" type="password"></input>
            <br />
            <input placeholder="confirm password" type="password"></input>
            <br />
            <button className="btnregister">Register</button>
            <hr />
            <button className="btnlogin">Login</button>
          </div>
        </div>
        <div className="right">
          {/* <img src="" alt="pharmapurse"></img> */}
        </div>
      </div>
    </>
  );
}
