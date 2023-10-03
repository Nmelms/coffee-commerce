"use client";
import { Form } from "react-bootstrap";
import { useState, useEffect } from "react";

const SideNav = ({ roast, setRoast }) => {
  const handleChange = (e) => {
    e.target.checked
      ? setRoast([...roast, e.target.value])
      : setRoast(roast.filter((val) => val != e.target.value));
  };

  useEffect(() => {
    console.log(roast);
  }, [roast]);
  return (
    <div className="sideNav mt-0">
      <div className="row">
        <span>Filter by Roast</span>
        <Form value={roast} className="roast-filter">
          <Form.Check // prettier-ignore
            type="checkbox"
            id="one"
            label="Dark"
            value="dark"
            onChange={handleChange}
          />
          <Form.Check // prettier-ignore
            type="checkbox"
            id="one"
            label="Medium"
            value="medium"
            onChange={handleChange}
          />
          <Form.Check // prettier-ignore
            type="checkbox"
            id="one"
            label="Light"
            value="light"
            onChange={handleChange}
          />
        </Form>
      </div>
    </div>
  );
};

export default SideNav;
