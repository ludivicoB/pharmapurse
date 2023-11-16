import React, { useEffect } from "react";
import "../pages/AdminLogin.css";
export default function AdminLogin() {
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
              Welcome <span>Admin</span>
            </h2>
            <input placeholder="👨‍💻 username" type="text"></input>
            <br />
            <input placeholder="🔒 password" type="password"></input>
            <br />
            <button className="btnlogin">Login</button>
            <hr />
            <button className="btnregister">Register</button>
          </div>
        </div>
        <div className="right">
          {/* <img src="" alt="pharmapurse"></img> */}
        </div>
      </div>
    </>
  );
}
