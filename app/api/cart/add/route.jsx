import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request) {
  let apiURL = process.env.API_URL;
  let req = await request.json();
  let quantity = req.quantity;
  let id = req.id;
  try {
    let res = await fetch(`${apiURL}/wp-json/wc/store/v1/cart/add-item`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Nonce: cookies().get("nonce").value,
        "Cart-Token": cookies().get("cart-token").value,
      },
      body: JSON.stringify({ id, quantity }),
    });
    let json = await res.json();

    return NextResponse.json(json);
  } catch {
    return NextResponse.json(error);
  }
}
