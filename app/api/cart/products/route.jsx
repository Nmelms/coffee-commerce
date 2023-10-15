import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET(request) {
  const fetchCart = async () => {
    let token = localStorage.getItem("carttoken");
    const res = await fetch("http://ecomm.local/wp-json/wc/store/v1/cart/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Cart-Token": token,
      },
    });

    return NextResponse.json(res);
  };

  fetchCart();
}

// export async function POST() {
//   const created = await prisma.user.create({
//     data: { name: "nick" },
//   });
//   return new NextResponse(JSON.stringify(created, { status: 201 }));
// }
