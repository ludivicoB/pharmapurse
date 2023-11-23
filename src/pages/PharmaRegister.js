import React, { useEffect } from "react";
import "../pages/PharmaRegister.css";
import { Link } from "react-router-dom";
export default function PharmaRegister() {
  useEffect(() => {
    document.body.style.backgroundColor = "#E7EFFF";
  }, []);
  return (
    <>
      <div className="loginbox-container">
        <div className="loginbox">
          <div className="left">
            <h1 className="pharmaregister-h1">Register</h1>

            <div className="form">
              <input
                className="Registerinput"
                placeholder="firstname"
                type="text"
              ></input>
                 <br/>
              <input
                className="Registerinput"
                placeholder="lastname"
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
              <br/>
            
              <br />
              <button className="pharmaregister-btnregister">Register</button>
              <hr />
              <Link to="/pharmacist">
                <button className="pharmaregister-btnlogin">Login</button>
              </Link>
            </div>
          </div>
          <div className="right">
            {/* <img src="" alt="pharmapurse"></img> */}
          </div>
        </div>
      </div>
    </>
  );
}
