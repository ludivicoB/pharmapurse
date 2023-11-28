import React, { useState, useEffect } from "react";
import "./MyCart.css";
import NavBar from "./NavBar";
import CartItem from "./singlecomponents/CartItem";
import CheckOut from "./CheckOut";
import axios from "axios";
import { useUser } from "../pages/ProviderUser";
export default function MyCart() {
  const { user } = useUser();
  const [orders, setOrders] = useState([]);
  const [orderString, setOrderString] = useState("");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculatedTotal = orders.map((order) => {
      return order.total;
    });
    setTotal(calculatedTotal.reduce((a, b) => a + b, 0));
  });
  useEffect(() => {
    axios
      .get("http://localhost:8080/order/getAllOrders")
      .then((res) => {
        const useOrders = res.data.filter((order) => {
          if (
            order.userid === user.userID &&
            order.deleted === false &&
            order.ischeckout === false
          ) {
            return order;
          }
        });
        setOrders(useOrders);
        const orderstring = useOrders.map((order) => {
          return order.orderID;
        });
        const actualOrderString = orderstring.join(",");
        console.log(actualOrderString);
        setOrderString(actualOrderString);

        console.log("Filtered");
        console.log(useOrders);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
              {orders.map((product, index) => (
                <CartItem
                  key={index}
                  product={product}
                  updateTotal={updateTotal}
                  user={user}
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
                  if (total === 0) {
                    alert("Please add items to cart");
                  } else {
                    document.getElementById("overlay").style.display = "block";
                    document.body.classList.add("overlay-active");
                  }
                }}
              ></img>
            </div>
          </div>
        </div>
      </div>
      <CheckOut
        total={total}
        user={user}
        orders={orderString}
        userorders={orders}
      />
    </>
  );
}
