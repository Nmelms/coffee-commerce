"use client";
import Image from "next/image";
import { Button } from "react-bootstrap";
import AddToCartBtn from "./AddToCartBtn";
import Link from "next/link";

const ProductCard = ({ product }) => {
  let roastStr = product.roast;
  return (
    <div className="col-6 col-lg-4">
      <Link href={`/shop/${product.id}`}>
        <div className={`${product.roast} d-flex m-2 border product-card `}>
          <div className="row h-50">
            <Image
              className="product-img"
              height={100}
              width={100}
              src={product.images[0].src}
              alt="product image"
            ></Image>
          </div>
          <div className="row d-flex flex-column align-items-center">
            <p>{name}</p>
            <span className="price text-center">${product.price}</span>
            {/* <span className="roast rounded-pill text-center m-3 p-1">
              {roastStr.charAt(0).toUpperCase() + roastStr.slice(1)}
            </span> */}
          </div>

          {/* <AddToCartBtn product={id}>ADD to Cart</AddToCartBtn> */}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
