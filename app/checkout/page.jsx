"use client";
import { useState, useEffect } from "react";
import AddressForm from "../components/AddressForm";
import CheckoutBtn from "../components/CheckoutBtn";
import { NextResponse } from "next/server";
import { Next } from "react-bootstrap/esm/PageItem";

const Checkout = () => {
  const [orderData, setOrderData] = useState({
    line_items: [],
    billing: {},
    woocommerce_id: "",
  });
  const [lineitems, setLineItems] = useState([]);
  const [billingAddress, setBillingAddress] = useState({
    address_1: "",
    city: "",
    state: "",
    zipcode: "",
  });
  useEffect(() => {
    fetchLineitems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let arr = [];
    lineitems.map((item) => {
      arr.push({
        product_id: item.id,
        quantity: item.quantity,
        name: item.name,
        img_url: item.images[0].src,
        price: item.prices.price,
      });
    });
    setOrderData((prev) => ({
      ...prev,
      line_items: arr,
    }));
  }, [lineitems]);

  const fetchLineitems = () => {
    fetch(`api/cart`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("nopee");
        }
        return response.json();
      })
      .then((data) => {
        setLineItems(data.items); // Update the state with the fetched data
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  const handleChange = (e) => {
    //sets the billing state values
    const { id, value } = e.target;
    setBillingAddress((prevState) => {
      const newBillingAddress = {
        ...prevState,
        [id]: value,
      };

      setOrderData((prevOrderData) => ({
        ...prevOrderData,
        billing: newBillingAddress,
      }));

      return newBillingAddress;
    });
  };

  useEffect(() => {
    fetch("api/checkout_sessions", {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((response) => response.json())
      .then((data) => {
        window.location.href = data.url;
        return NextResponse.json({ message: "from checkout sessions" });
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderData.woocommerce_id]);

  const handleCheckoutClick = (e) => {
    // e.preventDefault();
    fetch("api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((response) => response.json())
      .then((data) => {
        setOrderData((prevOrderData) => ({
          ...prevOrderData,
          woocommerce_id: data.id,
        }));
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="d-flex checkout flex-column justify-content-center align-items-center h-100">
      <div className="title-wrapper text-center my-5">
        <h2 className="shipping-title">Shipping Address</h2>
        <span className="shipping-subtitle">
          (currently we are only shipping to the United States)
        </span>
      </div>

      <AddressForm
        billingAddres={billingAddress}
        setBillingAddress={setBillingAddress}
        handleChange={handleChange}
      />
      <CheckoutBtn handleClick={handleCheckoutClick}></CheckoutBtn>
    </div>
  );
};

export default Checkout;
