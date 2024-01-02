import { NextResponse } from "next/server";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export async function POST(res) {
  let event = await res.json();

  if (event.type === "payment_intent.succeeded") {
    const paymentIntent = event.data.object;
    const woocommerceId = paymentIntent.metadata.woocommerce_id;

    // Now use this woocommerceId to update the order status in WooCommerce
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object; // Checkout Session object
    const woocommerceOrderId = session.metadata.woocommerce_id;
    const WooCommerce = new WooCommerceRestApi({
      url: process.env.API_URL,
      consumerKey: process.env.CONSUMER_KEY,
      consumerSecret: process.env.CONSUMER_SECRET,
      version: "wc/v3",
    });

    try {
      const data = {
        status: "completed",
      };
      WooCommerce.put(`orders/${woocommerceOrderId}`, data)
        .then((response) => {})
        .catch((error) => {});
      return NextResponse.json(response.data);
    } catch (error) {
      return NextResponse.json({ message: "order failed" });
    }

    // Use the woocommerceOrderId to update the corresponding order in WooCommerce
  }
  return NextResponse.json(event);
}
