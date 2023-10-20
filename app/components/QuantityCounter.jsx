"use client";
import { NextResponse } from "next/server";
import { Button } from "react-bootstrap";
const QuantityCounter = ({ quantity, id }) => {
  const handleIncrement = async () => {
    console.log(id, "click");
    let res = await fetch("http://localhost:3000/api/cart/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ key: id, quantity }),
    });
    let json = await res.json();
    if (res.ok) {
      return NextResponse.json(json);
    } else {
      return NextResponse.json({ message: "error" });
    }
  };
  return (
    <div classname="d-flex">
      {/* <Button onClick={handleDecrement}> - </Button> */}
      <span className="p-3">{quantity} </span>
      <Button onClick={() => handleIncrement()}> + </Button>
    </div>
  );
};

export default QuantityCounter;
