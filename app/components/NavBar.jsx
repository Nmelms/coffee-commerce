"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import CartCount from "./CartCount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 992) {
      setIsSmallScreen(true);
    }

    function handleResize() {
      setIsSmallScreen(window.innerWidth < 996);
    }
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Navbar
      expand="lg"
      className="navBar"
      data-bs-theme="light"
      {...(isSmallScreen && { expanded: expanded })}
    >
      <Container>
        <a href="/">
          <Image
            className="coffee-logo"
            src="/coffeeLogo.webp"
            width="50"
            height="50"
            alt="coffee logo"
          />
        </a>

        <Navbar.Toggle
          onClick={() => setExpanded(expanded ? false : true)}
          aria-controls="basic-navbar-nav nav-toggle"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link
              onClick={() => setExpanded(expanded ? false : true)}
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
              className="nav-link"
              href="/"
            >
              Home
            </Link>
            <Link
              onClick={() => setExpanded(expanded ? false : true)}
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
              className="nav-link"
              href="/about"
            >
              About
            </Link>
            <Link
              onClick={() => setExpanded(expanded ? false : true)}
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
              className="nav-link"
              href="/shop"
            >
              Shop
            </Link>
            <Link
              onClick={() => setExpanded(expanded ? false : true)}
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
              className="nav-link d-flex align-items-center"
              href="/cart "
            >
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
