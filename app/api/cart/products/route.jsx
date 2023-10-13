import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET(request) {
  const products = await prisma.user.findMany();
  return NextResponse.json(products);
}

export async function POST() {
  const created = await prisma.user.create({
    data: { name: "nick" },
  });
  return new NextResponse(JSON.stringify(created, { status: 201 }));
}
