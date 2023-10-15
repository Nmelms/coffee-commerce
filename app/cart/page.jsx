"use client";
import { NextResponse } from "next/server";
import { useEffect, useState } from "react";

const cart = () => {
  const [cartItems, setCartItems] = useState([]);
  let token = localStorage.getItem("carttoken");
  useEffect(() => {
    fetch("http://ecomm.local/wp-json/wc/store/v1/cart/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Cart-Token": token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCartItems(data.items);
      });
  }, []);

  console.log(cartItems);

  return (
    <div>
      {cartItems?.map((item) => (
        <h1>{item.id}</h1>
      ))}
    </div>
  );
};

export default cart;
