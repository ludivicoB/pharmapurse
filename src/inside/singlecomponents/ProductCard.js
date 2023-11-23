import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
export default function ProductCard(props) {
  // console.log("props", props);
  return (
    <>
      <div className="product-card-container">
        <p className="product-card-name">{props.products.name}</p>
        <img
          className="product-card-img"
          src={props.products.imgsrc}
          // src={`/images/${props.products.imagesrc}`}
          alt={props.products.image}
        ></img>
        <p className="product-card-price">₱{props.products.price}</p>
        <Link to="/productView" products={props.products}>
          <img
            className="product-card-addbtn"
            src="/images/addcartbtn.png"
            alt="pic"
            title="add to cart"
          ></img>
        </Link>
      </div>
    </>
  );
}
