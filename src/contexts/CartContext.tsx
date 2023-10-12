import { iCartContext } from "@/types/context";
import { ReactNode, createContext, useContext, useState } from "react";
import { useCounter } from "./ProductCounterContext";
import { products } from "@/utils/products";

import { iCartProduct } from "@/types/productTypes";

export const CartContext = createContext<iCartContext>({} as iCartContext);

const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [asideCart, setAsideCart] = useState<boolean>(false);
  const [product, setProduct] = useState<iCartProduct[]>([]);
  const { amount } = useCounter();
  const [total, setTotal] = useState<number>(0);

  const closeAsideCart = () => {
    setAsideCart(false);
  };

  const buy = (values: iCartProduct) => {
    let handleBuy = { index: values.id, amount: values.amount };

    localStorage.setItem(`item${values.id}`, JSON.stringify(handleBuy));
  };

  const openAsideCart = (values: iCartProduct) => {
    let handleData = [];
    for (let i = 0; i < products.length; i++) {
      const productData = JSON.parse(
        localStorage.getItem(`item${i}`) as string
      );
      handleData.push(productData);
    }
    console.log(handleData);
    setAsideCart(true);
  };

  const cancelBuy = (id: number) => {
    console.log(buy);
  };

  return (
    <CartContext.Provider
      value={{
        openAsideCart,
        closeAsideCart,
        asideCart,
        buy,
        total,
        cancelBuy,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

export const useCart = () => useContext(CartContext);
