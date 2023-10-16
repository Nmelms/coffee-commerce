"use client";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
const AddressForm = ({ orderData, setOrderData }) => {
  const [billingAddress, setBillingAddress] = useState({
    address_1: "",
    city: "",
    state: "",
    zipcode: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setBillingAddress((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const confirmAddress = () => {
    setOrderData((prev) => ({
      ...prev,
      billing: billingAddress,
    }));
  };
  return (
    <Form className="address-form">
      <Form.Group className="mb-3" controlId="address_1">
        <Form.Control
          onChange={(e) => handleChange(e)}
          type="password"
          placeholder="Street Address"
        />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button onClick={confirmAddress} variant="primary">
        Use this address
      </Button>
    </Form>
  );
};

export default AddressForm;
