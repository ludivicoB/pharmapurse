import React, { useState, useEffect } from "react";
import "./MyCart.css";
import NavBar from "./NavBar";
import CartItem from "./singlecomponents/CartItem";
import CheckOut from "./CheckOut";
export default function MyCart() {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const calculatedTotal = products
      .map((product) => product.price * product.quantity)
      .reduce((a, b) => a + b, 0);
    setTotal(calculatedTotal);
  });

  const products = [
    {
      name: "PARACETAMOL Biogesic Tablet 500mg 500s",
      image: "bio.png",
      price: 30.5,
      quantity: 2,
    },
    {
      name: "SALONSIPMethyl Salicylate Gel Patch x 2 Patches/Pack",
      image: "salon.png",
      price: 91.25,
      quantity: 1,
    },
    {
      name: "Calcuimide Calcium + Vitamin D + mineral 1 Tablet",
      image: "cal.png",
      price: 11.5,
      quantity: 3,
    },
  ];
  const updateTotal = (totalp) => {
    setTotal((prevTotal) => prevTotal + totalp);
  };

  return (
    <>
      <NavBar />
      <div className="mycart-center">
        <div className="mycart-container">
          <img
            className="mycart-title"
            src="/images/mycart.png"
            alt="mycart.png"
          ></img>
          <div className="mycart-body">
            <div className="mycart-left">
              {products.map((product, index) => (
                <CartItem
                  key={index}
                  product={product}
                  updateTotal={updateTotal}
                />
              ))}
            </div>
            <div className="mycart-right">
              <p className="processorder-p">Process Order</p>
              <hr className="processorder-hr" />
              <p className="total-p">
                Order Total: ₱<span className="total-span">{total}</span>
              </p>
              <img
                className="processorder-img"
                src="/images/continuecheckout.png"
                alt="continuecheckout.png"
                onClick={() => {
                  document.getElementById("overlay").style.display = "block";
                  document.body.classList.add("overlay-active");
                }}
              ></img>
            </div>
          </div>
        </div>
      </div>
      <CheckOut total={total} />
    </>
  );
}
