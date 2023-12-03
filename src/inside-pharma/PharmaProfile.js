import React from "react";
import "./PharmaProfile.css";
import PharmaNavbar from "./PharmaNavbar";
import { useUser } from "../pages/ProviderUser";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function UserProfile() {
  const { user, logout } = useUser();
  const [defaultPass, setDefaultPass] = useState(user.password);
  const navigate = useNavigate();
  // useEffect(() => {
  //   console.log(user);
  // });
  const HandleLogout = () => {
    logout();
    navigate("/pharmacist");
  };

  const toggleEditPass = () => {
    if (document.getElementById("userprofile-input-password").disabled) {
      document.getElementById("userprofile-input-password").disabled = false;
      document.getElementById(
        "userprofile-input-password"
      ).style.backgroundColor = "#e6e6e6";
    } else {
      document.getElementById("userprofile-input-password").disabled = true;
      document.getElementById(
        "userprofile-input-password"
      ).style.backgroundColor = "#D9D9D9";
    }
  };
  const handleSavePassword = async () => {
    try {
      if (
        document.getElementById("userprofile-input-password").value ===
        user.password
      ) {
        alert("New password cannot be the same as the current password");
        return;
      } else if (
        document.getElementById("userprofile-input-password").value ===
        user.username
      ) {
        alert("New password cannot be the same as the username");
        return;
      } else if (
        document.getElementById("userprofile-input-password").value.length < 8
      ) {
        alert("Password must be at least 8 characters");
        return;
      }
      await axios.put(
        `http://localhost:8080/user/updateUser?userID=${user.userID}`,
        {
          firstname: user.firstname,
          lastname: user.lastname,
          username: user.username,
          email: user.email,
          password: document.getElementById("userprofile-input-password").value,
        }
      );
      alert("Password updated successfully");
      window.location.reload();
    } catch (error) {
      console.error("There was a problem with the Updated information:", error);
    }
  };
  return (
    <>
      <PharmaNavbar />
      <div className="center">
        <div className="userprofile-container">
          <div className="userprofile-h1-container">
            <h1 className="userprofile-h1">
              {user.firstname} {user.lastname}
            </h1>
          </div>
          <div className="userprofile-body">
            <div className="userprofile-bodyleft">
              <p className="userprofile-p">Account Information</p>
              <hr />
              <div className="userprofile-info">
                <p className="userprofile-p1">Username: </p>
                <input
                  className="userprofile-input"
                  type="text"
                  value={user.username}
                  disabled
                ></input>
              </div>

              <div className="userprofile-info">
                <p className="userprofile-p1">Firstname: </p>
                <input
                  className="userprofile-input"
                  type="text"
                  value={user.firstname}
                  disabled
                ></input>
              </div>

              <div className="userprofile-info">
                <p className="userprofile-p1">Lastname: </p>
                <input
                  className="userprofile-input"
                  type="text"
                  value={user.lastname}
                  disabled
                ></input>
              </div>

              <div className="userprofile-info">
                <p className="userprofile-p1">Email: </p>
                <input
                  className="userprofile-input"
                  type="text"
                  value={user.email}
                  disabled
                ></input>
              </div>

              <div className="userprofile-info">
                <p className="userprofile-p1">Password: </p>
                <input
                  className="userprofile-input"
                  id="userprofile-input-password"
                  type="password"
                  value={defaultPass}
                  onChange={(e) => setDefaultPass(e.target.value)}
                  disabled
                ></input>

                <img
                  className="userprofile-changebtn"
                  src="/images/passeditbtn.png"
                  alt="pharmapurse"
                  onClick={toggleEditPass}
                ></img>
              </div>

              <hr />
              <button
                className="userprofile-savebtn"
                onClick={handleSavePassword}
              >
                Save
              </button>
            </div>
            <div className="userprofile-bodyright">
              <button className="userprofile-logoutbtn" onClick={HandleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
