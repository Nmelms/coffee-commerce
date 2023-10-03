import { NextResponse } from "next/server";

export async function GET() {
  // const res = await fetch("https://ecomm.local/wp-json/wc/v3/products", {
  //   headers: {
  //     "Content-Type": "application/json",
  //     consumer_key: process.env.CONSUMER_KEY,
  //     consumer_secret: process.env.CONSUMER_SECRET,
  //   },
  // });
  // console.log(res);

  return NextResponse.json({ "message": "hello" });
}
