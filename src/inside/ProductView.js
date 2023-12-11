import React from "react";
import NavBar from "./NavBar";
import "./ProductView.css";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../pages/ProviderUser";
import { useState, useEffect } from "react";
import axios from "axios";
export default function ProductView() {
  const { product, user } = useUser();
  const navigate = useNavigate();
  const [isAdded, setIsAdded] = useState(false);
  console.log(product);
  console.log(user);
  const HandleAddToCart = async () => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${(
      currentDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${currentDate.getDate().toString().padStart(2, "0")}`;
    const quantity = document.getElementById("quantity").value;
    if (quantity > 0) {
      try {
        await axios.post("http://localhost:8080/order/insertOrder", {
          userid: user.userID,
          productid: product.productId,
          quantity: quantity,
          orderDate: formattedDate,
          total: product.price * quantity,
          isDeleted: false,
          ischeckout: false,
        });
        console.log("Cart added successful:");
        alert("Cart added successful.");
        setIsAdded(true);
      } catch (error) {
        console.error("Error adding to cart:", error);
        // Handle error (e.g., show an error message to the user)
      }
    } else {
      alert("Quantity must be greater than 0.");
      return;
    }
  };
  useEffect(() => {
    if (isAdded) {
      setTimeout(() => {
        navigate("/products");
      }, 2000);
    }
  }, [isAdded]);
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
                    id="quantity"
                  ></input>
                  <hr className="productright-hr" />
                </div>
                <div className="productview-btns">
                  <img
                    className="productright-addbtn"
                    src="/images/addtocartbtn.png"
                    alt="pic"
                    onClick={HandleAddToCart}
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
