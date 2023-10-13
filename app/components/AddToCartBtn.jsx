"use client";
import useCartStore from "../useCartStore";
const AddToCartBtn = ({ product }) => {
  async function fetchNonce() {
    const response = await fetch(
      "http://ecomm.local/wp-json/myplugin/v1/nonce"
    );
    const data = await response.json();
    return data.nonce;
  }
  const handleClick = async (id) => {
    const nonce = await fetchNonce();
    console.log(nonce);
    fetch("http://ecomm.local/wp-json/wc/store/v1/cart/add-item", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Nonce: nonce,
      },
      body: JSON.stringify({
        id: 27,
      }),
    });
  };

  return (
    <>
      <button onClick={() => handleClick()}>addToCartBtn</button>
    </>
  );
};

export default AddToCartBtn;
