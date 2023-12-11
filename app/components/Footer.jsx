"use client";
import React from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer container">
      <div className="row">
        <div className="col-12 col-md-6 p-5">
          <h3>Contact Us</h3>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="name" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control as="textarea" rows={3} placeholder="Comments" />
            </Form.Group>
            <Button className="contact-submit-btn">SUBMIT</Button>
          </Form>
        </div>
        <div className="col-12 col-md-6">
          <div className="row mt-5 d-flex align-items-center col-12 ">
            <div className="col-6 ">
              <h4 className="m-0">FOLLOW US</h4>
            </div>
            <div className="col-6">
              <FontAwesomeIcon className="p-2" size="xl" icon={faFacebook} />
              <FontAwesomeIcon className="p-2" size="xl" icon={faInstagram} />
              <FontAwesomeIcon className="p-2" size="xl" icon={faYoutube} />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="row">
                <h4 className="mb-3">Contact us</h4>
                <span className="text-decoration-underline mt-3">Address:</span>
                <span className="m-0 fw-light">9090 Example Road</span>
                <span className="m-0">Charlotte, NC</span>
                <span className="m-0">55555</span>
              </div>
              <div className="row">
                <span className="text-decoration-underline mt-3">Phone</span>
                <span>(386) 555-5555</span>
              </div>
              <div className="row">
                <span className="text-decoration-underline mt-3">E-Mail</span>
                <span>example@gmail.com</span>
              </div>
            </div>
            <div className="col-6">
              <h4>Navigate</h4>
              <ul className="d-flex flex-column justify-content-start">
                <Link className="text-start footer-link" href="/">
                  Home
                </Link>
                <Link className="text-start footer-link" href="/">
                  About
                </Link>
                <Link className="text-start footer-link" href="/">
                  Shop
                </Link>
                <Link className="text-start footer-link" href="/">
                  Cart
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
