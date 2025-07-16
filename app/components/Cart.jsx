"use client";
import { useCart } from "../services/queries";

const Cart = () => {
  const cartQuery = useCart();
  console.log(1);

  console.log("cartQuery", cartQuery);

  return <div>{cartQuery.data?.totalCost}</div>;
};

export default Cart;
