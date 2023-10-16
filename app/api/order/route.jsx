import { NextResponse } from "next/server";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export async function POST(request) {
  let req = await request.json();
  let id = req.id;
  let data = req.data;

  const api = new WooCommerceRestApi({
    url: "http://ecomm.local",
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET,
    version: "wc/v3",
  });

  try {
    const response = await api.post("orders", req);
    let json = JSON.stringify(response.data);

    return new Response(json);
  } catch (error) {
    throw new Error(error);
  }
}
