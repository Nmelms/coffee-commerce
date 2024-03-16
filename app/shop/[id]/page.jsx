"use client";
import { NextResponse } from "next/server";
import { useEffect, useState } from "react";
import QuantityCounter from "../../components/QuantityCounter";
import AddToCartBtn from "../../components/AddToCartBtn";

import { Button } from "react-bootstrap";
import Image from "next/image";

import useCartStore from "../../useCartStore";

const ProductPage = ({ params }) => {
  const [product, setProduct] = useState(null);
  const [firstRun, setFirstRun] = useState(true);
  const [key, setKey] = useState(params.id);
  const [item, setItem] = useState(null);
  const { cartData, setCartData, updateCartItems, cartItems } = useCartStore();

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
        setCartData(data);
        updateCartItems(data.items);
      });

    fetch(`/api/products/${params.id}`, {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  useEffect(() => {
    let item = cartData.items?.filter((item) => item.id == params.id);
    setItem(item);
  }, [cartData]);

  return (
    <>
      {product && (
        <>
          render
          <div
            style={{ marginTop: "6vh" }}
            className="store-hero w-100 d-flex justify-content-center align-items-center"
          >
            <h2>{product.name}</h2>
          </div>
          <div className="productPage container d-flex justify-content-center   space-apart">
            <div className="row product-row w-100 d-flex mb-lg-5 ">
              <Image
                className="product-img col-12 col-lg-6 mt-4"
                src={product.images[0].src}
                height={300}
                width={300}
                alt={product.name}
              />
              <div className="productDetails col-12  col-lg-6 d-flex  flex-column justify-content-between justify-content-md-around h-75">
                <span className="product-details-name mt-4">
                  {product.name}
                </span>
                <div className="product-attribute-wrapper d-flex align-items-center  ">
                  <span className="product-attribute-label ">Price:</span>
                  <span className="product-attribute-data price ">
                    ${product.price}
                  </span>
                </div>
                <div className="product-attribute-wrapper d-flex align-items-center">
                  <span className="product-attribute-label">Weight:</span>
                  <span className="product-attribute-data">
                    {product.acf.weight}
                  </span>
                </div>
                <div className="product-attribute-wrapper d-flex align-items-center">
                  <span className="product-attribute-label">Roast:</span>
                  <span
                    className={`product-attribute-data ${product.acf.coffee_roast}`}
                  >
                    {product.acf.coffee_roast}
                  </span>
                </div>
                <div className="product-attribute-wrapper d-flex align-items-center">
                  <span className="product-attribute-label">Availibility:</span>
                  <span
                    className={`product-attribute-data ${product.stock_status}`}
                  >
                    {product.stock_status === "instock"
                      ? "In Stock!"
                      : "Sorry! We are out of stock."}
                  </span>
                </div>
                <div className="product-attribute-wrapper d-flex align-items-center mb-5">
                  <span className="product-attribute-label">Quantity:</span>
                  <span className="product-attribute-data">
                    <QuantityCounter
                      setKey={setKey}
                      id={key}
                      initialQuan={item?.quantity ? item?.quantity : 0}
                      productId={product.id}
                      firstRun={firstRun}
                      setFirstRun={setFirstRun}
                    />
                  </span>
                </div>
                <AddToCartBtn product={product} />
              </div>
            </div>
          </div>
          <section className="product-description container">
            <div className="description-title px-4 py-3">
              PRODUCT DESCRIPTION
            </div>
            {/* eventually need to sanatize the html coming in from woo */}
            <div
              className="description-text border p-3"
              dangerouslySetInnerHTML={{ __html: product.description }}
            ></div>
          </section>
        </>
      )}
    </>
  );
};

export default ProductPage;
