// Inside your /pages/api/products/[id]/route.jsx

import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { NextResponse } from "next/server";

export async function GET(request) {
  console.log(request.nextUrl.pathname.split("/"), "this is the id you sent ");
  let arr = request.nextUrl.pathname.split("/");
  let id = arr[arr.length - 1];

  const api = new WooCommerceRestApi({
    url: process.env.API_URL,
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET,
    version: "wc/v3",
  });

  try {
    const response = await api.get(`products/${id}`);
    let json = JSON.stringify(response.data);
    return new Response(json);
  } catch (error) {
    throw new Error(error);
  }
}
