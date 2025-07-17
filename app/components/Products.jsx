"use client";
import { useProducts } from "../services/queries";
import useCreateProduct from "../services/mutations";

const Products = () => {
  const { data, mutate, isLoading } = useProducts();
  const { trigger, isMutating } = useCreateProduct();

  async function handleCreateProduct(title) {
    await trigger(
      {
        title,
      },
      {
        optimisticData: [
          ...data,
          { id: Date.now(), title: `${title} (optimistic)` },
        ],
        // rollbackOnError: true,
      }
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    handleCreateProduct(title);

    e.target.reset(); // Reset the form after submission
  }

  return (
    <div>
      <p>My Products</p>
      <ul>
        {isLoading ? (
          <li>Loading...</li>
        ) : (
          data.map((product) => <li key={product.id}>{product.title}</li>)
        )}
      </ul>

      <hr />
      <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
        <input type="text" name="title" placeholder="Product title" required />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default Products;
