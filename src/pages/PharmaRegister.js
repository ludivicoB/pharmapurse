import React, { useEffect } from "react";
import "../pages/PharmaRegister.css";
import { Link } from "react-router-dom";
export default function PharmaRegister() {
  useEffect(() => {
    document.body.style.backgroundColor = "#E7EFFF";
  }, []);
  return (
    <>
      <div className="loginbox">
        <div className="left">
          <h1>Register</h1>

          <div className="form">
            <input
              className="Registerinput"
              placeholder="name"
              type="text"
            ></input>
            <br />
            <input
              className="Registerinput"
              placeholder="username"
              type="text"
            ></input>
            <br />
            <input
              className="Registerinput"
              placeholder="email"
              type="text"
            ></input>
            <br />
            <input
              className="Registerinput"
              placeholder="password"
              type="password"
            ></input>
            <br />
            <input
              className="Registerinput"
              placeholder="confirm password"
              type="password"
            ></input>
            <br />
            <button className="btnregister">Register</button>
            <hr />
            {/* <Link to="/pharmacist"> */}
            <button className="btnlogin">Login</button>
            {/* </Link> */}
          </div>
        </div>
        <div className="right">
          {/* <img src="" alt="pharmapurse"></img> */}
        </div>
      </div>
    </>
  );
}
