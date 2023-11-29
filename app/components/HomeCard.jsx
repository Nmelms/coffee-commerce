import React from "react";

import Image from "next/image";
const HomeCard = ({ img, title, text }) => {
  return (
    <div className="home-card-wrapper my-3 col-12 col-md-6 col-lg-4 text-center">
      <div className="home-card h-100  p-4">
        <Image
          className="home-card-img"
          height={100}
          width={500}
          src={img}
          alt={"coffee shop image"}
        ></Image>
        <h2 className="mt-3">{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default HomeCard;
