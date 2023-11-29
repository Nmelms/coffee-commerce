"use client";
import Image from "next/image";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import HomeCard from "./components/HomeCard";

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
        <Button href="/shop" className="shop-btn rounded-pill">
          SHOP NOW
        </Button>
        <div className="custom-shape-divider-bottom-1701138620">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <div className="container">
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
      </div>
    </div>
  );
}
