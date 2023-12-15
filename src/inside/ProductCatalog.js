import React from "react";
import NavBar from "./NavBar";
import "./ProductCatalog.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../pages/ProviderUser";
import { useNavigate } from "react-router-dom";
export default function ProductCatalog() {
  const navigate = useNavigate();
  const { user } = useUser();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (user === null) {
      navigate("/user");
    }
  });
  return (
    <>
      <NavBar />
      <div className="center">
        <div className="feature-container">
          <div className="titleFeature">
            <img src="/images/productCatalog.png"></img>
          </div>
          <div className="featurebox">
            <div className="featureHead">
              <p className="productcatalog-p">Explore Product Categories</p>
            </div>
            <div className="featureCategories">
              <Link
                to="/products"
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="category">
                  <img src="/images/category1.png"></img>
                  <p className="productcatalog-p">Medication</p>
                </div>
              </Link>
              {/* <div className="category">
                <img src="/images/category2.png"></img>
                <p className="productcatalog-p">Prescripted Medicine</p>
              </div> */}
              <Link
                to="/productsHygiene"
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="category">
                  <img src="/images/category3.png"></img>
                  <p className="productcatalog-p">Personal Care</p>
                </div>
              </Link>
              <Link
                to="/productsWellness"
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="category">
                  <img className="thermo" src="/images/category4.png"></img>
                  <p className="productcatalog-p">
                    Health and Wellness Products
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
