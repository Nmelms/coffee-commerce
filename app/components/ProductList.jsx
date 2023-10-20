"use client";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useFilterStore } from "../useFilterStore";

const ProductList = ({ products }) => {
  // const { filters, products } = useFilterStore();
  return (
    <>
      {products.filtered.map((product) => {
        return <div>{product.name}</div>;
      })}
    </>
  );
};

export default ProductList;
