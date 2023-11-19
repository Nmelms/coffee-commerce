"use client";
import React from "react";
import { NextResponse } from "next/server";
import { useState } from "react";
import RemoveBtn from "./RemoveBtn";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import QuantityCounter from "../components/QuantityCounter";
import { useDebouncedCallback } from "use-debounce";

const CartCard = ({ item, setCartItems }) => {
  const priceInDollars = (price) => price / 100;
  const [totalPrice, setTotalPrice] = useState(
    priceInDollars(item.prices.price)
  );
  const [quantity, setQuantity] = useState(item.quantity);
  const updateCartApi = useDebouncedCallback(async (quantity, id) => {
    try {
      let res = await fetch(`api/cart/update`, {
        method: "POST",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ key: id, quantity: quantity }),
      });

      let json = await res.json();

      if (res.ok) {
        setCartItems(json.items);
        return NextResponse.json(json);
      } else {
        return NextResponse.json({ message: "error" });
      }
    } catch (error) {
      console.error("Error updating cart:", error);
      // Handle the error appropriately
    }
  }, 400);

  return (
    <Container>
      <Row className="cart-card d-flex ">
        <Col xs={3} lg={2}>
          <Image
            style={{ objectFit: "contain" }}
            src={item.images[0].src}
            alt="image"
            className="cart-card-image"
            height={150}
            width={150}
          />
        </Col>
        <Col
          xs={3}
          lg={4}
          className="card-name-wrapper d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center"
        >
          <h4 className="cart-card-name">{item.name}</h4>

          <QuantityCounter
            setCartItems={setCartItems}
            id={item.key}
            quantity={quantity}
            setQuantity={setQuantity}
            updateCartApi={updateCartApi}
          />
        </Col>
        <Col
          xs={3}
          lg={3}
          className="d-flex justify-content-center align-items-center "
        >
          <div className="p-2 d-flex flex-column text-center">
            <p>Unit Price</p>
            <span>${priceInDollars(item.prices.price)}</span>
          </div>
          <div className="p-2 d-flex flex-column text-center">
            <p>total Price</p>
            <span>${quantity * totalPrice}</span>
          </div>
        </Col>
        <Col
          xs={3}
          lg={2}
          className="d-flex justify-content-end align-items-center"
        >
          {/* <RemoveBtn
            setCartItems={setCartItems}
            cartItems={cartItems}
            num={num}
          /> */}
        </Col>
      </Row>
    </Container>
  );
};

export default CartCard;
