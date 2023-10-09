import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const fetchProduct = async ({ id }) => {
  console.log(id);
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
  console.log(params.id);
  const product = await fetchProduct(params);
  return <div>{product.data.name}</div>;
};

export default ProductPage;
