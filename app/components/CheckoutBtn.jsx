"use client";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import Link from "next/link";
// let cartToken = localStorage.getItem("carttoken");
const CheckoutBtn = ({ handleClick }) => {
  const [lineItems, setLineItems] = useState([]);

  return (
    <>
      <Link href="/checkout">
        <Button onClick={(e) => handleClick(e)} className="checkout-btn">
          Procced to checkout
        </Button>
      </Link>
    </>
  );
};
export default CheckoutBtn;
