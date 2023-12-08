"use client";
import { useEffect, useState } from "react";
import SideNav from "../components/SideNav";
import ProductList from "../components/ProductList";
import MobileFilter from "../components/MobileFilter";

const StorePage = () => {
  let [products, setProducts] = useState([]);
  let hostURL = process.env.NEXT_PUBLIC_FRONT_URL;

  console.log(products);

  useEffect(() => {
    fetch(`${hostURL}/api/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="store">
      <div className="container-fluid">
        <div className="row">
          <h2 className="d-flex justify-content-center align-items-center store-hero ">
            OUR COFFEE
          </h2>
          {/* for the future filter feature */}
          {/* <div className="col-md-3 position-relative">
            <SideNav data={proudctData} />
            <MobileFilter data={proudctData} />
          </div> */}
          <div className="col-12 flex-wrap container-fluid d-flex justify-content-center  ">
            <ProductList products={products}></ProductList>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorePage;
