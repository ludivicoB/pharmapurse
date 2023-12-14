import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Products.css";
import NavBar from "./NavBar";
import ProductCard from "./singlecomponents/ProductCard";
import { Link } from "react-router-dom";
export default function ProductsHygiene() {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/product/getAllProduct")
      .then((response) => {
        // setUsers(response.data.filter(user => user.userid === 6));
        const filtered = response.data.filter(
          (item) => item.category === "hygiene"
        );
        setProduct(filtered);
        console.log("response", response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <>
      <NavBar />
      <div className="products-center">
        <div className="product-feature-container">
          <div className="product-titleFeature">
            <img src="/images/productCatalog.png" alt="pic"></img>
          </div>
          <div className="featurebox">
            <div className="product-featureHead">
              <Link to="/productCatalog">
                <img
                  className="product-backbtn"
                  src="/images/hygback.png"
                  alt="pic"
                ></img>
              </Link>
              {/* <input
                className="product-searchbar"
                type="text"
                placeholder="Search"
              ></input> */}
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
