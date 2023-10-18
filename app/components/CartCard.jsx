import React from "react";
import RemoveBtn from "./RemoveBtn";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import QuantityCounter from "../components/QuantityCounter";

const CartCard = ({
  images,
  name,
  setCartItems,
  cartItems,
  num,
  price,
  quantity,
  id,
}) => {
  return (
    <Container>
      <Row className="cart-card d-flex ">
        <Col xs={3} lg={2}>
          <Image
            style={{ objectFit: "contain" }}
            src={images[0].src}
            alt="image"
            className="cart-card-image"
            height={150}
            width={150}
          />
        </Col>
        <Col
          xs={3}
          lg={5}
          className="card-name-wrapper d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center"
        >
          <h4 className="cart-card-name">{name}</h4>

          <QuantityCounter id={id} quantity={quantity} />
        </Col>
        <Col
          xs={3}
          lg={2}
          className="d-flex justify-content-center align-items-center"
        >
          ${price}
        </Col>
        <Col
          xs={3}
          lg={2}
          className="d-flex justify-content-end align-items-center"
        >
          <RemoveBtn
            setCartItems={setCartItems}
            cartItems={cartItems}
            num={num}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CartCard;
