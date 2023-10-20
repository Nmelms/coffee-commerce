import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request) {
  let req = await request.json();
  let key = req.key;
  let quantity = req.quantity + 1;
  console.log(key, quantity);
  try {
    let res = await fetch(
      ` http://ecomm.local/wp-json/wc/store/v1/cart/update-item`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Nonce: cookies().get("nonce").value,
          "Cart-Token": cookies().get("cart-token").value,
        },
        body: JSON.stringify({ key, quantity }),
      }
    );
    let json = await res.json();
    console.log(json);

    return NextResponse.json(json);
  } catch {
    return NextResponse.json(res);
  }
}
