import { iCartContext } from "@/types/context";
import { ReactNode, createContext, useContext, useState } from "react";
import { useCounter } from "./ProductCounterContext";
import { products } from "@/utils/products";
import { cartProduct } from "@/services/cartProduct.service";
import { iCartProduct } from "@/types/productTypes";

const CartContext = createContext<iCartContext>({} as iCartContext);

const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const { amount } = useCounter();

  const [aside, setAside] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const [product, setProduct] = useState<iCartProduct | null>(
    {} as iCartProduct
  );

  const openAside = () => {
    setAside(true);
  };

  const closeAside = () => {
    setAside(false);
  };

  const buy = ({ id }: { id: number }, values: iCartProduct) => {
    setTotal(amount * products[id].preco);
    const response = cartProduct(values);
    setProduct(response);
    localStorage.setItem("cart", JSON.stringify(response));
    console.log(id);
    
  };

  return (
    <CartContext.Provider value={{ openAside, closeAside, aside, buy, total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

export const useCart = () => useContext(CartContext);
