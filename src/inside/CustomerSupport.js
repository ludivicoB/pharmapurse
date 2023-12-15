import React from "react";
import NavBar from "./NavBar";
import "./CustomerSupport.css";
import { useEffect } from "react";
import { useUser } from "../pages/ProviderUser";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function CustomerSupport() {
  const { user } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (user === null) {
      navigate("/user");
    }
  }, []);
  const HandleMessageClick = async () => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${(
      currentDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${currentDate.getDate().toString().padStart(2, "0")}`;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    if (subject !== "" && message !== "") {
      try {
        await axios.post("http://localhost:8080/message/insertMessage", {
          userid: user.userID,
          subject: subject,
          message: message,
          isread: false,
          date: formattedDate,
        });
        console.log("Message sent successful:");
        alert("Message sent successful.");
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
      } catch (error) {
        console.error("Error sending message:", error);
        // Handle error (e.g., show an error message to the user)
      }
    } else {
      alert("Please fill in all fields.");
      return;
    }
  };
  return (
    <>
      <NavBar />
      <div className="container-contact">
        <div className="contact-header">
          <img src="/images/contactus.png"></img>
          <p className="firstp">
            Questions, bug reports, feedback, feature request - we’re here for
            it all.
          </p>
          <p className="secondp">
            “it’s nice that they give you many different phone numbers, live
            chat, email
            <br /> options through this form — however you like to communicate,
            you can do it.”
          </p>
        </div>
      </div>
      <div className="customer-support-center">
        <div className="contact-form">
          <p className="contact-form-p">Subject</p>
          <input className="subject-input" id="subject"></input>

          <p>How can I help you</p>
          <textarea className="txtarea" id="message"></textarea>
          <br />
          <button className="btnsend" onClick={HandleMessageClick}>
            Send
          </button>
        </div>
      </div>
    </>
  );
}
