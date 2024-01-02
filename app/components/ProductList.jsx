"use client";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useFilterStore } from "../useFilterStore";

const ProductList = ({ products }) => {
  // const { filters, products } = useFilterStore();
  return (
    <>
      {products?.map((product, indx) => {
        return <ProductCard product={product} key={indx} />;
      })}
    </>
  );
};

export default ProductList;
