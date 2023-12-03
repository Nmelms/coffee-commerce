"use client";
import Image from "next/image";
import { Button } from "react-bootstrap";
import AddToCartBtn from "./AddToCartBtn";
import Link from "next/link";

const ProductCard = ({ product }) => {
  let roastStr = product.roast;
  return (
    <a
      className="w-100 col-12 col-sm-6 col-lg-3 d-flex justify-content-center product-card-link-wrapper"
      href={`/shop/${product.id}`}
    >
      <div
        className={` d-flex m-2 border product-card justify-content-around w-100`}
      >
        <div className="row h-50">
          <Image
            className="product-img"
            height={100}
            width={100}
            src={product.images[0].src}
            alt="product image"
          ></Image>
        </div>
        <div
          className={`coffee-roast ${product.acf.coffee_roast} row rounded-pill p-1`}
        >
          <span>{product.acf.coffee_roast}</span>
        </div>
        <div className="row d-flex flex-column align-items-center">
          <p>{product.name}</p>
          <span className="price text-center">${product.price}</span>
          {/* <span className="roast rounded-pill text-center m-3 p-1">
              {roastStr.charAt(0).toUpperCase() + roastStr.slice(1)}
            </span> */}
        </div>

        <AddToCartBtn product={product.id}>ADD to Cart</AddToCartBtn>
      </div>
    </a>
  );
};

export default ProductCard;
