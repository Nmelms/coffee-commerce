"use client";
import { NextResponse } from "next/server";
import { debounce } from "lodash";
import { Button } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
const QuantityCounter = ({ quantity, setQuantity, id, setCartItems }) => {
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(quantity - 1);
  };

  // const updateQuantity = async (newNum) => {
  //   let res = await fetch("http://localhost:3000/api/cart/update", {
  //     method: "POST",
  //     cache: "no-cache",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ key: id, quantity: newNum }),
  //   });
  //   let json = await res.json();
  //   if (res.ok) {
  //     setCartItems(json.items);
  //     return NextResponse.json(json);
  //   } else {
  //     return NextResponse.json({ message: "error" });
  //   }
  // };

  // const debouncedUpdate = debounce(updateCart, 300);
  return (
    <div classname="d-flex">
      <Button onClick={() => handleDecrement()}> - </Button>
      <span className="p-3">{quantity} </span>
      <Button onClick={() => handleIncrement()}> + </Button>
    </div>
  );
};

export default QuantityCounter;
