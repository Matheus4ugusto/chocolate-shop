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

  const openAsideCart = () => {
    setAsideCart(true);
  };

  const closeAsideCart = () => {
    setAsideCart(false);
  };

  const buy = (values: iCartProduct) => {
    const hasProduct = product.findIndex((item) => item.id === values.id);

    let productsCopy = [...product];

    if (hasProduct >= 0) {
      productsCopy[hasProduct].amount += 1;
      setProduct(productsCopy);
    } else {
      productsCopy = [...product, values];
    }
    console.log(product);
    
    setProduct(productsCopy);
    localStorage.setItem("cart", JSON.stringify(productsCopy));

    // setTotal(amount * product[values.id].preco);
    console.log([...product, values]);
    console.log(values.id);
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
