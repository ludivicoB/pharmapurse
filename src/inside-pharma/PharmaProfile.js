// <<<<<<< HEAD
// PharmaProfile.js
import React from "react";
import "./PharmaNavbar.css";
import "./PharmaProfile.css";
import PharmaNavbar from "./PharmaNavbar";
import { useUser } from "../pages/ProviderUser";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
export default function PharmaProfile() {
  const { user, logout } = useUser();
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
                <input className="usernam" value={user.username} />
                <br></br>
                <br></br>
                <label className="name">Firsname: </label>
                <input className="nam" value={user.firstname} />
                <br></br>
                <button className="logout" type="button" onClick={HandleLogout}>
                  Logout
                </button>
                <br></br>
                <label className="email">Lastname: </label>
                <input className="emai" value={user.lastname} />
                <br></br>
                <br></br>
                <label className="email">Email: </label>
                <input className="emai" value={user.email} />
                <br></br>
                <br></br>
                <label className="password">Password: </label>
                <input className="passwor" value={user.password} type="password" />
                <br></br>
                <br></br>
                <button className="save" type="button">
                  Save
                </button>
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
