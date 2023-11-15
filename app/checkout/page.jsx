"use client";
import { useState, useEffect } from "react";
import AddressForm from "../components/AddressForm";
import CheckoutBtn from "../components/CheckoutBtn";
import { NextResponse } from "next/server";
import { Next } from "react-bootstrap/esm/PageItem";

const checkout = () => {
  const [orderData, setOrderData] = useState({ line_items: [], billing: {} });
  const [lineitems, setLineItems] = useState([]);
  const [billingAddress, setBillingAddress] = useState({
    address_1: "",
    city: "",
    state: "",
    zipcode: "",
  });
  useEffect(() => {
    fetchLineitems();
  }, []);

  useEffect(() => {
    let arr = [];
    lineitems.map((item) => {
      arr.push({ product_id: item.id, quantity: item.quantity });
    });
    setOrderData((prev) => ({
      ...prev,
      line_items: arr,
    }));
  }, [lineitems]);

  const fetchLineitems = () => {
    fetch("http://localhost:3000/api/cart")
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

  const handleCheckoutClick = (e) => {
    fetch("api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((response) => console.log(response))

      .catch((error) => console.error(error));
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center h-100">
      Shipping address
      <AddressForm
        billingAddres={billingAddress}
        setBillingAddress={setBillingAddress}
        handleChange={handleChange}
      />
      <CheckoutBtn handleClick={handleCheckoutClick}></CheckoutBtn>
    </div>
  );
};

export default checkout;
