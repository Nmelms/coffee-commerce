"use client";
import { NextResponse } from "next/server";
import useCartStore from "../useCartStore";
let carttoken = "";
const AddToCartBtn = ({ product }) => {
  const handleClick = async (e, id) => {
    e.preventDefault();
    fetch("http://localhost:3000/api/cart/add/", {
      method: "POST",
      cache: "no-cache",
      body: JSON.stringify({ id, quantity: 1 }),
    }).then((res) => console.log(res));
  };

  return (
    <>
      <button onClick={(e) => handleClick(e, product)}>addToCartBtn</button>
    </>
  );
};

export default AddToCartBtn;
