import { NextResponse } from "next/server";

export async function POST(res) {
  let data = await res.json();
  console.log(data);
  return NextResponse.json(data);
}
