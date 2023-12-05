"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";
import Link from "next/link";
import CartCount from "./CartCount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="navBar" data-bs-theme="light">
      <Container>
        <Image
          className="coffee-logo"
          src="/coffeeLogo.webp"
          width="50"
          height="50"
          alt="coffee logo"
        />
        <Navbar.Toggle aria-controls="basic-navbar-nav nav-toggle" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" href="/">
              Home
            </Link>
            <Link className="nav-link" href="/about">
              About
            </Link>
            <Link className="nav-link" href="/shop">
              Shop
            </Link>
            <Link className="nav-link d-flex align-items-center" href="/cart ">
              <FontAwesomeIcon className="cart-icon" icon={faShoppingCart} />
              <CartCount />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
