import React, { useState } from "react";
import "./UserList.css";
import AdminNavbar from "./AdminNavbar";

const UserCustomerList = () => {
  // const [customers, setCustomers] = useState([]);

  return (
    <>
      <AdminNavbar />
      <div className="user-list-container">
        <div className="admin-h1-container">
          <h1 className="admin-h1">User/Customer List</h1>
          <div className="admin-userlist-bodylist"></div>
        </div>
      </div>
    </>
  );
};

export default UserCustomerList;
