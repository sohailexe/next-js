import useSWR from "swr";
import logger from "../../utils/logger";

export function useUser() {
  return useSWR("/user");
}

export function useCart() {
  const { data } = useUser();
  return useSWR(data ? "/cart" : null);
}

export function useProducts() {
  return useSWR("/products", {
    use: [logger],
  });
}
