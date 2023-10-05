"use client";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ProductCard from "./ProductCard";
import { useStore } from "../appStore";

const ProductList = ({ data }) => {
  const [products, setProducts] = useState([]);
  const filters = useStore((state) => state.name);
  let filteredProducts = [...data];
  useEffect(() => {
    if (filters.length === 0) {
      setProducts(data);
    } else {
      const filteredProducts = data.filter((product) =>
        filters.some((filter) => product.acf.coffee_roast === filter)
      );

      setProducts(filteredProducts);
    }
  }, [filters, data]);
  // the effect depends on both filters and the original data

  return (
    <>
      {products.map((product) => {
        return (
          <ProductCard
            key={uuidv4()}
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
