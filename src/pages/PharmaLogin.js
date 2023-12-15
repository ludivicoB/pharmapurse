import React, { useState, useEffect } from "react";
import "../pages/PharmaLogin.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../pages/ProviderUser";
export default function PharmaLogin() {
  const { login, user } = useUser();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogIn = async () => {
    if (
      document.getElementById("username").value !== "" ||
      document.getElementById("password").value !== ""
    ) {
      const username = document.getElementById("username").value;
      const pass = document.getElementById("password").value;

      try {
        const response = await axios.get(
          "http://localhost:8080/pharmacist/getAllPharmacist",
          {
            username: document.getElementById("username").value,
            pass: document.getElementById("password").value,
          }
        );

        const users = response.data;

        const user = users.find(
          (user) => user.username === username && user.password === pass
        );

        if (user) {
          // Login successful
          login(user);
          setIsLoggedIn(true);
          console.log("User logged in:", user);
        } else {
          alert("Invalid username or password");
          // Handle invalid login (show error message, etc.)
        }
      } catch (error) {
        console.error("There was a problem with the login operation:", error);
        // Handle login failure, show error message, etc.
      }
    } else {
      alert("Please enter username or password");
      return;
    }
  };
  useEffect(() => {
    // Check if registration is successful
    if (user) {
      navigate("/pharmaDashboard");
    }
    if (isLoggedIn) {
      navigate("/pharmaDashboard");
    }
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener("popstate", function (event) {
      window.history.pushState(null, document.title, window.location.href);
    });
  }, [isLoggedIn, navigate]);
  return (
    <>
      <div className="loginbox-container">
        <div className="loginbox">
          <div className="left">
            <h1 className="pharmalogin-h1">Login</h1>

            <div className="form">
              <h2 className="pharmalogin-h2">
                Welcome <span className="pharmalogin-span">Pharmacist</span>
              </h2>
              <input
                className="pharmalogin-input"
                placeholder="👨‍💻 username"
                type="text"
                id="username"
              ></input>
              <br />
              <input
                className="pharmalogin-input"
                placeholder="🔒 password"
                type="password"
                id="password"
              ></input>
              <br />
              <button className="pharmalogin-loginbtn" onClick={handleLogIn}>
                Login
              </button>
              <hr />
              <Link to="/pharmacistRegister">
                <button className="pharmalogin-registerbtn">Register</button>
              </Link>
            </div>
          </div>
          <div className="r-pharma">
            <Link to="/">
              <button className="pharmalogin-backbtn">Back</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
