import React, { useEffect } from "react";
import "../pages/PharmaLogin.css";
import { Link } from "react-router-dom";
export default function PharmaLogin() {
  useEffect(() => {
    document.body.style.backgroundColor = "#E7EFFF";
  }, []);
  return (
    <>
      <div className="loginbox">
        <div className="left">
          <h1>Login</h1>

          <div className="form">
            <h2>
              Welcome <span>Pharmacist</span>
            </h2>
            <input placeholder="👨‍💻 username" type="text"></input>
            <br />
            <input placeholder="🔒 password" type="password"></input>
            <br />
            <button className="btnlogin">Login</button>
            <hr />
            <Link to="/pharmacistRegister">
              <button className="btnregister">Register</button>
            </Link>
          </div>
        </div>
        <div className="rrr">{/* <img src="" alt="pharmapurse"></img> */}</div>
      </div>
    </>
  );
}
