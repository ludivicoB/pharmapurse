import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import UserLogin from "./pages/UserLogin";
import UserRegister from "./pages/UserRegister";
import PharmaLogin from "./pages/PharmaLogin";
import PharmaRegister from "./pages/PharmaRegister";
import AdminLogin from "./pages/AdminLogin";
import AdminRegister from "./pages/AdminRegister";
import UserHome from "./inside/UserHome";
import CustomerSupport from "./inside/CustomerSupport";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <UserHome /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user" element={<UserLogin />}></Route>
        <Route path="/userRegister" element={<UserRegister />} />
        <Route path="/pharmacist" element={<PharmaLogin />}></Route>
        <Route path="/pharmacistRegister" element={<PharmaRegister />} />
        <Route path="/admin" element={<AdminLogin />}></Route>
        <Route path="/adminRegister" element={<AdminRegister />} />
        <Route path="/home" element={<UserHome />}></Route>
        <Route path="/customerSupport" element={<CustomerSupport />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
