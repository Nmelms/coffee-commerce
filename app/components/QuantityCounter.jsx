"use client";
import { NextResponse } from "next/server";
import { debounce } from "lodash";
import { Button } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
import { useDebouncedCallback } from "use-debounce";
import useCartNumber from "../useCartNumber";
import useCartStore from "../useCartStore";

const QuantityCounter = ({ id, initialQuan, productId, setData }) => {
  const [quantity, setQuantity] = useState(initialQuan);
  let hostURL = process.env.NEXT_PUBLIC_FRONT_URL;

  const updateCartApi = useDebouncedCallback(async (quantity, id) => {
    if (initialQuan !== 0) {
      try {
        let res = await fetch(`${hostURL}/api/cart/update`, {
          method: "POST",
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ key: id, quantity: quantity }),
        });

        let json = await res.json();

        if (res.ok) {
          useCartStore.getState().setCartData(json);
          useCartStore.getState().updateCartItems(json.items);
          useCartStore.getState().updateItemsCount(json.items_count);
          return NextResponse.json(json);
        } else {
          return NextResponse.json({ message: "error" });
        }
      } catch (error) {
        console.error("Error updating cart:", error);
      }
    } else {
      try {
        let res = await fetch(`${hostURL}/api/cart/add`, {
          method: "POST",
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: productId, quantity: quantity }),
        });

        let json = await res.json();

        if (res.ok) {
          useCartStore.getState().setCartData(json);
          useCartStore.getState().updateCartItems(json.items);
          useCartStore.getState().updateItemsCount(json.items_count);
          return NextResponse.json(json);
        } else {
          return NextResponse.json({ message: "error" });
        }
      } catch (error) {
        console.error("Error updating cart:", error);
      }
    }
  }, 400);

  const handleIncrement = () => {
    const newQuantity = quantity + 1;

    updateCartApi(newQuantity, id);
    setQuantity(newQuantity);
  };

  const handleDecrement = () => {
    const newQuantity = quantity - 1;
    if (newQuantity > 0) {
      updateCartApi(newQuantity, id);
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="d-flex">
      <Button
        className="decrement-btn  d-flex align-items-center"
        onClick={() => handleDecrement()}
      >
        -
      </Button>
      <span className="quantity-number px-3">{quantity} </span>
      <Button
        className="increment-btn d-flex align-items-center"
        onClick={() => handleIncrement()}
      >
        +
      </Button>
    </div>
  );
};

export default QuantityCounter;
