"use client";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
let cartToken = localStorage.getItem("carttoken");
const CheckoutBtn = () => {
  const [lineItems, setLineItems] = useState([]);
  useEffect(() => {
    console.log(lineItems);
  }, [lineItems]);

  const handleClick = async () => {
    let res = await fetch("http://localhost:3000/api/cart/products", {
      method: "GET",
      headers: {
        "Cart-Token": cartToken,
      },
    });

    if (res.ok) {
      try {
        const data = await res.json();
        const line = data.items.map((item) => {
          return {
            product_id: item.id,
            quantity: item.quantity,
          };
        });
        setLineItems(line);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    } else {
      console.error("Failed to fetch data:", res.status, res.statusText);
    }

    let orderRes = await fetch("api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cart-Token": cartToken,
      },
      body: JSON.stringify({
        line_items: lineItems,
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
