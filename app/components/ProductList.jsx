"use client";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ProductCard from "./ProductCard";
const ProductList = ({ data }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(data);
  }, []);

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
