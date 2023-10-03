"use client";
import ProductCard from "./ProductCard";
const ProductList = ({ products }) => {
  return (
    <div>
      {products.data.map((product) => {
        return (
          <ProductCard
            img={product.images[0].src}
            price={product.price}
            name={product.name}
            roast={product.acf.coffee_roast}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
