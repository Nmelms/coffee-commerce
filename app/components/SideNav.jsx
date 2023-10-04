"use client";
import { Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useStore } from "../appStore";

const SideNav = ({ roast, setRoast }) => {
  const names = useStore((state) => state.name);

  const handleChange = (e) => {
    const { checked, value } = e.target;
    useStore.setState((state) => ({
      name: checked
        ? [...state.name, value]
        : state.name.filter((val) => val !== value),
    }));
    console.log(useStore.getState().name);
  };

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
