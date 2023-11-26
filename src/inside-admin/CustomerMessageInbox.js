import React from "react";
import "./CustomerMessageInbox.css";
import AdminNavbar from "./AdminNavbar";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function CustomerMessageInbox() {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [isView, setIsView] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8080/message/getAllMessage")
      .then((response) => {
        setMessages(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:8080/user/getAllUser")
      .then((response) => {
        setUsers(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const findName = (id) => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].userID === id) {
        // console.log(users[i].firstname + " " + users[i].lastname);
        const name = users[i].firstname + " " + users[i].lastname;
        return name;
      }
    }
  };
  return (
    <>
      <AdminNavbar />
      <div className="center-container">
        <div className="CustomerMessageInbox">
          <div className="CustomerMessageInbox-header">
            <h1>Message Report</h1>
            <Link to="/adminDashboard">
              <img
                className="customermessageinbox-backbtn"
                src="/images/back.png"
                alt="pharmapurse"
              ></img>
            </Link>
          </div>
          <div className="CustomerMessageInbox-body">
            <div className="CustomerMessageInbox-content-container">
              <div className="CustomerMessageInbox-content-header">
                <h3>Messages</h3>
              </div>
              <div className="CustomerMessageInbox-content-body">
                {messages.map((messages, index) => (
                  <div className="messagecard" key={index}>
                    <div className="messagecard-info">
                      <p className="messagecard-p">
                        <span className="messagecard-span">Date:</span>{" "}
                        {messages.date}
                      </p>
                      <p className="messagecard-p">
                        <span className="messagecard-span">Subject:</span>{" "}
                        {messages.subject}
                      </p>
                      <p className="messagecard-p">
                        <span className="messagecard-span">From: </span>User{" "}
                        {messages.userid}
                      </p>
                      <button
                        className="messagecard-button"
                        onClick={() => {
                          if (isView) {
                            document.getElementsByClassName(
                              "messagecard-message"
                            )[index].style.display = "block";
                            setIsView((prev) => !prev);
                          } else {
                            document.getElementsByClassName(
                              "messagecard-message"
                            )[index].style.display = "none";
                            setIsView((prev) => !prev);
                          }
                        }}
                      >
                        View
                      </button>
                    </div>
                    <div className="messagecard-message">
                      <p className="messagee">
                        Name:{" "}
                        <span className="message-span">
                          {findName(messages.userid)}
                        </span>
                      </p>
                      <p className="messagee">Message:</p>
                      <p className="message-text">{messages.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
