import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request) {
  const api = new WooCommerceRestApi({
    url: process.env.API_URL,
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET,
    version: "wc/v3",
  });
  try {
    const response = await api.get(`products/${request.id}`);
    return NextResponse.json({ message: "okay" });
  } catch (error) {}
}
