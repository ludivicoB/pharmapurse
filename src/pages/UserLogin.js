import React, { useEffect, useState } from "react";
import axios from "axios";
import "../pages/UserLogin.css";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../pages/ProviderUser";
export default function UserLogin() {
  const { login } = useUser();
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
          "http://localhost:8080/user/getAllUser",
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
    if (isLoggedIn) {
      // Redirect or show a success message as needed
      navigate("/home");
    }
  }, [isLoggedIn]);
  return (
    <>
      <div className="loginbox-container">
        <div className="loginbox">
          <div className="left">
            <h1 className="userlogin-h1">Login</h1>
            <div className="form">
              <h2 className="userlogin-h2">
                Welcome to <span className="userlogin-span">PharmaPurse</span>
              </h2>
              <input
                className="userlogin-input"
                type="text"
                placeholder="✉️ username "
                id="username"
              ></input>
              <br />

              <input
                className="userlogin-input"
                type="password"
                placeholder="🔒 password"
                id="password"
              ></input>

              <br />

              <button className="btnlogin" onClick={handleLogIn}>
                Login
              </button>

              <hr />
              <Link to="/userRegister">
                <button className="btnregister">Register</button>
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
