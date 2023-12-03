import React from "react";
import axios from "axios";
import "./AdminProfile.css";
import AdminNavbar from "./AdminNavbar";
import { useUser } from "../pages/ProviderUser";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function AdminProfile() {
  const { user, logout } = useUser();
  const [newPassword, setNewPassword] = useState(user.password);

  const toggleEditPass = () => {
    if (document.getElementById("pw").disabled) {
      document.getElementById("pw").disabled = false;
      document.getElementById("pw").style.backgroundColor = "#e6e6e6";
    } else {
      document.getElementById("pw").disabled = true;
      document.getElementById("pw").style.backgroundColor = "#D9D9D9";
    }
  };
  const HandleSave = async () => {
    try {
      if (newPassword === user.password) {
        alert("New password cannot be the same as the current password");
        return;
      } else if (newPassword === user.username) {
        alert("New password cannot be the same as the username");
        return;
      } else if (newPassword.length < 8) {
        alert("Password must be at least 8 characters");
        return;
      }
      await axios.put(
        `http://localhost:8080/admin/updateAdmin?adminId=${user.adminId}`,
        {
          firstname: user.firstname,
          lastname: user.lastname,
          username: user.username,
          email: user.email,
          password: newPassword,
        }
      );
      alert("Password updated successfully");
      window.location.reload();
    } catch (error) {
      console.error("There was a problem with the Updated information:", error);
    }
  };
  const navigate = useNavigate();
  useEffect(() => {
    console.log(user);
  });
  const HandleLogout = () => {
    logout();
    navigate("/admin");
  };
  return (
    <>
      <AdminNavbar />
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
                  id="pw"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
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
              <button className="userprofile-savebtn" onClick={HandleSave}>
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
