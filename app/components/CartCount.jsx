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

  return (
    itemCount > 0 && (
      <div className="cart-count rounded-circle badge bg-danger d-flex align-items-center justify-content-center ms-1">
        {itemCount}
      </div>
    )
  );
};

export default CartCount;
