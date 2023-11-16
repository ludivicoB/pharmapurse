import React, { useEffect } from "react";
import "../pages/UserLogin.css";
export default function UserLogin() {
  useEffect(() => {
    document.body.style.backgroundColor = "#E7EFFF";
  }, []);
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        integrity="sha384-ezrDR0sSd5MgGZCCat3zqUk2X7lY1ZSXjQlTtiH2zL5I6o1b3b7Azvqj7znKfPm"
        crossorigin="anonymous"
      ></link>
      <div className="loginbox">
        <div className="left">
          <h1>Login</h1>

          <div className="form">
            <h2>
              Welcome to <span>PharmaPurse</span>
            </h2>
            <input placeholder="✉️ username or email"></input>
            <br />

            <input placeholder="🔒 password"></input>

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
