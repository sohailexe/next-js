import useSWR from "swr";

export function useUser() {
  return useSWR("/user");
}

export function useCart() {
  const { data } = useUser();
  return useSWR(data ? "/cart" : null);
}

export function useProducts() {
  return useSWR("/products");
}