"use client";
import Image from "next/image";
import { Button } from "react-bootstrap";
import { useState } from "react";
import AddToCartBtn from "./AddToCartBtn";
import Link from "next/link";

const ProductCard = ({ product }) => {
  console.log(product);
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      className="d-flex flex-column product-main-div"
    >
      <div className="product-card-wrapper d-flex flex-column mx-4 mt-4">
        <Image
          className="product-img"
          height={500}
          width={500}
          src={product.images[0].src}
          alt="product image"
        />
        <div className="img-overlay d-flex justify-content-center align-items-center"></div>
      </div>
      <div
        className={`product-bottom pt-4 d-flex flex-column align-items-center ${
          hovered ? "hovered" : ""
        }`}
      >
        <AddToCartBtn />
        <span className="product-name">{product.name.toUpperCase()}</span>
      </div>
    </div>
  );
};

export default ProductCard;
