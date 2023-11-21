import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request) {
  let req = await request.json();
  let key = req.key;
  let quantity = req.quantity;
  let apiURL = process.env.API_URL;
  try {
    console.log(key, quantity);
    console.log(`${apiURL}/wp-json/wc/store/v1/cart`);
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

    console.log(json);
    return NextResponse.json(json);
  } catch {
    console.log("didnt");
    return NextResponse.json(res);
  }
}
