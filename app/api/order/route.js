import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request) {
  let req = await request.json();
  let id = req.id;

  console.log(req);
  let res = await fetch("http://ecomm.local/wp-json/wc/v3/orders");

  if (res.ok) {
    return NextResponse.json({ message: "it worked" });
  } else {
    return NextResponse.json({ message: "did not work" });
  }
}
