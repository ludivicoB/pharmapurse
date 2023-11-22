<<<<<<< HEAD
// PharmaProfile.js
import React from "react";
import "./PharmaNavbar.css";
import "./PharmaProfile.css";
import PharmaNavbar from "./PharmaNavbar";

export default function PharmaProfile() {
  return (
    <>
      <PharmaNavbar />
      <div className="pharma-profile-container">
        <div className="pharma-profile">
          <h1 className="pharma-suwat">Pharma Profile</h1>
        </div>
        <div className="pic">
          <img src="/images/account.png" alt="pharmapurse" />
        </div>
        <div className="anot"></div>
        <div className="center">
          <div className="container-div">
            <div className="namee">
              <h2 className="pharma-name">Pharma Doe</h2>
            </div>
            <div className="twoo"></div>

            <div className="info">
              <h3 className="accountinfo">Account Info</h3>
              <form className="details">
                <label className="username">Username: </label>
                <input className="usernam" value="pharmadoe" />
                <br></br>
                <br></br>
                <label className="name">Name: </label>
                <input className="nam" value="Pharma Doe" />
                <br></br>
                <button className="logout" type="button">
                  Logout
                </button>
                <br></br>
                <label className="email">Email: </label>
                <input className="emai" value="pharmaDoe@gmail.com" />
                <br></br>
                <br></br>
                <label className="password">Password: </label>
                <input
                  className="passwor"
                  value="pharmadoe"
                  type="password"
                />
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
=======
import React from "react";
import "./PharmaProfile.css";
export default function PharmaProfile() {
  return <div>PharmaProfile</div>;
>>>>>>> 9aa43021751ca0656ae3c3e42b87f2db27292e52
}
