import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import Image from "next/image";
import { Button } from "react-bootstrap";
import AddToCartBtn from "../../components/AddToCartBtn";
import QuantityCounter from "../../components/QuantityCounter";
import { cookies } from "next/headers";

const fetchProduct = async ({ id }) => {
  const api = new WooCommerceRestApi({
    url: process.env.API_URL,
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET,
    version: "wc/v3",
  });
  try {
    const response = await api.get(`products/${id}`);
    return response;
  } catch (error) {}
};

const ProductPage = async ({ params }) => {
  const product = await fetchProduct(params);
  console.log(product.data);

  return (
    <>
      <div className="product-hero w-100 d-flex justify-content-center align-items-center">
        <h2>{product.data.name}</h2>
      </div>
      <div className="productPage d-flex flex-column  align-items-start  space-apart mx-5">
        <Image
          className="product-img mt-4"
          src={product.data.images[0].src}
          height={300}
          width={300}
          alt={product.data.name}
        />
        <div className="productDetails  d-flex  flex-column justify-content-between">
          <span className="product-name mt-4">{product.data.name}</span>
          <div className="product-attribute-wrapper d-flex align-items-center  ">
            <span className="product-attribute-label ">Price:</span>
            <span className="product-attribute-data price ">
              ${product.data.price}
            </span>
          </div>
          <div className="product-attribute-wrapper d-flex align-items-center">
            <span className="product-attribute-label">Weight:</span>
            <span className="product-attribute-data">
              {product.data.acf.weight}
            </span>
          </div>
          <div className="product-attribute-wrapper d-flex align-items-center">
            <span className="product-attribute-label">Roast:</span>
            <span
              className={`product-attribute-data ${product.data.acf.coffee_roast}`}
            >
              {product.data.acf.coffee_roast}
            </span>
          </div>
          <div className="product-attribute-wrapper d-flex align-items-center">
            <span className="product-attribute-label">Availibility:</span>
            <span
              className={`product-attribute-data ${product.data.stock_status}`}
            >
              {product.data.stock_status === "instock"
                ? "In Stock!"
                : "Sorry! We are out of stock."}
            </span>
          </div>
          <div className="quantitit-wrapper d-flex">
            <QuantityCounter />
          </div>

          <span className="productPrice">${product.data.price}</span>
          <span>Quantity component</span>
          <AddToCartBtn product={product.data.id} />
        </div>
      </div>
    </>
  );
};

export default ProductPage;
