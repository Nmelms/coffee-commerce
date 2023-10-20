"use client";
import { Button } from "react-bootstrap";
const QuantityCounter = ({ quantity, id }) => {
  const handleIncrement = async () => {
    const data = {
      quantity: quantity++,
    };
    WooCommerce.put(`products/${id}`, data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
    // fetch(`http://ecomm.local/wp-json/wc/v3/products/${id}`, {});
  };
  return (
    <div classname="d-flex">
      {/* <Button onClick={handleDecrement}> - </Button> */}
      <span className="p-3">{quantity} </span>
      <Button onClick={handleIncrement}> + </Button>
    </div>
  );
};

export default QuantityCounter;
