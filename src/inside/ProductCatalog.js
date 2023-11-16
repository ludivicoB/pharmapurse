import React from "react";
import NavBar from "./NavBar";
import "./ProductCatalog.css";
export default function ProductCatalog() {
  return (
    <>
      <NavBar />
      <div className="center">
        <div className="feature-container">
          <div className="titleFeature">
            <img src="/images/productCatalog.png"></img>
          </div>
          <div className="featureHead">
            <p>Explore Product Categories</p>
          </div>
          <div className="featureCategories">
            <div className="category">
              <img src="/images/category1.png"></img>
              <p>Medication</p>
            </div>

            <div className="category">
              <img src="/images/category2.png"></img>
              <p>Prescripted Medicine</p>
            </div>

            <div className="category">
              <img src="/images/category3.png"></img>
              <p>Personal Care</p>
            </div>

            <div className="category">
              <img className="thermo" src="/images/category4.png"></img>
              <p>Health and Wellness Products</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
