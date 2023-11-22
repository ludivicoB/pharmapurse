import React, { useEffect, useState } from "react";
import "./CartItem.css";

export default function CartItem(props) {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const calculatedTotal = props.product.price * props.product.quantity;
    setTotal(calculatedTotal);
    props.updateTotal(calculatedTotal);
  }, []);

  return (
    <>
      <div className="cartitem-container">
        <button className="cartitem-delete" title="Delete Item?">
          X
        </button>
        <p className="cartitem-name">{props.product.name}</p>
        <div className="cartitem-body">
          <img
            className="cartitem-img"
            src={`/images/${props.product.image}`}
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
                  ₱<span>{props.product.price}</span>
                </td>
                <td className="cartitem-td">
                  <span>{props.product.quantity}</span>
                </td>
                <td className="cartitem-td">₱{total}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
