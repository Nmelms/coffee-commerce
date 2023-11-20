import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { Next } from "react-bootstrap/esm/PageItem";

export async function POST(request) {
  const WooCommerce = new WooCommerceRestApi({
    url: process.env.API_URL,
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET,
    version: "wc/v3",
  });

  try {
    let data = await request.json();
    const response = await WooCommerce.post("orders", data);
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json({ message: "order failed" });
  }
}
