import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import Image from "next/image";

const fetchProduct = async (id) => {
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

const ProductDescription = async ({ id }) => {
  const product = await fetchProduct(id);
  return (
    <div className="productDetails d-flex flex-column justify-content-between">
      <h2 className="text-white">{product.data.name}</h2>
      <span>star rating</span>
      {product.data.description}
      <span className="productPrice">${product.data.price}</span>
      <span>Quantity component</span>
    </div>
  );
};

export default ProductDescription;
