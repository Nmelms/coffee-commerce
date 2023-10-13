import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export async function GET(request, context) {
  const api = new WooCommerceRestApi({
    url: "http://ecomm.local",
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET,
    version: "wc/v3",
  });

  try {
    const response = await api.get(`products/${context.params.id}`);
    return Response.json(response.data);
  } catch (error) {
    throw new Error(error);
  }
}
