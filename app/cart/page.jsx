"use client";
import { NextResponse } from "next/server";
import { useEffect, useState } from "react";
import RemoveBtn from "../components/RemoveBtn";
import { Button } from "react-bootstrap";
import Image from "next/image";
import CheckoutBtn from "../components/CheckoutBtn";
import AddressForm from "../components/AddressForm";
let token = localStorage.getItem("carttoken");
const cart = () => {
  const [orderData, setOrderData] = useState({ line_items: [], billing: {} });
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    console.log(orderData);
  }, [orderData]);

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
        let lineArr = [];
        let cartArr = [];
        data.items.map((item) => {
          lineArr.push({ product_id: item.id, quantity: item.quantity });
          cartArr.push(item);
        });
        setOrderData((prev) => ({
          ...prev,
          line_items: lineArr,
        }));
        setCartItems(cartArr);
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
      <Button>Log products</Button>
      <AddressForm orderData={orderData} setOrderData={setOrderData} />
      <CheckoutBtn orderData={orderData}>Proceed to Checout</CheckoutBtn>
    </div>
  );
};

export default cart;
