import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import UserLogin from "./pages/UserLogin";
import { ProviderUser } from "./pages/ProviderUser";
import UserRegister from "./pages/UserRegister";
import PharmaLogin from "./pages/PharmaLogin";
import PharmaRegister from "./pages/PharmaRegister";
import AdminLogin from "./pages/AdminLogin";
import AdminRegister from "./pages/AdminRegister";
import UserHome from "./inside/UserHome";
import UserProfile from "./inside/UserProfile";
import CustomerSupport from "./inside/CustomerSupport";
import ProductCatalog from "./inside/ProductCatalog";
import Products from "./inside/Products";
import ProductsHygiene from "./inside/ProductsHygiene";
import ProductsWellness from "./inside/ProductsWellnes";
import ProductView from "./inside/ProductView";
import AboutUs from "./inside/AboutUs";
import MyCart from "./inside/MyCart";
import Prescription from "./inside/Prescription";
// import CheckOut from "./inside/CheckOut";
import AdminDashboard from "./inside-admin/AdminDashboard";
import AdminProfile from "./inside-admin/AdminProfile";
import CustomerMessageInbox from "./inside-admin/CustomerMessageInbox";
import UserList from "./inside-admin/UserList";
import PharmaDashboard from "./inside-pharma/PharmaDashboard";
import PharmaProfile from "./inside-pharma/PharmaProfile";
import OrderManager from "./inside-pharma/OrderManager";
import OrderHistory from "./inside-pharma/OrderHistory";
import Notification from "./inside/Notification";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <UserHome /> */}
    <BrowserRouter>
      <ProviderUser>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/user" element={<UserLogin />}></Route>
          <Route path="/userRegister" element={<UserRegister />} />
          <Route path="/pharmacist" element={<PharmaLogin />}></Route>
          <Route path="/pharmacistRegister" element={<PharmaRegister />} />
          <Route path="/admin" element={<AdminLogin />}></Route>
          <Route path="/adminRegister" element={<AdminRegister />} />
          <Route path="/home" element={<UserHome />}></Route>
          <Route path="/aboutUs" element={<AboutUs />}></Route>
          <Route path="/customerSupport" element={<CustomerSupport />}></Route>
          <Route path="/productCatalog" element={<ProductCatalog />}></Route>
          <Route path="/prescription" element={<Prescription />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/productsHygiene" element={<ProductsHygiene />}></Route>
          <Route
            path="/productsWellness"
            element={<ProductsWellness />}
          ></Route>
          <Route path="/productView" element={<ProductView />}></Route>
          <Route path="/userProfile" element={<UserProfile />}></Route>
          {/* <Route path="/notification" element={<Notification />}></Route> */}

          <Route path="/myCart" element={<MyCart />}></Route>
          {/* <Route path="/checkOut" element={<CheckOut />}></Route> */}

          <Route path="/adminDashboard" element={<AdminDashboard />}></Route>
          <Route path="/adminProfile" element={<AdminProfile />}></Route>
          <Route path="/userList" element={<UserList />}></Route>
          <Route
            path="/customerMessageInbox"
            element={<CustomerMessageInbox />}
          ></Route>

          <Route path="/pharmaDashboard" element={<PharmaDashboard />}></Route>
          <Route path="/pharmaProfile" element={<PharmaProfile />}></Route>
          <Route path="/orderManager" element={<OrderManager />}></Route>
          <Route path="/orderHistory" element={<OrderHistory />}></Route>
        </Routes>
      </ProviderUser>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
