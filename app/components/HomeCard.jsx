import React from "react";

import Image from "next/image";
const HomeCard = ({ img, title, text }) => {
  return (
    <div className="home-card-wrapper my-3 col-12 col-md-6 col-lg-4 d-flex  flex-column text-center justify-content-center ">
      <div className="home-card h-100  p-4">
        <Image
          className="home-card-img"
          height={500}
          width={500}
          src={"/card-bg1.jpg"}
          alt={"coffee shop image"}
        ></Image>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default HomeCard;
