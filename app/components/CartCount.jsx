"use client";
import React from "react";
import { useEffect } from "react";
import useCartNumber from "../useCartNumber";
import useCartStore from "../useCartStore";

const CartCount = () => {
  const { itemsCount, updateItemsCount } = useCartStore();
  console.log(itemsCount, "this is the items count");
  useEffect(() => {
    if (itemsCount === 0) {
      fetch("/api/cart")
        .then((res) => res.json())
        .then((data) => updateItemsCount(data.items_count));
    }
  }, []);

  return (
    itemsCount > 0 && (
      <div className="cart-count rounded-circle badge bg-danger d-flex align-items-center justify-content-center ms-1">
        {itemsCount}
      </div>
    )
  );
};

export default CartCount;
