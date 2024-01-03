"use client";
import { NextResponse } from "next/server";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import useCartStore from "../useCartStore";
import useCartNumber from "../useCartNumber";
let carttoken = "";

const AddToCartBtn = ({ product }) => {
  const [cartText, setCartText] = useState(
    product.stock_status === "instock" ? "Add To Cart" : "Out Of Stock"
  );
  const [cart, setCart] = useState([]);
  const { addToCart, itemCount, resetCart } = useCartNumber();
  const { updateItemsCount } = useCartStore();

  const changeText = (text) => {
    setCartText(text);
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

  const handleClick = async (e, product) => {
    let id = product.id;
    e.preventDefault();
    const itemIndex = cart.findIndex((item) => item.id === id);
    //if item exsits add one to cart else add new item
    if (product.stock_status === "instock") {
      if (itemIndex !== -1) {
        const res = await fetch(`/api/cart/update/`, {
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
          let json = await res.json();
          setCart(json.items);
          changeText("Success");
          useCartStore.getState().updateItemsCount(json.items_count);
          return NextResponse.json(res);
        } else {
          changeText("Error, Try Again");
          return NextResponse.json(res);
        }
      } else {
        const res = await fetch(`/api/cart/add/`, {
          method: "POST",
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
        });

        if (res.ok) {
          let json = await res.json();
          setCart(json.items);
          changeText("Success");
          useCartStore.getState().updateItemsCount(json.items_count);
          return NextResponse.json(res);
        } else {
          changeText("Error, Try Again");
          return NextResponse.json(res);
        }
      }
    } else {
      setCartText("Out Of stock");
    }
  };

  return (
    <>
      <Button
        className={`add-cart-btn rounded-pill mb-3 ${
          product.stock_status !== "instock" ? "disabled" : ""
        }`}
        onClick={(e) => handleClick(e, product)}
      >
        <span>{cartText}</span>
      </Button>
    </>
  );
};

export default AddToCartBtn;
