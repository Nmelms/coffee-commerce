import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function POST(req) {
  console.log("checkout session ran");
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  // let data = await request.json();

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "nick",
            // Add other product details if necessary
          },
          unit_amount: 200 * 100, // Convert to smallest currency unit
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:3000",
    cancel_url: "http://localhost:3000",
  });

  return NextResponse.json(session.url);
}
