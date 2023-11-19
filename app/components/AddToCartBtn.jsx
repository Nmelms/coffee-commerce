"use client";
import { NextResponse } from "next/server";
import useCartStore from "../useCartStore";
let carttoken = "";
const AddToCartBtn = ({ product }) => {
  let hostURL = process.env.NEXT_PUBLIC_FRONT_URL;
  const handleClick = async (e, id) => {
    e.preventDefault();
    let res = await fetch(`${hostURL}/api/cart/add/`, {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
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
