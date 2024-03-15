import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { cookies } from "next/headers";

export async function GET(request) {
  const api = new WooCommerceRestApi({
    url: process.env.API_URL,
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET,
    version: "wc/v3",
  });

  try {
    let product = await request.json();
    console.log(product, "this is the product");
    const response = await api.get("product/");
    let json = JSON.stringify(response.data);
    return new Response(json);
  } catch (error) {
    throw new Error(error);
  }
}
