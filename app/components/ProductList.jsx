"use client";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useFilterStore } from "../useFilterStore";

const ProductList = () => {
  const { filters, products } = useFilterStore();
  return (
    <>
      {products.filtered.map((product) => {
        return (
          <ProductCard
            key={product.id}
            img={product.images[0].src}
            price={product.price}
            name={product.name}
            roast={product.acf.coffee_roast}
          />
        );
      })}
    </>
  );
};

export default ProductList;
