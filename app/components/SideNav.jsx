"use client";
import { Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import Slider from "./Slider";
import RoastFilter from "./RoastFilter";
import { useFilterStore } from "../useFilterStore";

const SideNav = ({ data }) => {
  const { filters, products, setProducts } = useFilterStore();

  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    setProducts("all", data);
  }, []);

  useEffect(() => {
    const runFilters = () => {
      let result = products.all;
      //roast filter
      if (filters.roast.length) {
        result = result.filter((product) =>
          filters.roast.includes(product.acf.coffee_roast)
        );
      }
      //Price slider filter
      if (filters.price) {
        result = result.filter((product) => {
          return Math.round(product.price) <= filters.price;
        });
      }

      // Add more filter logic here for price, brand, etc.
      // ...

      setProducts("filtered", result);
    };

    runFilters();
  }, [filters, products.all]);
  return (
    <div className="sideNav mt-0">
      <div className="row">
        <span>Filter by Roast</span>
        <RoastFilter />
      </div>
      <div>
        <Slider />
      </div>
    </div>
  );
};

export default SideNav;
