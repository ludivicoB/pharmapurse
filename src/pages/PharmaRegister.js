import React, { useEffect } from "react";
import "../pages/PharmaRegister.css";
import { Link } from "react-router-dom";
import axios from "axios";
export default function PharmaRegister() {
  useEffect(() => {
    document.body.style.backgroundColor = "#E7EFFF";
  }, []);

  const handleRegisterClick = async () => {
    try {
      await axios.post("http://localhost:8080/pharmacist/insertPharmacist", {
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
      });
      console.log("Registration successful:");
      alert("Registration successful, You may now proceed to login");
      // Handle success (e.g., redirect, show a success message to the user)
      window.location.reload();
    } catch (error) {
      console.error("Error registering user:", error);
      // Handle error (e.g., show an error message to the user)
    }
  };

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
                id="firstname"
              ></input>
              <br />
              <input
                className="Registerinput"
                placeholder="lastname"
                type="text"
                id="lastname"
              ></input>
              <br />

              <input
                className="Registerinput"
                placeholder="username"
                type="text"
                id="username"
              ></input>
              <br />
              <input
                className="Registerinput"
                placeholder="email"
                type="text"
                id="email"
              ></input>
              <br />
              <input
                className="Registerinput"
                placeholder="password"
                type="password"
                id="password"
              ></input>
              <br />

              <br />
              <button
                className="pharmaregister-btnregister"
                onClick={handleRegisterClick}
              >
                Register
              </button>
              <hr />
              <Link to="/pharmacist">
                <button className="pharmaregister-btnlogin">Login</button>
              </Link>
            </div>
          </div>
          <div className="right">
            <Link to="/">
              <button className="pharmalogin-backbtn">Back</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
