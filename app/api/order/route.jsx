import { NextResponse } from "next/server";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export async function POST(request) {
  let req = await request.json();
  let id = req.id;
  let data = req.data;
  console.log(req);

  const api = new WooCommerceRestApi({
    url: "http://ecomm.local",
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET,
    version: "wc/v3",
  });

  try {
    const response = await api.post("orders", req);
    return NextResponse.json({ message: "hello" });
  } catch (error) {
    throw new Error(error);
  }

  //   async function fetchNonce() {
  //     const response = await fetch(
  //       "http://ecomm.local/wp-json/myplugin/v1/nonce"
  //     );
  //     const data = await response.json();
  //     return data.nonce;
  //   }
  //   const nonce = await fetchNonce();

  //   const res = await fetch("http://ecomm.local/wp-json/wc/v3/orders", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       req,
  //     }),
  //   });
  //   console.log(await res.json());
  //   return NextResponse.json({ message: "sent" });
}
