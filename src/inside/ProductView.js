import React from "react";
import NavBar from "./NavBar";
import "./ProductView.css";
import { Link } from "react-router-dom";
export default function ProductView(props) {
  return (
    <>
      <NavBar />
      <div className="center">
        <div className="product-feature-container">
          <div className="product-titleFeature">
            <img src="/images/productCatalog.png" alt="pic"></img>
          </div>
          <div className="featurebox">
            <div className="product-featureHead">
              <Link to="/products">
                <img
                  className="product-backbtn"
                  src="/images/back.png"
                  alt="pic"
                ></img>
              </Link>
            </div>
            <div className="products-container">
              <div className="product-left"></div>
              <div className="product-right"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
