import React from "react";
import useCartNumber from "../useCartNumber";

const CartCount = () => {
  const { itemCount } = useCartNumber();
  return <div>{itemCount > 0 && itemCount}</div>;
};

export default CartCount;
