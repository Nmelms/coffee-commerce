"use client";
import useCartStore from "../useCartStore";
const AddToCartBtn = ({ product }) => {
  const { addToCart, cart } = useCartStore();
  const handleClick = (id) => {
    fetch("https://ecomm.local/wp-json/wc/store/cart/add-item", {
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify({
        id: 30,
        quantity: 1,
      }),

      // Adding headers to the request
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      // Converting to JSON
      .then((response) => console.log(response));
  };

  return <button onClick={() => handleClick()}>addToCartBtn</button>;
};

export default AddToCartBtn;
