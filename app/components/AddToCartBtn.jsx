"use client";
import { NextResponse } from "next/server";
import useCartStore from "../useCartStore";
let carttoken = "";
const AddToCartBtn = ({ product }) => {
  const handleClick = async (e, id) => {
    e.preventDefault();
    let res = await fetch("http://localhost:3000/api/cart/add/", {
      method: "POST",
      cache: "no-cache",
      body: JSON.stringify({ id, quantity: 1 }),
    });
    if (res.ok) {
      return NextResponse.json({ message: "did it" });
    } else {
      return NextResponse.json({ message: "nope" });
    }
  };

  return (
    <>
      <button onClick={(e) => handleClick(e, product)}>addToCartBtn</button>
    </>
  );
};

export default AddToCartBtn;
