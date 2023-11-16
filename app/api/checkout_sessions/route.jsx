import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function POST(req) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  let data = await req.json();

  let items = [];
  if (data) {
    data.line_items.map((item) => {
      items.push({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
            // Add other product details if necessary
          },
          unit_amount: item.price, // Convert to smallest currency unit
        },
        quantity: item.quantity,
      });
    });
  }

  const session = await stripe.checkout.sessions.create({
    line_items: items,
    mode: "payment",
    success_url: "http://localhost:3000",
    cancel_url: "http://localhost:3000",
  });

  return NextResponse.json(session.url);
}
