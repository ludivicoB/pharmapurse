import React, { useEffect, useState } from "react";
import "../pages/UserRegister.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function UserRegister() {
  const [postData, setPostData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegisterClick = async () => {
    try {
      await axios.post("http://localhost:8080/user/insertUser", postData);
      console.log("Registration successful:", postData);
      alert("Registration successful, You may now proceed to login");
      // Handle success (e.g., redirect, show a success message to the user)
      window.location.reload();
    } catch (error) {
      console.error("Error registering user:", error);
      // Handle error (e.g., show an error message to the user)
    }
  };

  useEffect(() => {
    document.body.style.backgroundColor = "#E7EFFF";
    // console.log(postData);
  }, []);

  return (
    <>
      <div className="loginbox-container">
        <div className="loginbox">
          <div className="left">
            <h1 className="usereg-h1">Register</h1>

            <div className="form">
              <input
                className="usereg-input"
                type="text"
                placeholder="firstname"
                name="firstname"
                value={postData.firstname}
                onChange={handleInputChange}
              ></input>
              <br />
              <input
                className="usereg-input"
                type="text"
                placeholder="lastname"
                name="lastname"
                value={postData.lastname}
                onChange={handleInputChange}
              ></input>
              <br />
              <input
                className="usereg-input"
                type="text"
                placeholder="username"
                name="username"
                value={postData.username}
                onChange={handleInputChange}
              ></input>
              <br />
              <input
                className="usereg-input"
                type="text"
                placeholder="email"
                name="email"
                value={postData.email}
                onChange={handleInputChange}
              ></input>
              <br />
              <input
                className="usereg-input"
                type="password"
                placeholder="password"
                name="password"
                value={postData.password}
                onChange={handleInputChange}
              ></input>
              <br />
              <button
                className="usereg-btnregister"
                onClick={handleRegisterClick}
              >
                Register
              </button>
              <hr />
              <Link to="/user">
                <button className="usereg-btnlogin">Login</button>
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
