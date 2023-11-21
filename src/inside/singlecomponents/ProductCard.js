import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
export default function ProductCard(props) {
  return (
    <>
      <div className="product-card-container">
        <p className="product-card-name">{props.products.name}</p>
        <img
          className="product-card-img"
          src={`/images/${props.products.image}`}
          alt="prod_pic"
        ></img>
        <p className="product-card-price">₱{props.products.price}</p>
        <Link>
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
