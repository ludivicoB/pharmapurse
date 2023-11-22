import React from "react";
import "./AdminProfile.css"
import AdminNavbar from "./AdminNavbar";
export default function AdminProfile() {

  
  return(
  <>
  <AdminNavbar/>
   <div className="fir">
    <div className="xax">
      <div className="adminprofile">
        <h1 className="adminsuwat">Admin Profile</h1>
      </div>
      <div className="pic">
        <img src="/images/account.png"></img>
      </div>
    <div className="anot"></div>
    <div className="namee">
      <h2 className="johnny">John Doe</h2>
    </div>
    <div className="twoo"></div>
   
    <div className="info">
      <h3 className="accountinfo">
        Account Info
      </h3>
      <form className="details">
      <label className="username">Username: </label>
      <input className="usernam" value="johndoe"></input><br></br><br></br>
      <label className="name">Name: </label>
      <input className="nam" value="John Doe"></input><br></br>
      <button className="logout" type="button">Logout</button><br></br>
      <label className="email">Email: </label>
      <input className="emai" value="johnDoe@gmail.com"></input><br></br><br></br>
      <label className="password">Password: </label>
      <input className="passwor" value="johndoe" type="password"></input><br></br><br></br>
      <button className="save" type="button">Save</button>
     <div className="obosave"></div>
      </form>
    </div>
    



    </div>

   </div>




  </>);

}
