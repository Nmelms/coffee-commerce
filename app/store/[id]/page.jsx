import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import Image from "next/image";
import { Button } from "react-bootstrap";

const fetchProduct = async ({ id }) => {
  const api = new WooCommerceRestApi({
    url: "http://ecomm.local",
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
  console.log();

  return (
    <div className="productPage d-flex flex-column  align-items-center space-apart">
      <Image
        src={product.data.images[0].src}
        height={200}
        width={200}
        alt={product.data.name}
      />
      <div className="productDetails d-flex flex-column justify-content-between">
        <h2 className="text-white">{product.data.name}</h2>
        <span>star rating</span>
        {product.data.description}
        <span className="productPrice">${product.data.price}</span>
        <span>Quantity component</span>
        <Button className="rounded-pill m-3">Order Now</Button>
      </div>
    </div>
  );
};

export default ProductPage;
