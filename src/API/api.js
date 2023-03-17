import axios from "axios";

export const ProductList = async (signal) =>
  await axios.get(`https://fakestoreapi.com/products`, signal);
export const Categories = async (signal) =>
  await axios.get(`https://fakestoreapi.com/products/categories`, signal);
export const ProductByCategory = async (data) =>
  await axios.get(`https://fakestoreapi.com/products/category/${data}`);
