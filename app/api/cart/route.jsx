import { NextResponse } from "next/server";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { cookies } from "next/headers";

export async function GET() {
  let nonce = cookies().has("nonce") ? cookies().get("nonce").value : "";
  let cartToken = cookies().has("cart-token")
    ? cookies().get("cart-token").value
    : "";
  console.log(nonce, cartToken, "cart token");
  let res = await fetch("http://ecomm.local/wp-json/wc/store/v1/cart", {
    method: "GET",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      Nonce: nonce,
      "Cart-Token": cartToken,
    },
  });

  let json = await res.json();

  if (res.ok) {
    let nonce = res.headers.get("nonce");
    console.log(nonce);
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
