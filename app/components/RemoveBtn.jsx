"use client";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import { NextResponse } from "next/server";
import useCartNumber from "../useCartNumber";
const RemoveBtn = ({ item, setCartItems, cartItems }) => {
  const { itemCount, setItemCount } = useCartNumber();
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
        setCartItems(data.items);
        setItemCount(data.items_count);
      });

    // if (await res.ok) {
    //   setCartItems(await res.items);
    //   console.log(await res.items, "this is the await");
    // }
    // let newCart = cartItems.filter((item) => item.key !== num);
    // return NextResponse.json(res);
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
