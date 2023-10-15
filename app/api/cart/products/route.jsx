import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(request) {
  let token = request.headers.get("Cart-Token");

  const res = await fetch("http://ecomm.local/wp-json/wc/store/v1/cart", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Cart-Token": token,
    },
  });
  const responseData = await res.json();

  // Return the JSON data as the response body
  return new Response(JSON.stringify(responseData), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

// export async function POST() {
//   const created = await prisma.user.create({
//     data: { name: "nick" },
//   });
//   return new NextResponse(JSON.stringify(created, { status: 201 }));
// }
