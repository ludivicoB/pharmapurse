import React from "react";
import "./Userlistprofile.css";
// import "../inside/UserProfile.css";
// import { useUser } from "../pages/ProviderUser";
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Userlistprofile(props) {
  const [userview, setuserview] = useState({});
  // const { user } = useUser();
  const [defaultPass, setDefaultPass] = useState("");
  // const navigate = useNavigate();
  useEffect(() => {
    console.log(props.userInfo);
    setuserview(props.userInfo);
    setDefaultPass(props.userInfo.password);
  }, [props.userInfo]);

  const toggleEditPass = () => {
    // console.log(userview);
    if (document.getElementById("userprofile-input-password").disabled) {
      document.getElementById("userprofile-input-password").disabled = false;
    } else {
      document.getElementById("userprofile-input-password").disabled = true;
    }
  };
  const handleSavePassword = async () => {
    try {
      await axios.put(
        `http://localhost:8080/user/updateUser?userID=${userview.userID}`,
        {
          firstname: userview.firstname,
          lastname: userview.lastname,
          username: userview.username,
          email: userview.email,
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
      <div className="center">
        <div className="overlay-user" id="overlay-user">
          <div className="userpopup-center">
            <div className="userpopup-container">
              <div className="userprofile-h1-container">
                <button
                  className="sirado"
                  onClick={() => {
                    // console.log("disaperar");
                    document.getElementById("overlay-user").style.display =
                      "none";
                    document.body.classList.remove("overlay-active");
                  }}
                >
                  X
                </button>
                <h1 className="userprofile-h1">
                  {userview.firstname} {userview.lastname}
                </h1>
              </div>
              <div className="userprofile-body">
                <div className="userprofile-bodyleft-view">
                  <p className="userprofile-p">Account Information</p>
                  <hr />
                  <div className="userprofile-info-container">
                    <div className="userprofile-info">
                      <p className="userprofile-p1">Username: </p>
                      <input
                        className="userprofile-input-view"
                        type="text"
                        value={userview.username}
                        disabled
                      ></input>
                    </div>

                    <div className="userprofile-info">
                      <p className="userprofile-p1">Firstname: </p>
                      <input
                        className="userprofile-input-view"
                        type="text"
                        value={userview.firstname}
                        disabled
                      ></input>
                    </div>

                    <div className="userprofile-info">
                      <p className="userprofile-p1">Lastname: </p>
                      <input
                        className="userprofile-input-view"
                        type="text"
                        value={userview.lastname}
                        disabled
                      ></input>
                    </div>

                    <div className="userprofile-info">
                      <p className="userprofile-p1">Email: </p>
                      <input
                        className="userprofile-input-view"
                        type="text"
                        value={userview.email}
                        disabled
                      ></input>
                    </div>

                    <div className="userprofile-info">
                      <p className="userprofile-p1">Password: </p>
                      <input
                        className="userprofile-input-view"
                        id="userprofile-input-password"
                        type="password"
                        defaultValue={defaultPass}
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
                  </div>
                  <button
                    className="userprofile-savebtn"
                    onClick={handleSavePassword}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
