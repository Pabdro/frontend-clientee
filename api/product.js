import axios from "./axios";

export const getProduct = () => axios.get("/products");