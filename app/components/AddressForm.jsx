"use client";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
const AddressForm = ({
  orderData,
  setOrderData,
  billingAddress,
  setBillingAddress,
  handleChange,
}) => {
  return (
    <Form className="address-form container">
      <div className="row d-flex justify-content-center">
        <Form.Group className="mb-3 col-4" controlId="first_name">
          <Form.Control
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="First Name"
          />
        </Form.Group>
        <Form.Group className="mb-3 col-4" controlId="last_name">
          <Form.Control
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="Last Name"
          />
        </Form.Group>
      </div>
      <div className="row d-flex justify-content-center">
        <Form.Group className="mb-3 col-8" controlId="street">
          <Form.Control
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="Street Address"
          />
        </Form.Group>
      </div>
      <div className="row d-flex justify-content-center">
        <Form.Group className="mb-3 col-4" controlId="city">
          <Form.Control
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="City"
          />
        </Form.Group>
        <Form.Group className="mb-3 col-2" controlId="state">
          <Form.Control
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="State"
          />
        </Form.Group>
        <Form.Group className="mb-3 col-2" controlId="zip">
          <Form.Control
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="Zip"
          />
        </Form.Group>
      </div>

      {/* <Form.Group className="mb-3" controlId="address_1">
        <Form.Control
          onChange={(e) => handleChange(e)}
          type="password"
          placeholder="Street Address"
        />
      </Form.Group> */}
      {/* <Button onClick={confirmAddress} variant="primary">
          Use this address
        </Button> */}
    </Form>
  );
};

export default AddressForm;
