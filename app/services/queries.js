import useSWR from "swr";

export function useCart() {
  return useSWR("/cart");
}
