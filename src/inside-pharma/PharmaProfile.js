// <<<<<<< HEAD
// PharmaProfile.js
import React from "react";
import axios from "axios";
import "./PharmaNavbar.css";
import "./PharmaProfile.css";
import PharmaNavbar from "./PharmaNavbar";
import { useUser } from "../pages/ProviderUser";
import { useEffect,useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
export default function PharmaProfile() {
  const { user, logout } = useUser();
  const [newPassword, setNewPassword] = useState("user.password");


  const toggleEditPass = () => {
    if (document.getElementById("pa").disabled) {
      document.getElementById("pa").disabled = false;
    } else {
      document.getElementById("pa").disabled = true;
    }
  };
  const HandleSave = async () => {
    try{
       await axios.put(
        `http://localhost:8080/pharmacist/updatePharmacist?pharmacistId=${user.pharmacistId}`,
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
    navigate("/pharmacist");
  };
  return (
    <>
      <PharmaNavbar />
      <div className="pharma-profile-container">
        <div className="pharma-profile">
        </div>
        <div className="anot"></div>
        <div className="center">
          <div className="container-div">
            <div className="namee">
              <h2 className="pharma-name">{user.firstname} {user.lastname}</h2>
            </div>
            <div className="twoo"></div>

            <div className="info">
              <h3 className="accountinfo">Account Info</h3>
              <form className="details">
                <label className="username">Username: </label>
                <input className="usernam" value={user.username}disabled />
                <br></br>
                <br></br>
                <label className="name">Firsname: </label>
                <input className="nam" value={user.firstname}disabled />
                <br></br>
                <button className="logout" type="button" onClick={HandleLogout}>
                  Logout
                </button>
                <br></br>
                <label className="email">Lastname: </label>
                <input className="emai" value={user.lastname}disabled />
                <br></br>
                <br></br>
                <label className="email">Email: </label>
                <input className="emai" value={user.email}disabled />
                <br></br>
                <br></br>
                <label className="password">Password: </label>
                <input 
                className="passwor"
                id="pa"
                value={newPassword}
                type="password"
                onChange={(e) => setNewPassword(e.target.value)}
                disabled 
                />
                <br></br>
                <br></br>
                <button className="save" type="button"onClick={HandleSave}>
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
    </>
  );
}
// =======
// import React from "react";
// import "./PharmaProfile.css";
// export default function PharmaProfile() {
//   return <div>PharmaProfile</div>;
// >>>>>>> 9aa43021751ca0656ae3c3e42b87f2db27292e52
// }
