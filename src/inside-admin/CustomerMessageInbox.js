import React from "react";
import "./CustomerMessageInbox.css";
import AdminNavbar from "./AdminNavbar";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function CustomerMessageInbox() {
  const [isActive, setIsActive] = useState(true);
  const [messages, setMessages] = useState([]);
  const [readMessages, setReadMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [isView, setIsView] = useState(false);
  const [isUR, setIsUR] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8080/message/getAllMessage")
      .then((response) => {
        const unreadMessages = response.data.filter(
          (message) => message.isread === false
        );
        setMessages(unreadMessages);
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

    axios
      .get("http://localhost:8080/message/getAllMessage")
      .then((response) => {
        const read = response.data.filter((message) => message.isread === true);
        setReadMessages(read);
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
  const handleReadMessage = (message, index) => {
    axios
      .put(
        `http://localhost:8080/message/updateMessage?messageid=${message.messageid}`,
        {
          userid: message.userid,
          subject: message.subject,
          message: message.message,
          isread: true,
          date: message.date,
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    window.location.reload();
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
                <button
                  className="unreadmessages-btn"
                  style={{
                    backgroundColor: isActive ? "rgb(110, 110, 110)" : "white",
                    color: isActive ? "white" : "black",
                  }}
                  onClick={() => {
                    setIsUR(true);
                    setIsActive(true);
                  }}
                >
                  Unread
                </button>
                <button
                  className="readmessages-btn"
                  style={{
                    backgroundColor: isActive ? "white" : "rgb(110, 110, 110)",
                    color: isActive ? "black" : "white",
                  }}
                  onClick={() => {
                    setIsUR(false);
                    setIsActive(false);
                  }}
                >
                  Read
                </button>
              </div>

              <div className="CustomerMessageInbox-content-body">
                {isUR
                  ? messages.map((messages, index) => (
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
                          <div className="messagecard-buttons">
                            <button
                              className="messagecard-button-read"
                              onClick={() => handleReadMessage(messages, index)}
                            >
                              Mark as read
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  : readMessages.map((messages, index) => (
                      <div className="messagecard" key={index}>
                        <div className="messagecardinfo-read">
                          <p className="messagecardp">
                            <span className="messagecard-span">Date:</span>{" "}
                            {messages.date}
                          </p>
                          <p className="messagecardp">
                            <span className="messagecard-span">Subject:</span>{" "}
                            {messages.subject}
                          </p>
                          <p className="messagecardp">
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
                          <div className="messagecard-buttons">
                            <h2>Message has been read</h2>
                          </div>
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
