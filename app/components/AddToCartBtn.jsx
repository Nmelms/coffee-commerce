"use client";
import { NextResponse } from "next/server";
import { useState } from "react";
import { Button } from "react-bootstrap";
import useCartStore from "../useCartStore";
let carttoken = "";

const AddToCartBtn = ({ product }) => {
  const [cartText, setCartText] = useState("Add To Cart");
  const handleClick = async (e, id) => {
    e.preventDefault();
    let res = await fetch(`api/cart/add/`, {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    const changeText = () => {
      setCartText("Success");
      setTimeout(() => {
        setCartText("Add To Cart");
      }, 700);
    };
    if (res.ok) {
      changeText();

      return NextResponse.json({ message: "did it" });
    } else {
      return NextResponse.json({ message: "nope" });
    }
  };

  return (
    <>
      <Button
        className="add-cart-btn rounded-pill "
        onClick={(e) => handleClick(e, product)}
      >
        <span>{cartText}</span>
      </Button>
    </>
  );
};

export default AddToCartBtn;
