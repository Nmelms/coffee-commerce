"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="navBar">
      <Container>
        <Image
          src="/coffeeLogo.svg"
          width="150"
          height="100"
          alt="coffee logo"
        />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
            <Link
              className="nav-link"
              href="http://ecomm.local/wp-json/wc/store/cart"
            >
              Contact Us
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
