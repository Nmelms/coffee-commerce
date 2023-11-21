import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request) {
  let req = await request.json();
  let key = req.key;
  let quantity = req.quantity;
  let apiURL = process.env.API_URL;
  try {
    let res = await fetch(`${apiURL}/wp-json/wc/store/v1/cart/update-item`, {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Nonce: cookies().get("nonce").value,
        "Cart-Token": cookies().get("cart-token").value,
      },
      body: JSON.stringify({ key, quantity }),
    });
    let json = await res.json();

    return NextResponse.json(json);
  } catch {
    return NextResponse.json(res);
  }
}
