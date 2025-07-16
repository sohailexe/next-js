import { useProducts } from "./queries";
import useSWRMutation from "swr/mutation";
import { createProduct } from "./api";

export default function useCreateProduct() {
  const { mutate } = useProducts();

  //it is equivalent to
  //                              (url, { arg }) => createProduct(url, { arg })
  return useSWRMutation("/products", createProduct, {
    onError: (error) => {
      console.error("Error creating product:", error);
    },

    onSuccess: () => {
      mutate();
    },
  });
}
