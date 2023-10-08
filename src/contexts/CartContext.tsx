import { iCartContext } from "@/types/context";
import { ReactNode, createContext, useContext, useState } from "react";

const CartContext = createContext<iCartContext>({} as iCartContext);

const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [aside, setAside] = useState<boolean>(false);

  const openAside = () => {
    setAside(true);
  };

  const closeAside = () => {
    setAside(false);
  };

  return (
    <CartContext.Provider value={{ openAside, closeAside, aside }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

export const useCart = () => useContext(CartContext);
