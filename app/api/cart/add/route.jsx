import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request) {
  let req = await request.json();
  let id = req.id;
  async function fetchNonce() {
    const response = await fetch(
      "http://ecomm.local/wp-json/myplugin/v1/nonce"
    );
    const data = await response.json();
    return data.nonce;
  }
  const nonce = await fetchNonce();

  const res = await fetch(
    "http://ecomm.local/wp-json/wc/store/v1/cart/add-item",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cart-Token": request.headers.get("cart-token"),
        Nonce: nonce,
      },
      body: JSON.stringify({
        id,
      }),
    }
  );
  let token = res.headers.get("Cart-Token");
  return NextResponse.json({ cartToken: token });
}
