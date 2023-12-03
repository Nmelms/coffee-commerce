"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import useCartNumber from "../useCartNumber";
const NavBar = () => {
  const { itemCount } = useCartNumber();
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
            <Link className="nav-link" href="/cart ">
              <FontAwesomeIcon icon={faShoppingCart} />
              {itemCount > 0 && itemCount}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
