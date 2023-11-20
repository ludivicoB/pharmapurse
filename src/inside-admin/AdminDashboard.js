import React, { useEffect } from "react";
import "./AdminDashboard.css";
import "../inside-admin/AdminDashboard.css";
import NavBar from "../inside/NavBar";
export default function AdminDashboard() {
  useEffect(() => {
    document.body.style.backgroundColor = "#E7EFFF";
  }, []);
  return (
    <>
      <div>
        <NavBar />
        <h1 className="header">JohnP0gi</h1>
      </div>
    </>
  );
}
