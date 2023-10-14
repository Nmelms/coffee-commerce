"use client";
import { NextResponse } from "next/server";
import useCartStore from "../useCartStore";
let carttoken = "";
const AddToCartBtn = ({ product }) => {
  console.log(product);
  async function fetchNonce() {
    const response = await fetch(
      "http://ecomm.local/wp-json/myplugin/v1/nonce"
    );
    const data = await response.json();
    return data.nonce;
  }

  const handleClick = async (id) => {
    if (localStorage.getItem("carttoken" === null)) {
      localStorage.setItem("carttoken", "");
    }
    let carttoken = localStorage.getItem("carttoken");
    console.log(carttoken);
    const nonce = await fetchNonce();

    const res = await fetch("http://localhost:3000/api/cart/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Nonce: nonce,
        "Cart-Token": carttoken,
      },
      body: JSON.stringify({
        id: product,
      }),
    });
    let message = await res.json();
    let token = localStorage.getItem("carttoken");
    if (!token) {
      localStorage.setItem("carttoken", await message.cartToken);
      carttoken = token;
    } else {
      carttoken = token;
      // console.log(token);
    }
    if (carttoken === "") {
    }
    return Response.json({ message: "did good" });
  };

  const fetchCart = async () => {
    let token = localStorage.getItem("carttoken");
    const res = await fetch("http://ecomm.local/wp-json/wc/store/v1/cart/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Cart-Token": token,
      },
    });
  };

  return (
    <>
      <button onClick={() => handleClick()}>addToCartBtn</button>
      <button onClick={() => fetchCart()}>fetch cart</button>
    </>
  );
};

export default AddToCartBtn;
