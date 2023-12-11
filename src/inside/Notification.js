import React from "react";
import "./Notification.css";
import { useUser } from "../pages/ProviderUser";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Notification(props) {
  const { user } = useUser();
  const [notification, setNotification] = useState([]);
  const [loader, setLoader] = useState(1);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/notification/getAllNotification`)
      .then((response) => {
        const filtered = response.data.filter(
          (item) => item.userid === user.userID && item.isread === false
        );
        setNotification(filtered);
        console.log(filtered);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [loader]);
  const handleRead = (item) => {
    axios
      .put(
        `http://localhost:8080/notification/updateNotification?notificationid=${item.notificationid}`,
        {
          userid: user.userID,
          subject: item.subject,
          message: item.message,
          isread: true,
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setTimeout(() => {
      window.location.reload();
    }, 1000);
    setLoader(loader + 1);
  };
  return (
    <>
      <div className="notification-container">
        <div className="notification">
          <button
            className="closebtn-notif"
            onClick={() => {
              document.getElementsByClassName(
                "notification-container"
              )[0].style.display = "none";
              props.setNotificationVisible(false);
            }}
          >
            X
          </button>
          <h1 className="notification-title">Notifications</h1>
          {notification.length > 0 ? (
            notification.map((item, index) => (
              <div className="notification-box" key={index}>
                <div className="notification-img-box">
                  <img
                    className="notification-img"
                    src="/images/P.png"
                    alt="pharmapurse"
                  ></img>
                </div>
                <div className="notification-message-box">
                  <h2 className="notification-title-">{item.subject}</h2>
                  <p className="notification-message-">{item.message}</p>
                </div>
                <button
                  className="notification-btnread"
                  onClick={() => {
                    handleRead(item);
                  }}
                >
                  X
                </button>
              </div>
            ))
          ) : (
            <h1 className="notification-title-no">
              No notifications for now :)
            </h1>
          )}
        </div>
      </div>
    </>
  );
}
