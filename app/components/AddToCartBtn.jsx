"use client";
import { NextResponse } from "next/server";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import useCartStore from "../useCartStore";
let carttoken = "";

const AddToCartBtn = ({ product }) => {
  const [cartText, setCartText] = useState("Add To Cart");
  const [cart, setCart] = useState([]);

  const changeText = () => {
    setCartText("Success");
    setTimeout(() => {
      setCartText("Add To Cart");
    }, 700);
  };

  useEffect(() => {
    fetch(`/api/cart`, {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCart(data.items);
      });
  }, []);

  const handleClick = async (e, id) => {
    e.preventDefault();
    const itemIndex = cart.findIndex((item) => item.id === id);

    if (itemIndex !== -1) {
      const res = await fetch(`api/cart/update/`, {
        method: "POST",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          key: cart[itemIndex].key,
          quantity: cart[itemIndex].quantity + 1,
        }),
      });
      if (res.ok) {
        let updatedCart = [...cart];
        updatedCart[itemIndex] = {
          ...updatedCart[itemIndex],
          quantity: updatedCart[itemIndex].quantity + 1,
        };
        setCart(updatedCart);
        changeText();
        return NextResponse.json(res);
      } else {
        return NextResponse.json(res);
      }
    } else {
      // Item does not exist in cart, add it
      const res = await fetch(`api/cart/add/`, {
        method: "POST",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (res.ok) {
        changeText();
        // Handle response appropriately here
        return NextResponse.json(res);
      } else {
        return NextResponse.json(res);
      }
    }
  };

  return (
    <>
      <Button
        className="add-cart-btn rounded-pill mb-3 "
        onClick={(e) => handleClick(e, product)}
      >
        <span>{cartText}</span>
      </Button>
    </>
  );
};

export default AddToCartBtn;
