import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "./pages/UserLogin";
import PharmaLogin from "./pages/PharmaLogin";
import AdminLogin from "./pages/AdminLogin";
import UserRegister from "./pages/UserRegister";
import AdminRegister from "./pages/AdminRegister";
import PharmaRegister from "./pages/PharmaRegister";
import UserHome from "./inside/UserHome";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserHome />
    {/* <PharmaRegister /> */}
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user" element={<UserLogin />}></Route>
        <Route path="/admin" element={<AdminLogin />}></Route>
        <Route path="/pharmacist" element={<PharmaLogin />}></Route>
        <Route path="/userRegister" element={<UserRegister />}></Route>
        <Route path="/adminRegister" element={<AdminRegister />}></Route>
        <Route path="/pharmacistRegister" element={<PharmaRegister />}></Route>
        <Route path="/home" element={<UserHome />}></Route>
      </Routes>
    </BrowserRouter> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
