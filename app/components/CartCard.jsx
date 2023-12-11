"use client";
import React from "react";
import { NextResponse } from "next/server";
import { useState } from "react";
import RemoveBtn from "./RemoveBtn";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import QuantityCounter from "../components/QuantityCounter";
import { useDebouncedCallback } from "use-debounce";
import useCartNumber from "../useCartNumber";

const CartCard = ({ item, setCartItems, productId, setData }) => {
  const { setItemCount } = useCartNumber();
  const priceInDollars = (price) => price / 100;
  let hostURL = process.env.NEXT_PUBLIC_FRONT_URL;
  const [totalPrice, setTotalPrice] = useState(
    priceInDollars(item.prices.price)
  );
  const [quantity, setQuantity] = useState(item.quantity);
  const updateCartApi = useDebouncedCallback(async (quantity, id) => {
    try {
      let res = await fetch(`${hostURL}/api/cart/update`, {
        method: "POST",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ key: id, quantity: quantity }),
      });

      let json = await res.json();

      if (res.ok) {
        console.log(json, "the json");
        setData(json);
        setItemCount(json.items_count);
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
            alt="barista tamping coffee"
            className="cart-card-image"
            height={150}
            width={150}
          />
        </Col>
        <Col
          xs={4}
          lg={4}
          className="card-name-wrapper d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center"
        >
          <h4 className="cart-card-name">{item.name}</h4>

          <QuantityCounter
            setCartItems={setCartItems}
            id={item.key}
            initialQuan={item.quantity}
            setQuantity={setQuantity}
            updateCartApi={updateCartApi}
            setData={setData}
          />
        </Col>
        <Col
          xs={2}
          lg={3}
          className="d-flex justify-content-center align-items-center "
        >
          <div className="p-2 d-none d-lg-flex flex-column text-center">
            <p className="m-0 mb-lg-2">Unit Price</p>
            <span>${priceInDollars(item.prices.price)}</span>
          </div>
          <div className="p-2 d-flex flex-column text-center">
            <p className="m-0 mb-lg-2">Total Price</p>
            <span>${quantity * totalPrice}</span>
          </div>
        </Col>
        <Col
          xs={2}
          lg={2}
          className="d-flex justify-content-end align-items-center"
        >
          <RemoveBtn
            setData={setData}
            setCartItems={setCartItems}
            // cartItems={cartItems}
            item={item}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CartCard;
