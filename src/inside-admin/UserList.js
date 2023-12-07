import React, { useState, useEffect } from "react";
import "./UserList.css";
import AdminNavbar from "./AdminNavbar";
import axios from "axios";
import Userlistprofile from "./Userlistprofile";
const UserCustomerList = () => {
  const [viewUser, setViewuser] = useState({});
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/user/getAllUser")
      .then((response) => {
        // setUsers(response.data.filter(user => user.userid === 6));
        setCustomers(response.data);
        console.log("response", response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);
  function changeUser(user) {
    console.log(user);
    setViewuser(user);
  }
  return (
    <>
      <AdminNavbar />

      <div className="user-list-container">
        <div className="admin-h1-container">
          <h1 className="admin-h1">User/Customer List</h1>
          <div className="admin-userlist-bodylist">
            {customers.map((customer, index) => (
              <div className="usercard-container" key={index}>
                <div className="usercard-head">
                  <img
                    className="usercard-gear"
                    src="/images/usercardgear.png"
                    alt="pharmapurse"
                    onClick={() => {
                      document.getElementById("overlay-user").style.display =
                        "block";
                      document.body.classList.add("overlay-active");
                      changeUser(customer);
                    }}
                  ></img>
                </div>
                <div className="usercard-body">
                  <img
                    className="usercard-icon"
                    src="/images/usercardicon.png"
                    alt="pharmapurse"
                  ></img>
                  <p className="usercard-name">
                    {customer.firstname} {customer.lastname}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Userlistprofile userInfo={viewUser} />
      </div>
    </>
  );
};

export default UserCustomerList;
