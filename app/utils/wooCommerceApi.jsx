import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
  url: "http://ecomm.local",
  consumerKey: process.env.CONSUMER_KEY,
  consumerSecret: process.env.CONSUMER_SECRET,
  version: "wc/v3",
});

export async function fetchWooCommerceProducts() {
  try {
    const response = await api.get("products");
    console.log(response);
    return response;
  } catch (error) {
    throw new Error(error);
  }
}
