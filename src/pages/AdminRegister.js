import React, { useEffect } from "react";
import "../pages/AdminRegister.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useUser } from "../pages/ProviderUser";
import { useNavigate } from "react-router-dom";
export default function AdminRegister() {
  const navigate = useNavigate();
  const { user } = useUser();
  useEffect(() => {
    if (user) {
      navigate("/adminDashboard");
    }
    document.body.style.backgroundColor = "#E7EFFF";
  }, []);

  const handleRegisterClick = async () => {
    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (
      firstName !== "" &&
      lastName !== "" &&
      username !== "" &&
      email !== "" &&
      password !== ""
    ) {
      if (password.length < 8) {
        alert("Password must be at least 8 characters.");
        return;
      }

      if (
        !(
          /[A-Z]/.test(password) &&
          /[a-z]/.test(password) &&
          /\d/.test(password) &&
          /[^\w\d]/.test(password)
        )
      ) {
        alert(
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
        );
        return;
      }
    } else {
      alert("Please fill in all fields.");
      return;
    }

    try {
      // Make the API call to register the user
      await axios.post("http://localhost:8080/admin/insertAdmin", {
        firstname: firstName,
        lastname: lastName,
        username: username,
        email: email,
        password: password,
      });

      console.log("Registration successful:");
      alert("Registration successful. You may now proceed to login.");
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
            <h1 className="adminregister-h1">Register</h1>

            <div className="form">
              <input
                className="adminregister-input"
                placeholder="firstname"
                type="text"
                id="firstname"
              ></input>
              <br />
              <input
                className="adminregister-input"
                placeholder="lastname"
                type="text"
                id="lastname"
              ></input>
              <br />
              <input
                className="adminregister-input"
                placeholder="username"
                type="text"
                id="username"
              ></input>
              <br />
              <input
                className="adminregister-input"
                placeholder="email"
                type="text"
                id="email"
              ></input>
              <br />
              <input
                className="adminregister-input"
                placeholder="password"
                type="password"
                id="password"
              ></input>

              <br />
              <button
                className="adminregister-btnregister"
                onClick={handleRegisterClick}
              >
                Register
              </button>
              <hr />
              <Link to="/admin">
                <button className="adminregister-btnlogin">Login</button>
              </Link>
            </div>
          </div>
          <div className="r">
            <Link to="/">
              <button className="pharmalogin-backbtn">Back</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
