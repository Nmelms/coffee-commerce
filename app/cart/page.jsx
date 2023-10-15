"use client";
import { NextResponse } from "next/server";
import { useEffect, useState } from "react";
import RemoveBtn from "../components/RemoveBtn";
import Image from "next/image";
import CheckoutBtn from "../components/CheckoutBtn";
let token = localStorage.getItem("carttoken");
const cart = () => {
  const [cartItems, setCartItems] = useState([]);

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
        console.log(data.items);
      });
  }, []);

  return (
    <div className="cart-list">
      {cartItems?.map((item) => (
        <div className="d-flex align-items-center">
          <Image
            src={item.images[0].src}
            alit="iamge"
            height={100}
            width={100}
          />
          <h4>{item.name}</h4>
          <RemoveBtn
            setCartItems={setCartItems}
            cartItems={cartItems}
            num={item.key}
          />
        </div>
      ))}
      <CheckoutBtn>Proceed to Checout</CheckoutBtn>
    </div>
  );
};

export default cart;
