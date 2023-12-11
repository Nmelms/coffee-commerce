"use client";
import Image from "next/image";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import HomeCard from "./components/HomeCard";
import useCartNumber from "./useCartNumber";
import Link from "next/link";
import Section3Card from "./components/Section3Card";

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
    // .then((data) => setItemCount(data.items_count));
  }, []);

  return (
    <div className="homepage">
      <div className="container-fluid home-hero m-0 d-flex flex-column align-items-center justify-content-center">
        <div className="main-title">
          <h1>THE COFFEE MASTERS</h1>
        </div>
        <Button href="/shop" className="shop-btn rounded-pill">
          SHOP NOW
        </Button>
      </div>
      <section className="container-fluid">
        <div className="home-quote p-5">
          <span className="quote-txt">
            vitae tempus quam pellentesque nec nam aliquam sem et tortor
            consequat id porta nibh venenatis cras sed felis eget velit aliquet
            sagittis id consectetur
          </span>
        </div>
      </section>
      <section className="container-fluid home-section3  px-md-5">
        <div className="row pb-lg-4">
          <div className="col-lg-6 d-flex flex-column">
            <Image
              alt="barista"
              className="section3-img mx-lg-0 mt-lg-4"
              src="/worker1.webp"
              width={500}
              height={500}
            ></Image>
            <span className="store-title mt-4">Online Store</span>
            <Link className="home-section-store-link" href="/shop">
              Fresh Coffee, Refresh Memories
            </Link>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
            <Button href="/shop" className="shop-btn rounded-pill">
              SHOP NOW
            </Button>
          </div>
          <div className="col-lg-6 d-lg-flex flex-lg-column justify-content-lg-around">
            <Section3Card
              src={"/cup1.webp"}
              title={"Dried Pure Instant Coffee"}
              text={
                "Habitant morbi tristict sectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              }
            />
            <Section3Card
              src={"/cup2.webp"}
              title={"Roasted & Grounded Coffee"}
              text={
                "Habitant morbi tristict sectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              }
            />
            <Section3Card
              src={"/cup3.webp"}
              title={"Rich Aroma Instant Coffee"}
              text={
                "Habitant morbi tristict sectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              }
            />
          </div>
        </div>
      </section>
      <section className="home-menu container-fluid d-flex flex-column align-items-center py-5 ">
        <Image
          alt="coffee beans"
          width={100}
          height={100}
          src="/beans.webp"
        ></Image>
        <span className="menu-title">OUR COFFEE MENU</span>
        <div className="row w-100">
          <div className="col-12 col-lg-6 text-center d-flex flex-column">
            <span>Coffee</span>

            <p>Drip Coffee.......$3.00</p>

            <p>Pour Over.......$4.00</p>

            <p>ChemX.......$4.00</p>

            <p>AeroPress.......$4.00</p>
          </div>
          <div className="col-12 col-lg-6 text-center d-flex flex-column">
            <span>TEA</span>

            <p>Black tea.......$3.00</p>

            <p>Green tea.......$3.00</p>

            <p>Chai tea.......$3.00</p>

            <p>Rooibos tea.......$1.00</p>
          </div>
        </div>
        <div className="row w-100">
          <div className="col-12 col-lg-6 text-center">
            <span>Espresso</span>
            <p>Single........$2.00</p>
            <p>Double........$3.00</p>
            <p>Cuban Coffee........$4.00</p>
            <p>Shaken Espresso........$4.00</p>
            <p>Long Shot.......$2.00</p>
          </div>
          <div className="col-12 col-lg-6 text-center">
            <span>MILKS</span>
            <p>Whole</p>
            <p>2%.</p>
            <p>Oat........+1</p>
            <p>Soy........+1</p>
            <p>Almond........+1</p>
          </div>
        </div>
      </section>
    </div>
  );
}
