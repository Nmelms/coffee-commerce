"use client";
import { NextResponse } from "next/server";
import { debounce } from "lodash";
import { Button } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
import { useDebouncedCallback } from "use-debounce";
import useCartNumber from "../useCartNumber";

const QuantityCounter = ({ id, initialQuan }) => {
  const [quantity, setQuantity] = useState(initialQuan);
  const { setItemCount } = useCartNumber();
  const [cartItems, setCartItems] = useState([]);
  let hostURL = process.env.NEXT_PUBLIC_FRONT_URL;

  const updateCartApi = useDebouncedCallback(async (quantity, id) => {
    let key = id.toString();
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
        console.log(quantity, "this si the quan");
        setItemCount(json.items_count);
        setCartItems(json.items);
        return NextResponse.json(json);
      } else {
        return NextResponse.json({ message: "error" });
      }
    } catch (error) {
      console.error("Error updating cart:", error);
      // Handle the error appropriately
    }
  }, 400);

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateCartApi(newQuantity, id);
  };

  const handleDecrement = () => {
    const newQuantity = quantity - 1;
    if (newQuantity > 0) {
      setQuantity(newQuantity);
      updateCartApi(newQuantity, id);
    }
  };

  // const debouncedUpdate = debounce(updateCart, 300);
  return (
    <div className="d-flex">
      <Button onClick={() => handleDecrement()}> - </Button>
      <span className="p-3">{quantity} </span>
      <Button onClick={() => handleIncrement()}> + </Button>
    </div>
  );
};

export default QuantityCounter;
