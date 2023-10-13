import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { NextResponse } from "next/server";

export async function POST() {
  const api = new WooCommerceRestApi({
    url: "http://ecomm.local",
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET,
    version: "wc/v3",
  });

  try {
    const response = await api.get("products");
    return Response.json(response.data);
  } catch (error) {
    throw new Error(error);
  }
}
