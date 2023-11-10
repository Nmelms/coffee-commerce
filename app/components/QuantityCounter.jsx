"use client";
import { NextResponse } from "next/server";
import { debounce } from "lodash";
import { Button } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
import { useDebouncedCallback } from "use-debounce";
const QuantityCounter = ({
  quantity,
  setQuantity,
  id,
  setCartItems,
  updateCartApi,
}) => {
  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    console.log(newQuantity);
    setQuantity(newQuantity);
    updateCartApi(newQuantity, id);
  };

  const handleDecrement = () => {
    const newQuantity = quantity - 1;
    console.log(newQuantity);
    setQuantity(newQuantity);
    updateCartApi(newQuantity, id);
  };

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
