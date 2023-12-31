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

const fetchCart = async () => {
  let apiURL = process.env.API_URL;
  let nonce = cookies().has("nonce") ? cookies().get("nonce").value : "";
  let cartToken = cookies().has("cart-token")
    ? cookies().get("cart-token").value
    : "";
  let res = await fetch(`${apiURL}/wp-json/wc/store/v1/cart`, {
    method: "GET",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      Nonce: nonce,
      "Cart-Token": cartToken,
    },
  });
  let json = await res.json();
  return json;
};

const ProductPage = async ({ params }) => {
  const product = await fetchProduct(params);
  const cart = await fetchCart();

  let item = cart.items?.filter((item) => {
    return item.id === product.data.id;
  });

  // let item = cart.filter(item => item);

  return (
    <>
      <div
        style={{ marginTop: "6vh" }}
        className="store-hero w-100 d-flex justify-content-center align-items-center"
      >
        <h2>{product.data.name}</h2>
      </div>
      <div className="productPage container d-flex justify-content-center   space-apart">
        <div className="row product-row w-100 d-flex mb-lg-5 ">
          <Image
            className="product-img col-12 col-lg-6 mt-4"
            src={product.data.images[0].src}
            height={300}
            width={300}
            alt={product.data.name}
          />
          <div className="productDetails col-12  col-lg-6 d-flex  flex-column justify-content-between justify-content-md-around h-75">
            <span className="product-details-name mt-4">
              {product.data.name}
            </span>
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
            <div className="product-attribute-wrapper d-flex align-items-center mb-5">
              <span className="product-attribute-label">Quantity:</span>
              <span className="product-attribute-data">
                <QuantityCounter
                  id={item[0]?.key}
                  initialQuan={item[0]?.quantity ? item[0]?.quantity : 0}
                  productId={product?.data.id}
                />
              </span>
            </div>
            <AddToCartBtn product={product?.data} />
          </div>
        </div>
      </div>
      <section className="product-description container">
        <div className="description-title px-4 py-3">PRODUCT DESCRIPTION</div>
        {/* eventually need to sanatize the html coming in from woo */}
        <div
          className="description-text border p-3"
          dangerouslySetInnerHTML={{ __html: product.data.description }}
        ></div>
      </section>
    </>
  );
};

export default ProductPage;
