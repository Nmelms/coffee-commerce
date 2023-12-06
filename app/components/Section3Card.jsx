import React from "react";
import Image from "next/image";

const Section3Card = ({ src, title, text }) => {
  return (
    <div className="d-flex flex-column align-items-center text-center my-4">
      <Image height={100} width={100} src={src}></Image>
      <span className="section3-card-title my-2">{title}</span>
      <span>{text}</span>
    </div>
  );
};

export default Section3Card;
