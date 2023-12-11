import React from "react";
import Image from "next/image";

const Section3Card = ({ src, title, text }) => {
  return (
    <div className="d-flex flex-column row flex-md-row align-items-center text-center my-4">
      <Image
        alt="coffee icon"
        className="col-md-4 section3-card-img"
        height={100}
        width={100}
        src={src}
      ></Image>
      <div className="col-md-8 d-flex flex-column text-">
        <span className="section3-card-title my-2">{title}</span>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Section3Card;
