"use client";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { useFilterStore } from "../useFilterStore";

const Slider = () => {
  const { filters, setFilter } = useFilterStore();
  const [range, setRange] = useState(25);
  const position = ((range - 5) / (50 - 5)) * 100;

  const handleChange = (e) => {
    setRange(e.target.value);
    setFilter("price", e.target.value);
  };

  return (
    <>
      <Form.Label>Priced Under: {range}</Form.Label>
      <div className="silder-wrapper">
        <Form.Range
          min={5}
          max={50}
          step={5}
          id={"rangeBubble"}
          value={range}
          onChange={(e) => handleChange(e)}
        ></Form.Range>
      </div>
    </>
  );
};

export default Slider;
