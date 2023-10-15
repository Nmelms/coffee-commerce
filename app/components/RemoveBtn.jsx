"use client";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import { NextResponse } from "next/server";
const RemoveBtn = ({ num, setCartItems, cartItems }) => {
  async function fetchNonce() {
    const response = await fetch(
      "http://ecomm.local/wp-json/myplugin/v1/nonce"
    );
    const data = await response.json();
    return data.nonce;
  }

  const handleClick = async () => {
    let carttoken = localStorage.getItem("carttoken");
    console.log(num);
    const nonce = await fetchNonce();
    let res = fetch(
      `http://ecomm.local/wp-json/wc/store/v1/cart/remove-item?key=${num}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Nonce: nonce,
          "Cart-Token": carttoken,
        },
      }
    );
    let newCart = cartItems.filter((item) => item.key !== num);
    console.log(newCart);
    setCartItems(newCart);

    // setCartItems(newCart.items);
    return NextResponse.json(res);
  };
  return (
    <Button onClick={handleClick} className="btn-danger">
      X
    </Button>
  );
};

export default RemoveBtn;
