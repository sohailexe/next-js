import useSWR from "swr";

export function useUser() {
  console.log("useUser called");

  return useSWR("/user");
}

export function useCart() {
  const { data } = useUser();

  return useSWR(data ? "/cart" : null);
}
