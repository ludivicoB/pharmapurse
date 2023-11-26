import React, { useEffect } from "react";
import "./AdminDashboard.css";
import "../inside-admin/AdminDashboard.css";
import { Link } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
export default function AdminDashboard() {
  useEffect(() => {
    document.body.style.backgroundColor = "#E7EFFF";
  }, []);
  return (
    <>
      <div className="aa">
        <AdminNavbar />
        <div className="gap">
          <div className="pono">
            <h1 className="admincom">Admin Commands</h1>
          </div>
          <div className="bb">
            <Link to="/customerMessageInbox" className="fboxlink">
              <div className="fbox">
                <img src="/images/cutsup.png" alt="pharmapurse"></img>
                <h2 className="fbox-h2">Customer Support</h2>
                <p className="fp">View your customer support messages</p>
              </div>
            </Link>
            <Link to="/userList" className="fboxlink">
              <div className="fbox">
                <img src="/images/userfbox.png" alt="pharmapurse"></img>
                <h2 className="fbox-h2">View Users</h2>
                <p className="fp">View your customer/users</p>
              </div>
            </Link>
          </div>
          <div className="obosblue"></div>
        </div>
        <div className="pataas">s</div>
        <footer>
          <div className="footer-container">
            <div className="navtitle">
              <img src="/images/navtitle.png" alt="pharmapurse"></img>
            </div>
            <p>
              PharmaPurse provides progressive, and affordable <br />
              healthcare, accessible on mobile and online <br /> for everyone
            </p>
            <p>©PharmaPurse PTY LTD 2020. All rights reserved</p>
          </div>
        </footer>
      </div>
    </>
  );
}
