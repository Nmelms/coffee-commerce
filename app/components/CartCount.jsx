"use client";
import React from "react";
import { useEffect } from "react";
import useCartNumber from "../useCartNumber";

const CartCount = () => {
  const { itemCount, setItemCount } = useCartNumber();
  useEffect(() => {
    if (itemCount === 0) {
      fetch("/api/cart")
        .then((res) => res.json())
        .then((data) => setItemCount(data.items_count));
    }
  }, []);

  return <div className="cart-count">{itemCount > 0 && itemCount}</div>;
};

export default CartCount;
