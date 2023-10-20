import { NextResponse } from "next/server";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { cookies } from "next/headers";

export async function GET() {
  let nonce = cookies().has("nonce") ? cookies().get("nonce").value : "";
  let res = await fetch("http://ecomm.local/wp-json/wc/store/v1/cart", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Nonce: nonce,
      "Cart-Token": cookies().get("cart-token").value,
    },
    next: {
      revalidate: 1,
    },
  });

  let json = await res.json();

  if (res.ok) {
    let nonce = res.headers.get("nonce");
    cookies().set("nonce", nonce);

    if (!cookies().has("cart-token")) {
      let cartToken = res.headers.get("cart-token");
      cookies().set("cart-token", cartToken);
    }
    return NextResponse.json(json);
  } else {
    return NextResponse.json({ message: "nope, didnt work" });
  }
}
