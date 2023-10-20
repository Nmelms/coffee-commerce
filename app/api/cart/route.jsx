import { NextResponse } from "next/server";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { cookies } from "next/headers";

export async function GET() {
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
    let nonce = res.headers.get("nonce");
    cookies().set("nonce", nonce);

    if (!cookies().has("cart-token")) {
      let cartToken = res.headers.get("cart-token");
      cookies().set("cart-token", cartToken);
    }
    return NextResponse.json(res);
  } else {
    return NextResponse.json({ message: "nope, didnt work" });
  }
}
