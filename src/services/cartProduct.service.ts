import { iCartProduct } from "@/types/productTypes";

export const cartProduct = (values: iCartProduct) => {
  return {
    id: values.id,
    nome: values.nome,
    amount: values.amount,
    preco: values.preco,
    path: values.path,
    image_logo: values.image_logo
  };
};
