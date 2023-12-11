import React from "react";
import "./OrderManager.css";
import PharmaNavbar from "./PharmaNavbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function OrderManager() {
  const [productList, setProductList] = useState([]);
  const [orderList, setOrderList] = useState([]);
  const [orders, setOrders] = useState([]);
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/shoppingCart/getAllShoppingCarts")
      .then((response) => {
        // console.log(response.data);
        const checkoutorder = response.data.filter(
          (order) => order.ischeck === false
        );
        // console.log(checkoutorder);
        setOrderList(checkoutorder);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:8080/user/getAllUser")
      .then((response) => {
        // console.log(response.data);
        setUserList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:8080/order/getAllOrders")
      .then((response) => {
        // console.log(response.data);
        const checkedorders = response.data.filter(
          (order) => order.ischeckout === true
        );
        console.log("All orders", checkedorders);
        setOrders(checkedorders);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("http://localhost:8080/product/getAllProduct")
      .then((response) => {
        setProductList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const findName = (id) => {
    for (let i = 0; i < userList.length; i++) {
      if (userList[i].userID === id) {
        const name = userList[i].firstname + " " + userList[i].lastname;
        return name;
      }
    }
  };

  const findOrderId = (orderids) => {
    const strOrderidList = orderids.split(",");
    const intOrderidList = strOrderidList.map(Number);
    const foundOrderList = orders.map((order) => {
      if (intOrderidList.includes(order.orderID)) {
        return order;
      }
    });
    const foundOrderList2 = foundOrderList.filter(
      (order) => order !== undefined
    );
    return foundOrderList2;
  };
  const findProductId = (productids) => {
    for (let i = 0; i < productList.length; i++) {
      if (productList[i].productId === productids) {
        return productList[i].productId;
      }
    }
  };
  const findProductName = (productids) => {
    for (let i = 0; i < productList.length; i++) {
      if (productList[i].productId === productids) {
        return productList[i].name;
      }
    }
  };

  const findProductPrice = (productids) => {
    for (let i = 0; i < productList.length; i++) {
      if (productList[i].productId === productids) {
        return productList[i].price;
      }
    }
  };
  function handleReady(cart) {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${(
      currentDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${currentDate.getDate().toString().padStart(2, "0")}`;
    axios
      .post(`http://localhost:8080/notification/insertNotification`, {
        userid: cart.userid,
        subject: "Order Accepted",
        message: `Your order has been accepted, and ready for pickup and payment at ${cart.time} on ${cart.date}`,
        isread: false,
        date: formattedDate,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .put(
        `http://localhost:8080/shoppingCart/updateShoppingCart/${cart.cartId}`,
        {
          userid: cart.userid,
          total: cart.total,
          time: cart.time,
          date: cart.date,
          orders: cart.orders,
          paymethod: cart.paymethod,
          ischeck: true,
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    window.location.reload();
  }
  return (
    <>
      <PharmaNavbar />

      <div className="ordermanager-center">
        <div className="ordermanager-holder">
          <div className="ordermanager-title">
            <img src="/images/ordermanager.png" alt="pharmapurse" />
          </div>
          <div className="ordermanager-container">
            <div className="ordermanager-head">
              <Link to="/pharmaDashboard" className="ordermanager-back">
                <img
                  className="ordermanager-back"
                  src="/images/back.png"
                  alt="pharmapurse"
                ></img>
              </Link>
              <Link to="/orderHistory" className="ordermanager-history">
                <img
                  className="ordermanager-history"
                  src="/images/orderhistorybtn.png"
                  alt="pharmapurse"
                ></img>
              </Link>
            </div>
            <div className="ordermanager-body">
              <h1 className="ordermanager-body-title">Pending Order</h1>

              {orderList.map((order, index) => (
                <div className="ordercard" key={index}>
                  <div className="ordercard-container">
                    <p className="ordercard-title">
                      <b>Order Id:</b> {order.cartId}{" "}
                    </p>
                    <p className="ordercard-title">
                      <b>Order Date: </b>
                      {order.date}{" "}
                    </p>
                    <p className="ordercard-title">
                      <b>Time: </b>
                      {order.time}{" "}
                    </p>
                    <p className="ordercard-title">
                      <b>Customer Name: </b>
                      {findName(order.userid)}
                    </p>
                    <p className="ordercard-title">
                      <b>Payment Method: </b>
                      {order.paymethod}
                    </p>
                    <button
                      className="ordercard-btnview"
                      onClick={() => {
                        if (
                          document.getElementsByClassName("ordercard-body")[
                            index
                          ].style.display === "none"
                        ) {
                          document.getElementsByClassName("ordercard-body")[
                            index
                          ].style.display = "block";
                        } else {
                          document.getElementsByClassName("ordercard-body")[
                            index
                          ].style.display = "none";
                        }
                      }}
                    >
                      View
                    </button>
                  </div>
                  <div className="ordercard-body">
                    <p className="productcard-title">
                      <b>Date and Time: </b>
                      {order.date} | {order.time}
                    </p>
                    <p className="productcard-title">
                      <b>Customer Name: </b>
                      {findName(order.userid)}
                    </p>
                    <p className="productcard-title">
                      <b>Total: </b>₱{order.total}
                    </p>
                    {/* <p className="productcard-title">Orders: {order.orders}</p> */}
                    {findOrderId(order.orders).map((product, index) => (
                      <div className="productcard" key={index}>
                        <p className="productcard-title">
                          <b>Product Id: </b>
                          {findProductId(product.productid)}
                        </p>
                        <p className="productcard-title">
                          <b>Product Name: </b>
                          {findProductName(product.productid)}
                        </p>
                        <p className="productcard-title">
                          <b>Quantity: </b>
                          {product.quantity}
                        </p>
                        <p className="productcard-title">
                          <b>Unit Price: </b>₱
                          {findProductPrice(product.productid)}
                        </p>
                      </div>
                    ))}
                    <div className="ordermanager-btnready-container">
                      <button
                        className="ordermanager-btnready"
                        onClick={() => {
                          handleReady(order);
                        }}
                      >
                        Done
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
