"use client";
import { NextResponse } from "next/server";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
const QuantityCounter = ({ quantity, id, setCartItems }) => {
  const [num, setNum] = useState(quantity);
  const handleIncrement = async () => {
    setNum(num + 1);
    let res = await fetch("http://localhost:3000/api/cart/update", {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ key: id, quantity: num }),
    });
    let json = await res.json();
    if (res.ok) {
      setCartItems(json.items);
      return NextResponse.json(json);
    } else {
      return NextResponse.json({ message: "error" });
    }
  };
  return (
    <div classname="d-flex">
      {/* <Button onClick={handleDecrement}> - </Button> */}
      <span className="p-3">{num} </span>
      <Button onClick={() => handleIncrement()}> + </Button>
    </div>
  );
};

export default QuantityCounter;
