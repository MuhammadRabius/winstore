import axios from "axios";

export const ProductList = async (signal) =>
  await axios.get(`https://fakestoreapi.com/products`, signal);
