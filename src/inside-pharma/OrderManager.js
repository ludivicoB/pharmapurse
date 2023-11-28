import React from "react";
import "./OrderManager.css";
import PharmaNavbar from "./PharmaNavbar";
import axios from "axios";
import { useEffect, useState } from "react";
export default function OrderManager() {
  const [fOrder, setFOrder] = useState([]);
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
              <img src="/images/back.png" alt="pharmapurse"></img>
            </div>
            <div className="ordermanager-body">
              {orderList.map((order, index) => (
                <div className="ordercard" key={index}>
                  <div className="ordercard-container">
                    <p className="ordercard-title">Order Id: {order.cartId} </p>
                    <p className="ordercard-title">Order Date: {order.date} </p>
                    <p className="ordercard-title">Time: {order.time} </p>
                    <p className="ordercard-title">
                      Customer Name: {findName(order.userid)}
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
                      Date and Time: {order.date} | {order.time}
                    </p>
                    <p className="productcard-title">
                      Customer Name: {findName(order.userid)}
                    </p>
                    <p className="productcard-title">Total: {order.total}</p>
                    <p className="productcard-title">Orders: {order.orders}</p>
                    {findOrderId(order.orders).map((product, index) => (
                      <div className="productcard" key={index}>
                        <p className="productcard-title">
                          Product Id: {findProductId(product.productid)}
                        </p>
                        <p className="productcard-title">
                          Product Name: {findProductName(product.productid)}
                        </p>
                        <p className="productcard-title">
                          Quantity: {product.quantity}
                        </p>
                        <p className="productcard-title">
                          Price: {findProductPrice(product.productid)}
                        </p>
                      </div>
                    ))}
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
