"use client";
import Image from "next/image";
import { Button } from "react-bootstrap";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch(`/api/cart/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 10,
      },
    }).then((res) => res.json());
    // .then((data) => console.log(data));
  }, []);

  return (
    <div className="homepage">
      <div className="container-fluid home-hero m-0 d-flex flex-column align-items-center justify-content-center">
        <div className="main-title">
          <h1>Enjoy Your Happy Moment With Coffee</h1>
        </div>
        <Button href="/shop" className="shop-btn">
          SHOP NOW
        </Button>
      </div>
      <div class="container">this is the 2nd content</div>
    </div>
  );
}
