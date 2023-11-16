import React from "react";
import NavBar from "./NavBar";
import "./CustomerSupport.css";
export default function CustomerSupport() {
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
      <div className="center">
        <div className="contact-form">
          <p>Subject</p>
          <input></input>

          <p>How can I help you</p>
          <input className="txtarea"></input>
          <br />
          <button className="btnsend">Send</button>
        </div>
      </div>
    </>
  );
}
