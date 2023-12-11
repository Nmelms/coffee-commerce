"use client";
import Image from "next/image";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import AddToCartBtn from "./AddToCartBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 996);

  // applies hovered class to cards on small screens
  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 996);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      className="d-flex flex-column product-main-div"
    >
      <div className="product-card-wrapper d-flex flex-column mx-4 mt-4">
        <Image
          className="product-store-img"
          height={500}
          width={500}
          src={product.images[0].src}
          alt="product image"
          onLoad={() => setLoaded(true)}
        />
        {loaded && (
          <div className="img-overlay ">
            <a
              className="h-100 w-100 d-flex justify-content-center align-items-center"
              href={`/shop/${product.id}`}
            >
              <div className="mag-wrapper d-flex justify-content-center align-items-center">
                <FontAwesomeIcon color={"black"} icon={faSearch} />
              </div>
            </a>
          </div>
        )}
      </div>
      {loaded && (
        <div
          className={`product-bottom pt-4 d-flex flex-column align-items-center ${
            hovered || isSmallScreen ? "hovered" : ""
          }`}
        >
          <AddToCartBtn product={product} />
          <span className="product-name">{product.name.toUpperCase()}</span>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
