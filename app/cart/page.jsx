"use client";
import { NextResponse } from "next/server";
import { useEffect, useState } from "react";
import RemoveBtn from "../components/RemoveBtn";
import Loading from "../components/Loading";
import { Button } from "react-bootstrap";
import Image from "next/image";
import CheckoutBtn from "../components/CheckoutBtn";
// import AddressForm from "../components/AddressForm";
import { Suspense } from "react";
import CartCard from "../components/CartCard";
import useCartStore from "../useCartStore";

const Cart = () => {
  const { cartData, setCartData, updateCartItems, cartItems } = useCartStore();
  console.log(cartData);

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
        setCartData(data);
        updateCartItems(data.items);
      });
  }, []);

  return (
    <div className="cart container d-flex flex-column  ">
      <div
        className={`cart-list flex-column p-0 d-flex align-items-center ${
          cartData.length === 0 ? "justify-content-center" : ""
        } `}
      >
        {cartItems.map((item) => (
          <CartCard
            key={item.key}
            setData={setCartData}
            setCartItems={updateCartItems}
            item={item}
          />
        ))}
        {cartData.length === 0 && (
          <div className="d-flex flex-column text-center">
            <Image
              className="empty-cart"
              alt="empty cart"
              height={300}
              width={300}
              src={"/empty_cart.svg"}
            />
            <span className="py-4 cart-empty-text">You Cart is Empty!</span>
          </div>
        )}
      </div>
      {cartData.totals?.total_price && (
        <div className="d-flex justify-content-end">
          <span className="order-total">
            Total: {priceInDollars(cartData.totals?.total_price)}
          </span>
        </div>
      )}
      <Button href="/checkout" className="to-checkout-btn rounded-pill mt-5">
        Proceed To Checkout
      </Button>
      {/* <AddressForm orderData={orderData} setOrderData={setOrderData} /> */}
    </div>
  );
};

export default Cart;
