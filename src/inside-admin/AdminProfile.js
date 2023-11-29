import React from "react";
import axios from "axios";
import "./AdminProfile.css";
import AdminNavbar from "./AdminNavbar";
import { useUser } from "../pages/ProviderUser";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function AdminProfile() {
  const { user, logout } = useUser();
  const [newPassword, setNewPassword] = useState("user.password");

  const toggleEditPass = () => {
    if (document.getElementById("pw").disabled) {
      document.getElementById("pw").disabled = false;
    } else {
      document.getElementById("pw").disabled = true;
    }
  };
  const HandleSave = async () => {
    try{
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
     }
     catch (error){
      console.error("There was a problem with the Updated information:", error);
    }
  }
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
      <div className="fir">
        <div className="xax">
          <div className="adminprofile">
          </div>
          <div className="anot"></div>
          <div className="center">
            <div className="container-div">
              <div className="namee">
                <h2 className="johnny">
                {user.firstname} {user.lastname}
                   </h2>
              </div>
              <div className="twoo"></div>

              <div className="info">
                <h3 className="accountinfo">Account Info</h3>
                <form className="details">
                  <label className="username">Username: </label>
                  <input className="usernam" value={user.username}disabled></input>
                  <br></br>
                  <br></br>
                  <label className="name">Firstname: </label>
                  <input className="nam" value={user.firstname}disabled></input>
                  <br></br>
                  <button className="logout" onClick={HandleLogout} type="button">
                    Logout
                  </button>
                  <br></br>
                  <label className="email">Lastname: </label>
                  <input className="emai" value={user.lastname}disabled></input>
                  <br></br>
                  <br></br>
                  <label className="email">Email: </label>
                  <input className="emai" value={user.email}disabled></input>
                  <br></br>
                  <br></br>
                  <label className="password">Password: </label>
                  <input
                    className="passwor"
                    id="pw"
                    value={newPassword}
                    type="password"
                    onChange={(e) => setNewPassword(e.target.value)}
                    disabled
                  ></input>
                  <br></br>
                  <br></br>
                  <button className="save" onClick={HandleSave} type="button">
                    Save
                  </button>
                  <div className="editable">
                  <img
                  className="userprofile-changebtn"
                  src="/images/passeditbtn.png"
                  alt="pharmapurse"
                  onClick={toggleEditPass}
                ></img>
                  </div>
                  <div className="obosave"></div>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
