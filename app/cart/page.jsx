"use client";
import { NextResponse } from "next/server";
import { useEffect, useState } from "react";
import RemoveBtn from "../components/RemoveBtn";
import Loading from "../components/Loading";
import { Button } from "react-bootstrap";
// import Image from "next/image";
import CheckoutBtn from "../components/CheckoutBtn";
// import AddressForm from "../components/AddressForm";
import { Suspense } from "react";
import CartCard from "../components/CartCard";

const Cart = () => {
  const [data, setData] = useState({});
  const [cartItems, setCartItems] = useState([]);

  const priceInDollars = (price) => price / 100;
  useEffect(() => {
    fetch(`/api/cart`, {
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
    <div className="cart container d-flex flex-column  ">
      <div className="cart-list p-0 ">
        {cartItems?.map((item) => (
          <CartCard key={item.key} setCartItems={setCartItems} item={item} />
        ))}
      </div>
      {data.totals?.total_price && (
        <div className="d-flex justify-content-end">
          <span className="order-total">
            Total: {priceInDollars(data.totals?.total_price)}
          </span>
        </div>
      )}
      <Button href="/checkout" className="to-checkout-btn rounded-pill mt-5">
        Proceed To Checkouttt
      </Button>
      {/* <AddressForm orderData={orderData} setOrderData={setOrderData} /> */}
    </div>
  );
};

export default Cart;
