import React, { useState } from "react";
import "./CheckOut.css";
import axios from "axios";
export default function CheckOut(props) {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };
  const output = () => {
    console.log("Userid", props.user.userID);
    console.log("Orders", props.orders);
    console.log("Total", props.total);

    const time = document.getElementById("time").value;
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${(
      currentDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${currentDate.getDate().toString().padStart(2, "0")}`;
    console.log(formattedDate);
    console.log(time);
    console.log(selectedPaymentMethod);
    if (time === "" || selectedPaymentMethod === "") {
      alert("Please select time for pickup");
    } else {
      axios
        .post("http://localhost:8080/shoppingCart/insertShoppingCart", {
          userid: props.user.userID,
          orders: props.orders,
          total: props.total,
          date: formattedDate,
          time: time,
          ischeck: false,
          paymethod: selectedPaymentMethod,
        })
        .then((res) => {
          console.log(res.data);
          alert("Order placed successfully");
          for (var i = 0; i < props.orders.length; i++) {
            axios
              .put(
                `http://localhost:8080/order/updateOrder?orderID=${props.userorders[i].orderID}`,
                {
                  userid: props.userorders[i].userid,
                  productid: props.userorders[i].productid,
                  quantity: props.userorders[i].quantity,
                  orderDate: props.userorders[i].orderDate,
                  total: props.userorders[i].total,
                  deleted: true,
                  ischeckout: true,
                }
              )
              .then((res) => {
                console.log(res.data);
              })
              .catch((err) => {
                console.log(err);
              });
          }

          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setTimeout(() => {
      props.callReload();
    }, 2000);
  };
  return (
    <>
      <div className="checkout-center">
        <div className="overlay" id="overlay">
          <button
            className="close-btn"
            onClick={() => {
              // console.log("disaperar");
              document.getElementById("overlay").style.display = "none";
              document.body.classList.remove("overlay-active");
            }}
          >
            X
          </button>
          <div className="checkOut-container">
            <div className="checkOut-left">
              <p className="checkOut-p">Checkout</p>
              <hr className="checkOutleft-hr" />
              <p className="checkOut-p1">1. Time for Pick up</p>
              <input
                className="checkOut-input-time"
                type="time"
                id="time"
              ></input>
              <hr className="checkOutleft-hr" />
              <p className="checkOut-p1">2. Payment Method</p>
              <div className="checkOut-radiobtn">
                <label className="checkOut-radiobtn-label">
                  <input
                    className="checkOut-radiobtn-input"
                    type="radio"
                    name="paymentMethod"
                    value="Gcash"
                    checked={selectedPaymentMethod === "Gcash"}
                    onChange={handlePaymentMethodChange}
                  />
                  Gcash
                </label>
                <br />
                <label className="checkOut-radiobtn-label">
                  <input
                    className="checkOut-radiobtn-input"
                    type="radio"
                    name="paymentMethod"
                    value="COP"
                    checked={selectedPaymentMethod === "COP"}
                    onChange={handlePaymentMethodChange}
                  />
                  COP
                </label>
              </div>
            </div>
            <div className="checkOut-right">
              <p className="checkOut-p2">Confirm Order</p>
              <hr className="checkOutright-hr" />
              <p className="checkOut-p3">
                Order Total: <span>₱{props.total}</span>
              </p>
              <img
                className="checkOut-img"
                src="/images/processorder.png"
                alt="processorder.png"
                onClick={output}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
