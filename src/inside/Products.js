import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Products.css";
import NavBar from "./NavBar";
import ProductCard from "./singlecomponents/ProductCard";
import { Link } from "react-router-dom";
export default function Products() {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/product/getAllProduct")
      .then((response) => {
        // setUsers(response.data.filter(user => user.userid === 6));
        setProduct(response.data);
        console.log("response", response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);
  // const products = [
  //   {
  //     name: "PARACETAMOL Biogesic Tablet 10s",
  //     price: "31.25",
  //     image: "bio.png",
  //   },
  //   {
  //     name: "SALONSIPMethyl Salicylate Gel Patch x 2 Patches/Pack",
  //     price: "91.25",
  //     image: "salon.png",
  //   },
  //   {
  //     name: "Calcuimide Calcium + Vitamin D + Mineral 1 Tablet",
  //     price: "11.50",
  //     image: "cal.png",
  //   },
  //   {
  //     name: "CENTRUM Silver Advance Multivitamins 30 Tablets",
  //     price: "365.00",
  //     image: "cent.png",
  //   },
  //   {
  //     name: "NORVASC Amlodipine 10mg 30 tablets",
  //     price: "21.00",
  //     image: "nor.png",
  //   },
  // ];
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
              <Link to="/productCatalog">
                <img
                  className="product-backbtn"
                  src="/images/mediback.png"
                  alt="pic"
                ></img>
              </Link>
              <input
                className="product-searchbar"
                type="text"
                placeholder="Search"
              ></input>
            </div>
            <div className="products-container">
              {products.map((product, index) => (
                <ProductCard key={index} products={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
