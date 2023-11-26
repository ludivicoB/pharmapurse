import React, { useState, useEffect } from "react";
import "./UserList.css";
import AdminNavbar from "./AdminNavbar";
import axios from "axios";
const UserCustomerList = () => {
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
      </div>
    </>
  );
};

export default UserCustomerList;
