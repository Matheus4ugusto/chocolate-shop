import { products } from "@/utils/products";

export const getProductById = (id: number) => {
  return products[id];
};
