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
  // const [cart, setCart] = useState([]);
  const { setCartData, cartItems, updateItemsCount, updateCartItems } =
    useCartStore();

  const changeText = (text) => {
    setCartText(text);
    setTimeout(() => {
      setCartText("Add To Cart");
    }, 700);
  };

  const handleClick = async (e, product) => {
    let id = product.id;
    e.preventDefault();
    const itemIndex = cartItems.findIndex((item) => item.id === id);
    //if item exsits add one to cart else add new item
    if (product.stock_status === "instock") {
      if (itemIndex !== -1) {
        const res = await fetch(`/api/cart/update`, {
          method: "POST",
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            key: cartItems[itemIndex].key,
            quantity: cartItems[itemIndex].quantity + 1,
          }),
        });
        if (res.ok) {
          let json = await res.json();
          console.log(json);
          setCartData(json);
          updateCartItems(json.items);
          changeText("Success");
        } else {
          changeText("Error, Try Again");
        }
      } else {
        const res = await fetch(`/api/cart/add`, {
          method: "POST",
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
        });

        if (res.ok) {
          let json = await res.json();
          setCartData(json);
          updateCartItems(json.items);
          changeText("Success");
          updateItemsCount(json.items_count);
          console.log(json.items_count, "this is update");
        } else {
          changeText("Error, Try Again");
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
