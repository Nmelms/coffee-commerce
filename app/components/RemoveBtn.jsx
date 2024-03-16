"use client";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import { NextResponse } from "next/server";
import useCartNumber from "../useCartNumber";
import useCartStore from "../useCartStore";

const RemoveBtn = ({ item, setCartItems, cartItems, setData }) => {
  const { setCartData, updateCartItems, updateItemsCount } = useCartStore();
  const handleClick = async () => {
    fetch(`/api/cart/remove`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item.key),
    })
      .then((res) => res.json())
      .then((data) => {
        useCartStore.getState().setCartData(data);
        useCartStore.getState().updateCartItems(data.items);
        useCartStore.getState().updateItemsCount(data.items_count);
      });
  };
  return (
    <Button
      style={{ height: "50px" }}
      onClick={handleClick}
      className="btn-danger remove-btn"
    >
      X
    </Button>
  );
};

export default RemoveBtn;
