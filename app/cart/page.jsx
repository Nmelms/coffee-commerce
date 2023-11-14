"use client";
import { NextResponse } from "next/server";
import { useEffect, useState } from "react";
import RemoveBtn from "../components/RemoveBtn";
import Loading from "../components/Loading";
// import { Button } from "react-bootstrap";
// import Image from "next/image";
import CheckoutBtn from "../components/CheckoutBtn";
// import AddressForm from "../components/AddressForm";
import { Suspense } from "react";
import CartCard from "../components/CartCard";

const cart = () => {
  const [data, setData] = useState({});

  const [cartItems, setCartItems] = useState([]);

  const priceInDollars = (price) => price / 100;
  useEffect(() => {
    fetch("http://localhost:3000/api/cart", {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setCartItems(data.items);
      });
  }, []);

  return (
    <div className="cart container  ">
      <div className="cart-list p-0 container">
        {cartItems?.map((item) => (
          <CartCard setCartItems={setCartItems} item={item} />
        ))}
      </div>
      {data.totals?.total_price && (
        <Suspense fallback={<Loading />}>
          <div className="d-flex justify-content-end">
            <span className="order-total">
              Total: {priceInDollars(data.totals?.total_price)}
            </span>
          </div>
        </Suspense>
      )}
      {/* <AddressForm orderData={orderData} setOrderData={setOrderData} /> */}
    </div>
  );
};

export default cart;
