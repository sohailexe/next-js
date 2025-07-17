import axios from "axios";

export const axiosinstance = axios.create({
  baseURL: "http://localhost:8080", // Adjust the base URL as needed
});

const fetcher = (url) => {
  return axiosinstance.get(url).then((response) => response.data);
};
export default fetcher;
