"use client";
import { useCart } from "../services/queries";

const Cart = () => {
  const cartQuery = useCart();

  console.log("cartQuery", cartQuery.data);

  if (cartQuery.isLoading) {
    return <div>Loading...</div>;
  }
  if (cartQuery.isError) {
    return <div>Error: {cartQuery.error.message}</div>;
  }

  return <div>{cartQuery.data?.count}</div>;
};

export default Cart;
