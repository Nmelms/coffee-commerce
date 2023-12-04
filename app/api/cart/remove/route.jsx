import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request) {
  let apiURL = process.env.API_URL;
  let key = await request.json();
  let res; // Define res outside of the try/catch

  try {
    res = await fetch(
      `${apiURL}/wp-json/wc/store/v1/cart/remove-item?key=${key}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Nonce: cookies().get("nonce").value,
          "Cart-Token": cookies().get("cart-token").value,
        },
      }
    );

    // If you need to use the response JSON in both try and catch, parse it here and store in a variable
    const responseData = await res.json();
    console.log(responseData);
    return NextResponse.json(responseData);
  } catch (error) {
    // Log the error message, not the response JSON, as the fetch might have failed
    console.log(error.message);
    // Return a response indicating failure
    return NextResponse.json({ responseData, error: error.message });
  }
}
