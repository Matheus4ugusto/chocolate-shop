export interface ProductProps {
  id: number;
  nome: string;
  image_logo: string;
  path: string;
  preco: number;
}

export interface iCartProduct extends ProductProps {
  amount: number;
}
