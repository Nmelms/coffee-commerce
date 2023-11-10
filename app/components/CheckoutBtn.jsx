"use client";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
let cartToken = localStorage.getItem("carttoken");
const CheckoutBtn = ({ orderData }) => {
  const [lineItems, setLineItems] = useState([]);

  const handleClick = async () => {
    let orderRes = await fetch("api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cart-Token": cartToken,
      },
      body: JSON.stringify({
        ...orderData,
      }),
    });
  };
  return (
    <Button onClick={handleClick} className="checkout-btn">
      Procced to checkout
    </Button>
  );
};
export default CheckoutBtn;
