import React from "react";
import RemoveBtn from "./RemoveBtn";
import Image from "next/image";

const CartCard = ({ images, name, setCartItems, cartItems, num }) => {
  return (
    <div className="cart-card d-flex align-items-center">
      <Image src={images[0].src} alit="iamge" height={100} width={100} />
      <h4>{name}</h4>
      <RemoveBtn setCartItems={setCartItems} cartItems={cartItems} num={num} />
    </div>
  );
};

export default CartCard;
