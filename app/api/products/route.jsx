import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { cookies } from "next/headers";

export async function GET() {
  console.log(process.env.API_URL, "this is the api rul");
  const api = new WooCommerceRestApi({
    url: process.env.API_URL,
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET,
    version: "wc/v3",
  });

  try {
    const response = await api.get("products");
    let json = JSON.stringify(response.data);
    return new Response(json);
  } catch (error) {
    throw new Error(error);
  }
}
