import { axiosinstance } from "./fetcher";

export const createProduct = async (url, { arg }) => {
  console.log("Creating product with data:", arg);

  console.log("Request URL:", url);

  await axiosinstance.post(url, arg);
};
