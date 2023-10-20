"use client";
import { NextResponse } from "next/server";
import { useEffect, useState } from "react";
import RemoveBtn from "../components/RemoveBtn";
// import { Button } from "react-bootstrap";
// import Image from "next/image";
// import CheckoutBtn from "../components/CheckoutBtn";
// import AddressForm from "../components/AddressForm";
import CartCard from "../components/CartCard";

const cart = () => {
  const [data, setData] = useState({});
  const [orderData, setOrderData] = useState({ line_items: [], billing: {} });
  const [cartItems, setCartItems] = useState([]);

  const priceInDollars = (price) => price / 100;
  useEffect(() => {
    fetch("http://localhost:3000/api/cart", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data));
    console.log(data);
  }, []);

  return (
    <div className="cart container  ">
      <div className="cart-list p-0 container">
        {/* {data?.map((item) => (
          <CartCard
            id={item.id}
            images={item.images}
            name={item.name}
            setCartItems={setCartItems}
            cartItems={cartItems}
            num={item.key}
            quantity={item.quantity}
            price={priceInDollars(item.prices.price)}
          />
        ))} */}
      </div>

      <div className="d-flex justify-content-end">
        <span className="order-total">
          Total: {priceInDollars(data.totals?.total_price)}
        </span>
      </div>

      {/* <AddressForm orderData={orderData} setOrderData={setOrderData} /> */}
      {/* <CheckoutBtn orderData={orderData}>Proceed to Checout</CheckoutBtn> */}
    </div>
  );
};

export default cart;
