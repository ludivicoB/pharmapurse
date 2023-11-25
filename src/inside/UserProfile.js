import React from "react";
import "./UserProfile.css";
import NavBar from "./NavBar";
import { useUser } from "../pages/ProviderUser";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
export default function UserProfile() {
  const { user, logout } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(user);
  });
  const HandleLogout = () => {
    logout();
    navigate("/user");
  };
  return (
    <>
      <NavBar />
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
                ></input>
              </div>

              <div className="userprofile-info">
                <p className="userprofile-p1">Firstname: </p>
                <input
                  className="userprofile-input"
                  type="text"
                  value={user.firstname}
                ></input>
              </div>

              <div className="userprofile-info">
                <p className="userprofile-p1">Lastname: </p>
                <input
                  className="userprofile-input"
                  type="text"
                  value={user.lastname}
                ></input>
              </div>

              <div className="userprofile-info">
                <p className="userprofile-p1">Email: </p>
                <input
                  className="userprofile-input"
                  type="text"
                  value={user.email}
                ></input>
              </div>

              <div className="userprofile-info">
                <p className="userprofile-p1">Password: </p>
                <input
                  className="userprofile-input"
                  type="password"
                  value={user.password}
                ></input>
              </div>
              <hr />
              <button className="userprofile-savebtn">Save</button>
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
