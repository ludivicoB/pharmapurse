import React from "react";
import NavBar from "./NavBar";
import "./ProductView.css";
import { Link } from "react-router-dom";
import { useUser } from "../pages/ProviderUser";
export default function ProductView() {
  const { product, user } = useUser();
  console.log(product);
  console.log(user);
  return (
    <>
      <NavBar />
      <div className="productview-center">
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
            <div className="productview-container">
              <div className="product-left">
                <img
                  className="product-img"
                  src={product.imgsrc}
                  alt="pic"
                ></img>
                {/* <img src={`/images/${product.image}`} alt="pic"></img> */}
              </div>
              <div className="product-right">
                <div className="productright-info">
                  <h2 className="productright-name">{product.name}</h2>
                  <p className="productright-price">
                    Price -{" "}
                    <span className="productright-pricespan">
                      ₱ {product.price}
                    </span>
                  </p>
                  <span className="productright-quantity">Quantity</span>
                  <input
                    className="productright-quantityinput"
                    type="number"
                    placeholder="0"
                  ></input>
                  <hr className="productright-hr" />
                </div>
                <div className="productview-btns">
                  <img
                    className="productright-addbtn"
                    src="/images/addtocartbtn.png"
                    alt="pic"
                  ></img>
                  <img
                    className="productright-learnmorebtn"
                    src="/images/learnmorebtn.png"
                    alt="pic"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
