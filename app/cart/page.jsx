"use client";
import { NextResponse } from "next/server";
import { useEffect, useState } from "react";
import RemoveBtn from "../components/RemoveBtn";
import { Button } from "react-bootstrap";
import Image from "next/image";
import CheckoutBtn from "../components/CheckoutBtn";
import AddressForm from "../components/AddressForm";
import CartCard from "../components/CartCard";

let token = localStorage.getItem("carttoken");
const cart = () => {
  const [data, setData] = useState({});
  const [orderData, setOrderData] = useState({ line_items: [], billing: {} });
  const [cartItems, setCartItems] = useState([]);

  const priceInDollars = (price) => price / 100;

  useEffect(() => {
    console.log(data.totals?.total_price);
  }, [data]);

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
        setData(data);
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
    <div className="cart container  ">
      <div className="cart-list p-0 container">
        {cartItems?.map((item) => (
          <CartCard
            images={item.images}
            name={item.name}
            setCartItems={setCartItems}
            cartItems={cartItems}
            num={item.key}
            price={priceInDollars(item.prices.price)}
          />
        ))}
      </div>

      <div className="d-flex justify-content-end">
        <span className="order-total">
          Total: {priceInDollars(data.totals?.total_price)}
        </span>
      </div>

      <AddressForm orderData={orderData} setOrderData={setOrderData} />
      <CheckoutBtn orderData={orderData}>Proceed to Checout</CheckoutBtn>
    </div>
  );
};

export default cart;
