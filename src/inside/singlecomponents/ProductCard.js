import React from "react";
import "./ProductCard.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUser } from "../../pages/ProviderUser";
export default function ProductCard(props) {
  const { getProduct } = useUser();
  const [isProduct, setIsProduct] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    const product = props.products;
    if (product) {
      getProduct(product);
      setIsProduct(true);
    }
  };
  useEffect(() => {
    if (isProduct) {
      navigate("/productView");
    }
  });

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
            onClick={handleClick}
          ></img>
        </Link>
      </div>
    </>
  );
}
