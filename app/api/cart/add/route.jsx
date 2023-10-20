import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request) {
  let res = fetch("http://ecomm.local/wc/store/v1/cart/add-item", {
    method: "POST",
    cache: "no-cache",
    headers: {
      Nonce: cookies().get("nonce"),
      "Cart-Token": cookies().get("cart-token"),
    },
    body: {
      id: request.id,
    },
  });
  if (res.ok) {
    console.log(res);
    return NextResponse.json(res);
  } else {
    return NextResponse.json({ message: "there was an error" });
  }
}
