import React from "react";
import "./PharmaDashboard.css";
import { useEffect } from "react";
import NavBar from "../inside/NavBar";
export default function PharmaDashboard() {
  useEffect(() => {
    document.body.style.backgroundColor = "#E7EFFF";
  }, []);
  return (
    <div>
      <NavBar />
      <h1 className="pharmahome-h1">R0benPogi</h1>
    </div>
  );
}
