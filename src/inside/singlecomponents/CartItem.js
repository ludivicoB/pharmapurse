import React, { useEffect, useState } from "react";
import "./CartItem.css";
import axios from "axios";
export default function CartItem(props) {
  const [prod, setProd] = useState([]);
  // const [total, setTotal] = useState(0);
  useEffect(() => {
    const calculatedTotal = props.product.total;
    // setTotal(calculatedTotal);
    props.updateTotal(calculatedTotal);

    axios
      .get("http://localhost:8080/product/getAllProduct")
      .then((res) => {
        setProd(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props]);

  function deleteOrder(id) {
    axios
      .put(`http://localhost:8080/order/updateOrder?orderID=${id}`, {
        userid: props.user.userID,
        productid: props.product.productid,
        quantity: props.product.quantity,
        orderDate: props.product.orderDate,
        total: props.product.total,
        deleted: true,
        checkout: false,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    window.location.reload(false);
  }

  const findName = (id) => {
    for (let i = 0; i < prod.length; i++) {
      if (prod[i].productId === id) {
        return prod[i].name;
      }
    }
  };

  const findImage = (id) => {
    for (let i = 0; i < prod.length; i++) {
      if (prod[i].productId === id) {
        return prod[i].imgsrc;
      }
    }
  };

  const findPrice = (id) => {
    for (let i = 0; i < prod.length; i++) {
      if (prod[i].productId === id) {
        return prod[i].price;
      }
    }
  };

  return (
    <>
      <div className="cartitem-container">
        <button
          className="cartitem-delete"
          title="Delete Item?"
          onClick={() => deleteOrder(props.product.orderID)}
        >
          X
        </button>
        <p className="cartitem-name">{findName(props.product.productid)}</p>
        <div className="cartitem-body">
          <img
            className="cartitem-img"
            src={findImage(props.product.productid)}
            alt="bio.png"
          ></img>
          <table className="cartitem-table">
            <tbody>
              <tr className="cartitem-tr">
                <th className="cartitem-th">Each</th>
                <th className="cartitem-th">Quantity</th>
                <th className="cartitem-th">Total</th>
              </tr>
              <tr className="cartitem-tr">
                <td className="cartitem-td">
                  ₱<span>{findPrice(props.product.productid)}</span>
                </td>
                <td className="cartitem-td">
                  <span>{props.product.quantity}</span>
                </td>
                <td className="cartitem-td">₱{props.product.total}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
