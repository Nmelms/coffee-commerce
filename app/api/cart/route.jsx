import { NextResponse } from "next/server";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { cookies } from "next/headers";

export async function GET() {
  let body = {};
  let res = await fetch("http://ecomm.local/wp-json/wc/store/v1/cart", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 1,
    },
  });
  if (res.ok) {
    //if cookies dont exist set cookies
    if (!cookies().has("cart-token")) {
      let cartToken = res.headers.get("cart-token");
      let nonce = res.headers.get("nonce");
      cookies().set("cart-token", cartToken);
      cookies().set("nonce", nonce);
    }
    return NextResponse.json(res);
  } else {
    return NextResponse.json({ message: "nope, didnt work" });
  }
}
