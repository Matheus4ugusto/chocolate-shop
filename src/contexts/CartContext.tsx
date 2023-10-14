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

    let handleBuy = values;

    localStorage.setItem(`item${values.id}`, JSON.stringify(handleBuy));
  };

  const getProducts = () => {
    let handleData = [];
    for (let i = 0; i < products.length; i++) {
      const productData = JSON.parse(
        localStorage.getItem(`item${i}`) as string
      );
      handleData.push(productData);
    }

    const filteredData = handleData.filter((i) => i !== null);
    console.log(filteredData);
    return filteredData;
  };

  const openAsideCart = () => {
    setAsideCart(true);
  };

  const cancelBuy = () => {
    for(let i = 0; i < products.length; i++){
      localStorage.removeItem(`item${i}`)
    }
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
        getProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

export const useCart = () => useContext(CartContext);
