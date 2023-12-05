"use client";
import Image from "next/image";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import HomeCard from "./components/HomeCard";
import useCartNumber from "./useCartNumber";

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
      <section className="container-fluid home-section3"></section>
      {/* <div className="container">
        <div className="row home-card-row d-flex aligin-items-center my-5 ">
          <HomeCard
            title={"MENU"}
            text={
              "lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel aucibus in ornare quam viverra orci sagittis eu volutpat "
            }
            img={"/card-bg2.jpg"}
          >
            one
          </HomeCard>
          <HomeCard
            title={"OUR STORY"}
            text={
              "eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet"
            }
            img={"/card-bg1.jpg"}
          >
            two
          </HomeCard>
          <HomeCard
            title={"SHOP COFEE"}
            text={
              "tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras"
            }
            img={"/card-bg3.jpg"}
          >
            three
          </HomeCard>
        </div>
      </div> */}
    </div>
  );
}
