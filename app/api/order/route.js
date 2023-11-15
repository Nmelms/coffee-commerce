import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request) {
  const WooCommerce = new WooCommerceRestApi({
    url: "http://ecomm.local",
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET,
    version: "wc/v3",
  });

  let data = await request.json();
  console.log(data);
  WooCommerce.post("orders", data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      return NextResponse.json({ message: "didnt work" });
    });

  // let json = JSON.stringify(response.data);
  // const response = await api.post("orders", json);

  // console.log("post was rannn");
  // let req = await request.json();
  // console.log(req);

  // let res = await fetch("http://ecomm.local/wp-json/wc/v3/orders", {
  //   method: "POST",
  //   cache: "no-cache",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ req }),
  // });
  // let json = await res.json();
  // return NextResponse.json({ json });

  // if (res.ok) {
  //   return NextResponse.json({ message: "it worked" });
  // } else {
  //   console.log(res.error);
  //   return NextResponse.json({ message: "something messed up" });
  // }
}
