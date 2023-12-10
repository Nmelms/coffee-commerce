"use client";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import Link from "next/link";
// let cartToken = localStorage.getItem("carttoken");

// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
// );
const CheckoutBtn = ({ handleClick }) => {
  return (
    <button
      className="checkout-btn p-2 rounded-pill"
      onClick={(e) => handleClick(e)}
      role="link"
    >
      Checkout
    </button>
  );
};
export default CheckoutBtn;
